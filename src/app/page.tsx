// src/app/page.tsx
"use client";
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  return (
    <div style={{ background: 'linear-gradient(45deg, #626263, #010124)' }}>
      <Header />
      <HeroSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}
