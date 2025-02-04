import React, { useState, useEffect } from "react";
// Import react scroll
import { Link as LinkScroll } from "react-scroll";

const Header = () => {
  const [activeLink, setActiveLink] = useState("hero");
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 20);
      
      // Get all sections and their positions
      const sections = ["hero", "products", "omtale", "about", "contact"];
      const scrollPosition = window.scrollY + (window.innerHeight / 3);

      // Find current section with more precise calculations
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const top = window.scrollY + rect.top;
          const height = rect.height;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            if (activeLink !== section) {
              setActiveLink(section);
              // Force active state update
              document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${section}`) {
                  item.classList.add('active');
                }
              });
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeLink]);

  // Update the navigation items for both desktop and mobile
  const navigationItems = [
    { id: "hero", name: "Hjem", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
    { id: "products", name: "Produkter", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
    { id: "omtale", name: "Omtale", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" },
    { id: "about", name: "Om Oss", icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" },
    { id: "contact", name: "Kontakt", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }
  ];

  const navigation = [
    { name: 'Hjem', href: 'hero' },  // Change from 'home' to 'hero'
    { name: 'Produkter', href: 'products' },
    { name: 'Omtale', href: 'omtale' },
    { name: 'Om Oss', href: 'about' },
    { name: 'Kontakt', href: 'contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-30 transition-all header-bg${
      scrollActive ? " shadow-md pt-0" : " pt-4"
    }`}>
      <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
        {/* Logo section */}
        <div className="col-start-1 col-end-2 flex items-center">
          <img
            src="assets/Rodent_Web_logo.png"
            alt="Webrodent Logo"
            className="h-6 md:h-8 lg:h-10 xl:h-12"
          />
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold ps-4">
            WEBRODENT
          </h1>     
        </div>
        
        {/* Navigation items */}
        <ul className="hidden lg:flex col-start-4 col-end-8 text-white items-center">
          {navigationItems.map((item) => (
            <LinkScroll
              key={item.id}
              activeClass="active"
              to={item.id}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className={`nav-item${activeLink === item.id ? " active" : ""}`}
              onSetActive={() => setActiveLink(item.id)}
            >
              {item.name}
            </LinkScroll>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
