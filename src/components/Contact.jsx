import React, { useState } from "react";
import {
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
  X,
} from "lucide-react";
import Icon from "../assets/images/logo-icon.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    // phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      className=" mt-15 md:mt-20 lg:mt-30 px-4.5 md:px-10 xl:px-15 flex justify-center items-center"
      id="contact"
    >
      <div className="container">
        <h1 className="text-center lg:text-start text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] gilroy-sb leading-snug text-orange-500">
          CONTACT US
        </h1>
        <div className=" mx-auto">
          {/* <h1 className="text-center lg:text-start text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] gilroy-sb leading-snug text-orange-500">
          CONTACT US
        </h1> */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-[30px] md:text-[40px] lg:text-[40px] xl:text-[52px] lg:text-6xl font-bold leading-tight mb-2 gilroy-b">
                  Still not sure?{" "}
                  <span className="inline-flex items-center">
                    <img src={Icon} alt="" className="w-12 md:w-17" />
                  </span>
                </h2>
                <h2 className="text-[30px] md:text-[40px] lg:text-[40px] xl:text-[52px] lg:text-6xl font-bold leading-tight gilroy-b">
                  Let us help you out.
                </h2>
                <p className="mt-4 text-gray-900 text-base md:text-lg leading-relaxed max-w-xl gilroy-m">
                  Still have questions or doubts? No worries, that’s exactly
                  what we’re here for. Our team would love to walk you through
                  our services, clear up any confusion, and help you find the
                  perfect plan that fits your needs.
                </p>
              </div>

              <div className="space-y-4 relative">
                <div>
                  <p className="text-orange-400 gilroy-sb">Give us a call:</p>
                  <a
                    href="tel:1234567890"
                    className="text-black text-lg hover:text-orange-400 transition-colors gilroy-m"
                  >
                    +1 (878) 656 9730
                  </a>
                </div>

                <div>
                  <p className="text-orange-400  gilroy-sb">
                    Send us an email:
                  </p>
                  <a
                    href="mailto:info@mthemeus.com"
                    className="text-black text-lg hover:text-orange-400 transition-colors gilroy-m"
                  >
                    admin@inkcrediblestudios.com
                  </a>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-4 ">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-black/80 flex items-center justify-center hover:bg-orange-400 hover:border-orange-400 hover:text-black transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-black/80 flex items-center justify-center hover:bg-orange-400 hover:border-orange-400 hover:text-black transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-black/80 flex items-center justify-center hover:bg-orange-400 hover:border-orange-400 hover:text-black transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-black/80 flex items-center justify-center hover:bg-orange-400 hover:border-orange-400 hover:text-black transition-all"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <h3 className="text-xl md:text-[27px] font-semibold mb-4 gilroy-sb">
                Send us a message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="gilroy-m w-full bg-transparent border border-black/80 rounded-full px-6 py-3.5 text-black placeholder:text-gray-500 focus:outline-none focus:border-orange-400 transition-colors"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleChange}
                    className="gilroy-m w-full bg-transparent border border-black/80 rounded-full px-6 py-3.5 text-black placeholder:text-gray-500 focus:outline-none focus:border-orange-400 transition-colors"
                    required
                  />
                </div>

                {/* <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+088-234-8849"
                  value={formData.phone}
                  onChange={handleChange}
                  className="gilroy-m w-full bg-transparent border border-black/80 rounded-full px-6 py-3.5 text-black placeholder:text-gray-500 focus:outline-none focus:border-orange-400 transition-colors"
                />
              </div> */}

                <div>
                  <textarea
                    name="message"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={7}
                    className="gilroy-m w-full bg-transparent border border-black/80 rounded-3xl px-6 py-4 text-black placeholder:text-gray-500 focus:outline-none focus:border-orange-400 transition-colors resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="relative gilroy-sb text-lg pl-10 w-full bg-[#FF8419] text-white font-semibold rounded-full px-8 py-4 flex items-center gap-2 transition duration-300 hover:shadow-[0_0px_18px_#FF8419]/50 group"
                >
                  <span className="group-hover:-translate-x-1 transition-transform ">
                    Send message
                  </span>

                  <span className="absolute right-3 w-11 h-11 bg-black rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
