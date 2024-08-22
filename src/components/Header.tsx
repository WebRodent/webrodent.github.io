import { useState, useEffect } from 'react';
import useMobileDetect from '../lib/mobileDetect';

export default function Header() {
    const isMobile = useMobileDetect();

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      event.preventDefault(); // Prevent default anchor behavior
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = isMobile ? 0 : 70; // Adjust this value to match your header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = isMobile ? 0 : elementPosition + window.pageYOffset - headerOffset;
    
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    let isScrolling = false;

    const handleTouch = (event: TouchEvent, id: string) => {
      event.preventDefault(); // Prevent default touch behavior, if necessary

      // Ensure scrolling only happens once
      if (!isScrolling) {
        isScrolling = true;
        
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            const headerOffset = 0; // Adjust this value to match your header height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }

          // Reset scrolling flag after the scroll action
          isScrolling = false;
        }, 100); // Adjust timeout if necessary
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
  
    const backgroundColor = `rgba(1, 1, 36, ${Math.min(scrollY / 300, 1)})`;
    const textColor = /*scrollY > 50 ? 'text-gray-900' :*/ 'text-white';
  
    return (
      <header
        className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ease-in-out ${textColor}`}
        style={{ backgroundColor }}
      >
        <div className="container mx-auto flex justify-between items-center py-4">

          <div className="flex-1">
            <h1 className={isMobile ? "text-xl md:text-2xl lg:text-6xl xl:text-8xl font-bold ps-4" : "text-4xl font-bold"}>WEBRODENT</h1>
          </div>

          <nav className="flex-1 text-right">
            <ul className={isMobile ? "inline-flex space-x-2" : "inline-flex space-x-20"}>
              <li>
                <a 
                  href="#"
                  className={isMobile ? "text-sm md:text-xl lg:text-2xl xl:text-2xl hover:text-gray-400"  : "text-3xl hover:text-gray-400"}
                  onClick={(event) => handleClick(event, "home-section")}
                  onTouchStart={(event) => handleTouch(event as unknown as TouchEvent, "home-section")}
                >
                  HJEM
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  className={isMobile ? "text-sm md:text-xl lg:text-2xl xl:text-2xl hover:text-gray-400"  : "text-3xl hover:text-gray-400"}
                  onClick={(event) => handleClick(event, "services-section")}
                  onTouchStart={(event) => handleTouch(event as unknown as TouchEvent, "services-section")}
                >
                  TJENESTER
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  className={isMobile ? "text-sm md:text-xl lg:text-2xl xl:text-2xl hover:text-gray-400 pe-4"  : "text-3xl hover:text-gray-400"}
                  onClick={(event) => handleClick(event, "contact-section")}
                  onTouchStart={(event) => handleTouch(event as unknown as TouchEvent, "contact-section")}
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
