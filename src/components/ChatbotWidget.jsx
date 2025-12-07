import { useState, useRef, useEffect } from "react";
import { Send, X, MessageCircle, AlertCircle, ChevronDown } from "lucide-react";
import LogoIcon from "../assets/images/logo-icon.png";
export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chatId, setChatId] = useState(null);
  const [error, setError] = useState(null);
  const [isInitializing, setIsInitializing] = useState(false);
  const [initCooldownUntil, setInitCooldownUntil] = useState(0);
  const [initAttemptCount, setInitAttemptCount] = useState(0);
  const [processedMessageIds, setProcessedMessageIds] = useState(new Set());
  const [showNeedHelp, setShowNeedHelp] = useState(false);
  const messagesEndRef = useRef(null);

  // Configuration - Update this to match your backend URL
  const API_BASE_URL =
    import.meta.env?.VITE_API_URL ||
    (typeof process !== "undefined" && process.env?.REACT_APP_API_URL) ||
    "http://localhost:3001/api";

  // Show "Need Help?" bubble after 1s when site loads or refreshes
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNeedHelp(true);
    }, 1000); // 1 second delay

    // Cleanup on unmount
    return () => clearTimeout(timer);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Function to format text with bold markdown
  const formatMessageText = (text) => {
    if (!text) return null;

    // Split text by ** markers
    const parts = text.split(/(\*\*[^*]+\*\*)/g);

    return parts.map((part, index) => {
      // Check if this part is wrapped in **
      if (part.startsWith("**") && part.endsWith("**")) {
        // Remove the ** and make it bold
        const boldText = part.slice(2, -2);
        return (
          <strong key={index} className="font-semibold">
            {boldText}
          </strong>
        );
      }
      // Regular text
      return <span key={index}>{part}</span>;
    });
  };

  const extractNewAgentMessages = (data, alreadyProcessedIds) => {
    const out = [];
    if (!data) return out;

    const pushMsg = (text, id, ts) => {
      if (!text || !String(text).trim()) return;
      if (id && alreadyProcessedIds.has(id)) return; // Skip already seen messages

      out.push({
        id: id || `bot-${Date.now()}-${Math.random()}`,
        text: String(text),
        sender: "bot",
        timestamp: new Date(ts ? Number(ts) : Date.now()),
      });
    };

    // Common: data.messages is an array of { role, content, message_id, created_timestamp }
    if (Array.isArray(data.messages)) {
      data.messages.forEach((m) => {
        const role = m.role || m.sender || "";
        const content = m.content ?? m.text ?? m.output_text ?? m.message ?? "";
        if (role === "agent")
          pushMsg(content, m.message_id || m.id, m.created_timestamp);
      });
      if (out.length) return out;
    }

    // Another shape seen: message_with_tool_calls
    if (Array.isArray(data.message_with_tool_calls)) {
      data.message_with_tool_calls.forEach((m) => {
        const role = m.role || "";
        const content = m.content ?? m.text ?? "";
        if (role === "agent")
          pushMsg(content, m.message_id || m.id, m.created_timestamp);
      });
      if (out.length) return out;
    }

    // Some endpoints return output_text or reply fields
    if (typeof data.output_text === "string" && data.output_text.trim()) {
      pushMsg(
        data.output_text,
        data.message_id || data.id,
        data.created_timestamp
      );
    }

    if (data.reply && (data.reply.text || data.reply.output_text)) {
      pushMsg(
        data.reply.text ?? data.reply.output_text,
        data.reply.id || data.reply.message_id,
        data.reply.created_timestamp
      );
    }

    return out;
  };

  // Initialize chat session when widget opens
  useEffect(() => {
    if (isOpen && !chatId && !isInitializing) {
      if (Date.now() < initCooldownUntil) {
        const waitSec = Math.ceil((initCooldownUntil - Date.now()) / 1000);
        setError(`Rate limited. Retrying in ${waitSec}s...`);
        return;
      }
      initializeChatSession();
    }
  }, [isOpen, chatId, isInitializing, initCooldownUntil]);

  const initializeChatSession = async () => {
    setIsInitializing(true);
    setError(null);

    // Prevent immediate retries while in cooldown
    if (Date.now() < initCooldownUntil) {
      const waitSec = Math.ceil((initCooldownUntil - Date.now()) / 1000);
      setError(`Rate limited. Retrying in ${waitSec}s...`);
      setIsInitializing(false);
      return;
    }

    try {
      console.log("Initializing chat session...");

      const response = await fetch(`${API_BASE_URL}/chat/init`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        // Handle 429 Too Many Requests with exponential backoff
        if (response.status === 429) {
          const nextAttempt = Math.min(
            60000,
            1000 * Math.pow(2, initAttemptCount)
          );
          setInitAttemptCount((c) => c + 1);
          setInitCooldownUntil(Date.now() + nextAttempt);
          const waitSec = Math.ceil(nextAttempt / 1000);
          setError(
            `Rate limited by server. Waiting ${waitSec}s before retrying.`
          );
          setIsInitializing(false);
          return;
        }
        throw new Error(
          errorData.details || errorData.error || "Failed to initialize chat"
        );
      }

      const data = await response.json().catch(() => ({}));
      console.log("Chat initialized:", data.chat_id);
      setChatId(data.chat_id);
      setProcessedMessageIds(new Set());
      // reset backoff on success
      setInitAttemptCount(0);
      setInitCooldownUntil(0);

      const initialMessages = extractNewAgentMessages(data, new Set());

      // If no initial message from agent, show default welcome message
      if (initialMessages.length === 0) {
        initialMessages.push({
          id: "welcome",
          text: "Hey there! 😊 I'm Inka from Inkcredible Studios. How can I help you with your design needs today?",
          sender: "bot",
          timestamp: new Date(),
        });
      }

      setMessages(initialMessages);
      const newProcessedIds = new Set(initialMessages.map((m) => m.id));
      setProcessedMessageIds(newProcessedIds);
    } catch (err) {
      console.error("Error initializing chat:", err);
      setError(
        err.message || "Failed to connect to chat service. Please try again."
      );

      // Show error message in chat
      setMessages([
        {
          id: "error",
          text: "I'm having trouble connecting right now. Please try again in a moment.",
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsInitializing(false);
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    if (!chatId) {
      setError(
        "Chat session not initialized. Please close and reopen the chat."
      );
      return;
    }

    const userMessageText = inputValue.trim();
    const userMessage = {
      id: `user-${Date.now()}`,
      text: userMessageText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);
    setError(null);

    try {
      console.log("Sending message:", userMessageText);

      const response = await fetch(`${API_BASE_URL}/chat/message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          user_message: userMessageText,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.details || errorData.error || "Failed to send message"
        );
      }

      const data = await response.json().catch(() => ({}));
      console.log("Received response:", data);

      const newMessages = extractNewAgentMessages(data, processedMessageIds);
      if (newMessages.length > 0) {
        setMessages((prev) => [...prev, ...newMessages]);
        setProcessedMessageIds((prev) => {
          const updated = new Set(prev);
          newMessages.forEach((m) => updated.add(m.id));
          return updated;
        });
      } else {
        throw new Error("No response from agent");
      }
    } catch (err) {
      console.error("Error sending message:", err);
      setError(err.message || "Failed to send message. Please try again.");

      // Add error message to chat
      const errorMessage = {
        id: `error-${Date.now()}`,
        text: "I'm having trouble responding right now. Please try again.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClose = async () => {
    setIsOpen(false);
    setIsMinimized(false);

    // Optionally end the chat session
    if (chatId) {
      try {
        await fetch(`${API_BASE_URL}/chat/end`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
          }),
        });
        console.log("Chat session ended");
      } catch (err) {
        console.error("Error ending chat session:", err);
      }
    }

    // Reset state
    setChatId(null);
    setMessages([]);
    setError(null);
    setProcessedMessageIds(new Set());
  };

  const getStatusColor = () => {
    if (error) return "bg-red-400";
    if (isInitializing) return "bg-yellow-400";
    if (chatId) return "bg-green-400";
    return "bg-gray-400";
  };

  const getStatusText = () => {
    if (error) return "Error";
    if (isInitializing) return "Connecting...";
    if (chatId) return "Online";
    return "Offline";
  };

  return (
    <>
      {/* Chat Widget Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
        {/* Need Help message with animation */}
        <div
          className={`transition-all duration-500 ease-out ${
            showNeedHelp
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-2 scale-95 pointer-events-none"
          }`}
        >
          <p className="gilroy-m text-sm md:text-[16px] text-black shadow border bg-white border-[#dbdbdb] px-3 py-1 pb-1 text-md rounded-t-xl rounded-bl-xl mb-2 mr-2 w-fit animate-bounce-once">
            Need Help ?
          </p>
        </div>

        <button
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
          }}
          className={`w-14 h-14 rounded-full bg-black text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${
            isOpen && !isMinimized ? "scale-0" : "scale-100"
          }`}
          aria-label="Open chat"
        >
          <div className="relative">
            <MessageCircle className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-pulse" />
          </div>
        </button>
      </div>

      {/* Chat Window */}
      <div
        className={`fixed bottom-0 right-0 md:bottom-6 md:right-6 w-full max-w-screen p-3 md:p-0 md:max-w-sm h-[80vh] md:h-[600px] bg-black rounded-3xl shadow-2xl border border-[#a5a5a5] flex flex-col transition-all duration-300 z-50 ${
          isOpen && !isMinimized
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        {/* Header - Updated to match design inspiration with profile picture */}
        <div className="bg-black text-white px-6 py-4 rounded-t-3xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Profile Picture */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center text-white font-semibold text-sm">
              AI
            </div>
            <div>
              <h3 className="text-base font-semibold">Inka (AI Assistant)</h3>
              <p className="text-xs flex items-center gap-1">
                <div
                  className={`w-2 h-2 rounded-full ${getStatusColor()}`}
                ></div>
                <span className="opacity-75">{getStatusText()}</span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMinimized(true)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Minimize chat"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Messages Container - Updated message bubble colors to match design */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-white rounded-t-2xl">
          {/* Connection Error Banner */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm flex items-start gap-2">
              <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold">Connection Error</p>
                <p className="text-xs mt-1">{error}</p>
              </div>
            </div>
          )}

          {/* Initializing State */}
          {isInitializing && messages.length === 0 && (
            <div className="flex justify-center items-center py-8">
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-black mb-2"></div>
                <p className="text-sm text-gray-500">
                  Connecting to AI assistant...
                </p>
              </div>
            </div>
          )}

          {/* Messages */}
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs px-4 py-3 rounded-lg ${
                  message.sender === "user"
                    ? "bg-orange-100 text-orange-900 rounded-br-none"
                    : "bg-gray-100 text-gray-900 rounded-bl-none"
                }`}
              >
                <p className="text-sm leading-relaxed whitespace-pre-wrap">
                  {formatMessageText(message.text)}
                </p>
                <span className="text-xs opacity-60 mt-1 block">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </div>
          ))}

          {/* Loading Indicator */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-900 px-4 py-3 rounded-lg rounded-bl-none">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.1s]" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area - Updated styling for cleaner look */}
        <div className="border-t border-gray-200 p-4 bg-white rounded-b-2xl">
          <div className="flex gap-3">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={chatId ? "Type your message..." : "Connecting..."}
              className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading || !chatId || isInitializing}
            />
            <button
              onClick={handleSendMessage}
              disabled={
                isLoading || !inputValue.trim() || !chatId || isInitializing
              }
              className="bg-black text-white p-2 rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              aria-label="Send message"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>

          {/* Helper text */}
          {!chatId && !isInitializing && (
            <p className="text-xs text-gray-500 mt-2 text-center">
              Waiting for connection...
            </p>
          )}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && !isMinimized && (
        <div className="fixed inset-0 bg-black/20 z-40" onClick={handleClose} />
      )}

      {/* Add custom animation styles */}
      <style>{`
        @keyframes bounce-once {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-once {
          animation: bounce-once 0.6s ease-out;
        }
      `}</style>
    </>
  );
}
