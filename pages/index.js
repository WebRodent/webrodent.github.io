import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../components/Layout/ScrollAnimationWrapper";
import React, { useMemo } from "react";

export default function Home() {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [scrolling, setScrolling] = useState(false);
  const text = "Ta din plass i det digitale domenet idag!";
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1)); // Proper slicing, no "undefined"
      i++;

      if (i >= text.length) clearInterval(interval);
    }, 150);

    // Cursor blinking effect
    const cursorBlink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(cursorBlink);
    };
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 w-full p-4 transition-all z-50 ${scrolling ? "bg-white shadow-md" : "bg-transparent text-white"}`}>
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-sm lg:text-3xl font-bold">WEBRODENT</div>
          <ul className="flex space-x-4 sm:space-x-6">
            <li><ScrollLink to="hjem" smooth duration={500} className="cursor-pointer text-sm lg:text-xl">Hjem</ScrollLink></li>
            <li><ScrollLink to="tjenester" smooth duration={500} className="cursor-pointer text-sm lg:text-xl">Tjenester</ScrollLink></li>
            <li><ScrollLink to="kontakt" smooth duration={500} className="cursor-pointer text-sm lg:text-xl">Kontakt</ScrollLink></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <ScrollAnimationWrapper>
        <section
          id="hjem"
          className="h-screen flex flex-col items-center justify-center text-white text-center px-4 sm:px-8"
          style={{ background: 'url("/assets/hero3.gif") no-repeat center center/cover' }}
        >
          <motion.div className="flex flex-col justify-center flex-grow" variants={scrollAnimation}>
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold rounded-sm px-4 py-2 text-white" style={{ background: 'rgba(255, 100, 0, 0.7)' }}>
              Din digitale leverandør
            </h1>
            <div className="coding mt-6 inverse-toggle px-5 pt-4 shadow-lg text-gray-100 text-sm sm:text-base font-mono subpixel-antialiased 
                bg-gray-800 pb-6 pt-4 rounded-lg leading-normal overflow-hidden">
              <div className="top mb-2 flex">
                  <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                  <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
                  <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="mt-4 flex">
                  <span className="text-green-400 text-lg sm:text-xl">computer:~$
                  <motion.span className="text-white text-lg sm:text-xl"> {displayedText}</motion.span>
                    <motion.span className="text-white text-lg sm:text-xl"
                      animate={{ opacity: showCursor ? 1 : 0 }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    >
                      _
                    </motion.span>
                      <br />
                  </span>
              </div>
            </div>
          </motion.div>

          {/* "Les mer" link */}
          <ScrollLink
            to="tjenester"
            smooth
            duration={500}
            className="mt-auto mb-8 inline-flex items-center bg-[#0a1b33] white px-6 py-3 rounded-lg text-lg sm:text-xl font-semibold hover:bg-gray-800 hover:text-black transition cursor-pointer"
          >
            Les mer <ArrowDown className="ml-2" />
          </ScrollLink>
        </section>
      </ScrollAnimationWrapper>

      {/* Tjenester Section */}
      <ScrollAnimationWrapper>
        <section
          id="tjenester"
          className="relative p-8 sm:p-16 text-white bg-gradient-to-b from-[#0b0200] to-[#0b172d] tjenester-bg"
        >
          <h2 className="mt-10 text-3xl sm:text-4xl font-bold text-center">Våre Tjenester</h2>
          <p className="text-center mt-2 text-base sm:text-lg">Vi tilbyr skreddersydde løsninger for din bedrift.</p>

          <motion.div className="z-1 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" variants={scrollAnimation}>
            {/* Feature Cards */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:scale-105 border border-gray-600">
              <div className="text-center mb-4">
                <img src="/assets/web-development.svg" alt="Web Development" className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-center">Webutvikling</h3>
              <p className="text-center mt-4 text-gray-300 text-sm sm:text-base">Vi utvikler moderne, responsive og brukervennlige nettsteder som er skreddersydd for å møte dine spesifikke behov. Enten du trenger en enkel nettside, en nettbutikk, eller en mer kompleks webapplikasjon, har vi ekspertisen som trengs for å levere høy kvalitet. Våre løsninger er både brukervennlige og optimalisert for alle enheter, slik at du kan nå ut til et bredt publikum på tvers av plattformer.</p>
            </div>

            <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:scale-105 border border-gray-600">
              <div className="text-center mb-4">
                <img src="/assets/consult.svg" alt="SEO" className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-center">Konsulent-tjenester</h3>
              <p className="text-center mt-4 text-gray-300 text-sm sm:text-base">Som erfarne utviklere og teknologer, tilbyr vi skreddersydde konsulenttjenester som er designet for å gi din bedrift et konkurransefortrinn. Vi bistår med rådgivning på alt fra teknisk arkitektur og systemintegrasjoner, til prosjektledelse og utvikling av programvareløsninger. Vårt mål er å hjelpe deg med å ta de riktige beslutningene for å oppnå vekst og effektivitet i din virksomhet.</p>
            </div>

            <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:scale-105 border border-gray-600">
              <div className="text-center mb-4">
                <img src="/assets/aro-logo.png" alt="ARO" className="w-48 h-16 mx-auto" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-center">ARO</h3>
              <p className="text-center mt-4 text-gray-300 text-sm sm:text-base">ARO er vår automatiserte løsning for innrapportering av Aksjonærregisteroppgaven, og den er allerede i bruk hos flere regnskapskontorer. Med ARO forenkles og automatiseres prosessen med innrapportering fra kunder, noe som sparer både tid og ressurser. Løsningen er designet for å være enkel å bruke og for å sikre at dataene er nøyaktige og i samsvar med gjeldende regelverk. ARO gjør det mulig for regnskapskontorer å levere Aksjonærregisteroppgaven effektivt.</p>
            </div>
          </motion.div>

          {/* Customer Logos */}
          <motion.div className="mt-16 flex justify-center" variants={scrollAnimation}>
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 flex flex-col items-center w-full max-w-5xl">
              <h3 className="text-lg lg:text-4xl font-semibold text-white mb-6">Noen av våre kunder</h3>
              <div className="flex flex-wrap justify-center gap-8">
                <img src="/assets/aicono_negativ.png" alt="Kunde 1" className="h-8 w-auto lg:h-16 lg:w-auto" />
                <img src="/assets/oneaccounting-logo.png" alt="Kunde 2" className="h-12 w-auto lg:h-20 lg:w-auto" />
                <img src="/assets/pgv.png" alt="Kunde 3" className="h-16 sm:h-20 w-auto" />
              </div>
            </div>
          </motion.div>

        </section>
      </ScrollAnimationWrapper>

      {/* Kontakt Section */}
      <section id="kontakt" className="min-h-1/2 p-8 sm:p-16 bg-gray-900 text-white flex flex-col items-center justify-center bg-gradient-to-b from-[#0b172d] to-[#0b0200]">
        <img src="/assets/wr_logo_black.png" alt="Company Logo" className="w-48 h-32 mb-6" />
        <h2 className="text-3xl sm:text-4xl font-bold text-center">Kontakt Oss</h2>
        <a href="mailto:post@webrodent.com" className="text-white hover:text-gray-400 transition text-lg sm:text-xl font-semibold">
          post@webrodent.com
        </a>

        <div className="mt-6 flex space-x-6">
          <a href="https://github.com/WebRodent" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition">
            <img src="/assets/icons8-github.svg" alt="GitHub" className="w-12 sm:w-16 h-12 sm:h-16" />
          </a>
        </div>
      </section>
    </div>
  );
}
