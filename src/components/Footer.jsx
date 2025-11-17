import { Instagram, Facebook, Linkedin } from "lucide-react";
import Icon from "../assets/images/logo-icon.png";
export default function Footer() {
  return (
    <footer
      className="bg-black text-white px-10 mx-1 mb-1 rounded-xl mt-30 "
      id="footer"
    >
      <div className="container mx-auto px-4 py-8 lg:py-12">
        {/* Main footer content */}
        <div className="relative flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Left content */}
          <div className="flex-1 space-y-4">
            <h2 className="text-xl lg:text-3xl gilroy-b leading-tight">
              Turning ideas into impact—Inkcredible,
              <br />
              your partner in promotional product
              <br />
              success!
            </h2>

            <div className="space-y-2 text-sm lg:text-base text-gray-300 gilroy-m">
              <p>
                26XP+2V3, Rajan St, Rama Kamath Puram, T. Nagar,
                <br />
                Chennai, Tamil Nadu 600017, India.
              </p>
              <p>hello@inkcrediblestudios.com</p>
              {/* <p>+1 (878) 656 9730</p> */}
            </div>
          </div>

          {/* Right content - Logo and Social Icons */}
          <div className="flex flex-col lg:flex-col items-start md:items-end gap-6">
            {/* Logo */}
            <div className="order-2 md:order-1">
              <img src={Icon} className="w-[120px] lg:w-[150px]" alt="" />
            </div>

            {/* Social Icons */}
            <div className="order-1 md:order-2 flex gap-3 md:absolute bottom-0">
              <a
                href="https://www.instagram.com/inkcredible_studios?igsh=NHBwcmRtZmlyZmhm"
                target="_blank"
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-orange-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              {/* <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-orange-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a> */}
              <a
                href="https://www.linkedin.com/company/inkcredible-studios/"
                target="_blank"
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-orange-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/inkcredibles?t=p7p-4QKIrF93ngqt7L7gqg&s=08 "
                target="_blank"
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-orange-500 transition-colors"
              >
                {/* X/Twitter icon */}
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>
            Copyright © 2025{" "}
            <span className="text-white gilroy-m">INKCREDIBLE</span>. All rights
            reserved.
          </p>
          <p>
            Designed & Developed By{" "}
            <a
              href="https://nexglimpse.com"
              target="_blank"
              className="text-white gilroy-m"
            >
              Nexglimpse
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
