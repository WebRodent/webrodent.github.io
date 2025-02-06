import React, { useState, useEffect, useCallback } from "react";
import { animateScroll, scroller } from "react-scroll";

const Header = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolling, setIsScrolling] = useState(false);

  const navigationItems = [
    { id: "hero", name: "Hjem" },
    { id: "products", name: "Produkter" },
    { id: "kunder", name: "Kunder" },
    { id: "about", name: "Om Oss" },
    { id: "contact", name: "Kontakt" }
  ];

  // Improved section detection
  const detectSection = useCallback(() => {
    if (isScrolling) return;

    const viewportMid = window.scrollY + window.innerHeight / 2;
    let currentSection = navigationItems[0].id;
    let minDistance = Infinity;

    navigationItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        const sectionMid = window.scrollY + rect.top + rect.height / 2;
        const distance = Math.abs(viewportMid - sectionMid);

        if (distance < minDistance) {
          minDistance = distance;
          currentSection = id;
        }
      }
    });

    setActiveSection(currentSection);
  }, [isScrolling]);

  // Scroll handler with debounce
  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(detectSection, 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    detectSection(); // Initial detection

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [detectSection]);

  // Smooth scroll handler
  const scrollToSection = (sectionId) => {
    setIsScrolling(true);
    setActiveSection(sectionId); // Immediate feedback

    const element = document.getElementById(sectionId);
    if (!element) return;

    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

    // Reset scrolling state after animation
    setTimeout(() => setIsScrolling(false), 1000);
  };

  return (
    <header className="fixed top-0 w-full transition-all header-bg z-[1000]">
      <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
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
        
        <ul className="hidden lg:flex col-start-4 col-end-8 text-white items-center justify-end gap-8">
          {navigationItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 cursor-pointer nav-item ${
                  activeSection === item.id ? "active" : ""
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
