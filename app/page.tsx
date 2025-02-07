import React from 'react'
import RatMascot from '../components/RatMascot'
import HeroSection from '../components/sections/HeroSection'
import ProductsSection from '../components/sections/ProductsSection'
import CustomersSection from '../components/sections/CustomersSection'
import AboutSection from '../components/sections/AboutSection'
import ContactSection from '../components/sections/ContactSection'

export default function Home() {
  return (
    <main className="bg-navy-900">
      <HeroSection />
      <ProductsSection />
      <CustomersSection />
      <AboutSection />
      <ContactSection />
      <RatMascot />
    </main>
  )
}