import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

const TermsAndConditionsModal = ({
  isOpen,
  onClose,
  onProceed,
  subscriptionLink,
}) => {
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setHasScrolledToBottom(false);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleScroll = (e) => {
    const element = e.target;
    const isAtBottom =
      Math.abs(
        element.scrollHeight - element.scrollTop - element.clientHeight
      ) < 5;

    if (isAtBottom && !hasScrolledToBottom) {
      setHasScrolledToBottom(true);
    }
  };

  const handleProceed = () => {
    if (subscriptionLink) {
      window.location.href = subscriptionLink;
    }
    onProceed?.();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 max-h-[85vh] flex flex-col animate-in fade-in zoom-in duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 gilroy-b">
            Terms and Conditions
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto p-6 space-y-4 gilroy-m text-gray-700"
        >
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 gilroy-sb">
              1. No Pause or Suspension
            </h3>
            <p>
              Once a subscription is activated, it cannot be paused, stopped, or
              put on hold during the subscribed period. Services will remain
              active for the full duration of the plan.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 gilroy-sb">
              2. No Plan Switching Mid-Cycle
            </h3>
            <p>
              Customers cannot switch, downgrade, or upgrade between
              subscription plans during an active billing period. Any plan
              changes can be made only after the current cycle ends.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 gilroy-sb">
              3. No Refund Policy
            </h3>
            <p>
              Once payment is made and the subscription is activated, refunds
              will not be issued under any circumstances, whether partial or
              full.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 gilroy-sb">
              4. Non-Transferable Subscription
            </h3>
            <p>
              Subscriptions are non-transferable and can only be used by the
              registered customer or company account.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 gilroy-sb">
              5. Job Usage Policy
            </h3>
            <p>
              Each plan includes a defined number of jobs per cycle. Unused jobs
              will not roll over to the next billing period.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 gilroy-sb">
              6. File Delivery and Quality
            </h3>
            <p>
              Inkcredible Studios ensures all artwork files are delivered
              according to the plan specifications. Revision requests are
              limited or unlimited based on the chosen plan.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 gilroy-sb">
              7. Artwork Complexity & Delivery Time
            </h3>
            <p>
              Simple to medium-complexity artwork (requiring up to 3 hours of
              work) will be delivered within 24 hours. For complex files
              requiring more time, we will inform you in advance with the
              adjusted delivery timeline to ensure transparency and consistent
              quality.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 gilroy-sb">
              8. Revision Policy
            </h3>
            <p>
              Unlimited revisions are included under the subscription. However,
              if a revision request requires the artwork to be recreated
              entirely from scratch, it will be considered a new job rather than
              a revision.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 gilroy-sb">
              9. Payment & Activation
            </h3>
            <p>
              This subscription follows a prepaid billing model. The
              subscription activates once payment is made, and the allocated job
              count for the cycle becomes available from the start date.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 gilroy-sb">
              10. Service Availability
            </h3>
            <p>
              Inkcredible Studios operates on a 24/5 schedule. Delivery times
              may vary for complex artwork requests, and clients will be
              informed if additional time is required.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 gilroy-sb">
              11. Intellectual Property
            </h3>
            <p>
              All final artwork files delivered under a subscription become the
              property of the client once full payment for the plan is received.
            </p>
          </section>
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 gilroy-sb">
              12. Amendments
            </h3>
            <p>
              Inkcredible Studios reserves the right to update or modify these
              terms and conditions, and any changes will be communicated in
              advance.
            </p>
          </section>

          {/* Scroll indicator */}
          {!hasScrolledToBottom && (
            <div className="sticky -bottom-6 left-0 right-0 py-3 text-center bg-gradient-to-t from-white via-white to-transparent">
              <p className="text-sm text-orange-500 gilroy-sb animate-pulse">
                ↓ Please scroll to the bottom to continue ↓
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex gap-3 p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={onClose}
            className="flex-1 px-6 py-3 border border-gray-300 rounded-full font-medium text-gray-700 hover:bg-gray-100 transition-all duration-300 gilroy-sb"
          >
            Close
          </button>
          <button
            onClick={handleProceed}
            disabled={!hasScrolledToBottom}
            className={`flex-1 px-6 py-3 rounded-full font-medium transition-all duration-300 gilroy-sb ${
              hasScrolledToBottom
                ? "bg-orange-500 text-white hover:shadow-lg hover:shadow-orange-500/50 cursor-pointer"
                : "bg-gray-300 text-gray-500 cursor-not-allowed opacity-60"
            }`}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsModal;
