import React, { useState, useEffect } from "react";
// Import react scroll
import { Link as LinkScroll } from "react-scroll";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollActive, setScrollActive] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);

      const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
      setIsAtBottom(bottom);
      
      if (bottom) {
        setActiveLink("contact");
      }
    });
  }, []);

  // Done due to limitations in the library, or something like that. Viewport offsets can apparently destroy worlds. 1500 seconds seems to be the sweet spot.
  const handleActiveClick = (itemName) => {
    setActiveLink(itemName);
    setTimeout(() => {
      setActiveLink(itemName);
    }, 1500);
  };

  // Update the navigation items for both desktop and mobile
  const navigationItems = [
    { id: "home", name: "Hjem", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
    { id: "products", name: "Produkter", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
    { id: "omtale", name: "Omtale", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" },
    { id: "about", name: "Om Oss", icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" },
    { id: "contact", name: "Kontakt", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }
  ];

  return (
    <>
      <header
        className={
          "fixed top-0 w-full z-30 transition-all header-bg" +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            {/* Replace text with logo */}
            <img
              src="assets/Rodent_Web_logo.png"
              alt="Webrodent Logo"
              className="h-6 md:h-8 lg:h-10 xl:h-12"
            />
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold ps-4">WEBRODENT</h1>     
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-white items-center">
            {navigationItems.map((item) => (
              <LinkScroll
                key={item.id}
                activeClass="active"
                to={item.id}
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                onSetActive={() => setActiveLink(item.id)}
                onClick={() => handleActiveClick(item.id)}
                className={`px-4 py-2 mx-2 cursor-pointer relative group`}
              >
                <span className={`relative z-10 ${
                  activeLink === item.id 
                    ? "text-[#E439F4]" 
                    : "text-white hover:text-[#E439F4]"
                } transition-colors duration-300`}>
                  {item.name}
                </span>
                {activeLink === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E439F4] transform origin-left transition-transform duration-300"></span>
                )}
              </LinkScroll>
            ))}
          </ul>
        </nav>
      </header>
      {/* Mobile Navigation */}
      <nav className="mobile-nav lg:hidden">
        <div className="h-full px-4 py-2">
          <ul className="flex w-full h-full justify-between items-center text-white">
            {navigationItems.map((item) => (
              <LinkScroll
                key={item.id}
                activeClass="active"
                to={item.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                onSetActive={() => setActiveLink(item.id)}
                className={`mobile-nav-item flex flex-col items-center justify-center text-xs transition-all ${
                  activeLink === item.id
                    ? "text-[#E439F4]"
                    : "text-white hover:text-[#E439F4]"
                }`}
              >
                <svg
                  className="w-6 h-6 mb-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={item.icon}
                  />
                </svg>
                <span className="text-xs">{item.name}</span>
              </LinkScroll>
            ))}
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
