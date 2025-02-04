import { Link as ScrollLink } from "react-scroll";

const mobileNavItems = [
  { icon: Home, label: 'Hjem', target: 'hero' },
  { icon: Package, label: 'Produkter', target: 'products' },
  { icon: MessageCircle, label: 'Omtale', target: 'omtale' },
  { icon: Users, label: 'Om Oss', target: 'about' },
  { icon: Mail, label: 'Kontakt', target: 'contact' }
];

const MobileNav = ({ activeLink, setActiveLink }) => {
  const handleSetActive = (target) => {
    setActiveLink(target);
  };

  return (
    <nav className="mobile-nav lg:hidden">
      <div className="max-w-screen-xl mx-auto">
        <ul className="flex justify-between items-center">
          {mobileNavItems.map((item) => (
            <ScrollLink
              key={item.target}
              to={item.target}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`mobile-nav-item ${activeLink === item.target ? 'active' : ''}`}
              onSetActive={() => handleSetActive(item.target)}
            >
              <item.icon />
              <span>{item.label}</span>
            </ScrollLink>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav; 