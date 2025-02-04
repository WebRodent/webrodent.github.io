import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const footerLinks = [
    { name: "Hjem", to: "home" },
    { name: "Produkter", to: "products" },
    { name: "Omtale", to: "omtale" },
    { name: "Om Oss", to: "about" },
    { name: "Kontakt", to: "contact" }
  ];

  const contactInfo = {
    email: "post@webrodent.com",
    github: "https://github.com/WebRodent"
  };

  return (
    <footer className="footer-bg mt-auto py-12 lg:py-16 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="assets/Rodent_Web_logo.png"
                alt="Webrodent Logo"
                className="h-8 w-auto"
              />
              <h3 className="text-xl font-bold text-white">WEBRODENT</h3>
            </div>
            <p className="text-white/70 text-sm">
              Din digitale partner for moderne løsninger og innovativ utvikling.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigasjon</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <ScrollLink
                    to={link.to}
                    smooth
                    duration={500}
                    className="text-white/70 hover:text-[#E439F4] transition-colors duration-300 cursor-pointer text-sm"
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-white/70 hover:text-[#E439F4] transition-colors duration-300 text-sm flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#E439F4] transition-colors duration-300 text-sm flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter/Additional Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Om Oss</h4>
            <p className="text-white/70 text-sm">
              Vi er skjulte eksperter som leverer kvalitet i kulissene. Med et erfarent utviklingsmiljø leverer vi sømløse digitale løsninger.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Webrodent. Alle rettigheter reservert.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/50 hover:text-[#E439F4] text-sm transition-colors duration-300">
                Personvern
              </a>
              <a href="#" className="text-white/50 hover:text-[#E439F4] text-sm transition-colors duration-300">
                Vilkår
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
