"use client";
import { useState, useEffect } from 'react';

export default function Header() {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      event.preventDefault(); // Prevent default anchor behavior
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 70; // Adjust this value to match your header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const backgroundColor = `rgba(255, 255, 255, ${Math.min(scrollY / 300, 1)})`;
    const textColor = scrollY > 50 ? 'text-gray-900' : 'text-white';
  
    return (
      <header
        className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ease-in-out ${textColor}`}
        style={{ backgroundColor }}
      >
        <div className="container mx-auto flex justify-between items-center py-4">

          <div className="flex-1">
            <h1 className="text-4xl font-bold">WEBRODENT</h1>
          </div>

          <nav className="flex-1 text-right">
            <ul className="inline-flex space-x-20">
              <li>
                <a 
                  href="#"
                  className="text-3xl hover:text-gray-400"
                  onClick={(event) => handleClick(event, "home-section")}
                >
                  HJEM
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  className="text-3xl hover:text-gray-400"
                  onClick={(event) => handleClick(event, "services-section")}
                >
                  TJENESTER
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  className="text-3xl hover:text-gray-400"
                  onClick={(event) => handleClick(event, "contact-section")}
                >
                  KONTAKT
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
}
