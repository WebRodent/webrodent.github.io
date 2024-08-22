// src/app/page.tsx
"use client"
import useMobileDetect from '../lib/mobileDetect';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  const isMobile = useMobileDetect();

  return (
    <div style={isMobile ? { background: 'linear-gradient(90deg, #1a1a30, #010124)'} : { background: 'linear-gradient(45deg, #626263, #010124)' }}>
      <Header />
      <HeroSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}
