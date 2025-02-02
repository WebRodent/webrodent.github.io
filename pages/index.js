import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { ArrowDown } from "lucide-react";

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full p-4 bg-transparent text-white z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-white">WEBRODENT</div>
          <ul className="flex space-x-6 text-white">
            <li><ScrollLink to="hjem" smooth duration={500} className="cursor-pointer">Hjem</ScrollLink></li>
            <li><ScrollLink to="tjenester" smooth duration={500} className="cursor-pointer hover:text-[#E439F4]">Vi jobber med</ScrollLink></li>
            <li><ScrollLink to="priser" smooth duration={500} className="cursor-pointer">Referanser</ScrollLink></li>
            <li><ScrollLink to="fag" smooth duration={500} className="cursor-pointer">Fagområder</ScrollLink></li>
            <li><ScrollLink to="kontakt" smooth duration={500} className="cursor-pointer">Kontakt</ScrollLink></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hjem" className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#030817] to-[#65334D] text-white text-center px-4 relative">
        <div className="absolute top-1/3 w-full">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Din Digitale Fremtid</h1>
          <p className="mt-4 text-lg md:text-xl text-[#E439F4]">Vi leverer moderne løsninger for din bedrift.</p>
        </div>
        <ScrollLink to="tjenester" smooth duration={500} className="absolute bottom-10 inline-flex items-center bg-white text-[#010409] px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#E439F4] transition cursor-pointer">
          Les mer <ArrowDown className="ml-2" />
        </ScrollLink>
      </section>

      {/* Sections */}
      <section id="tjenester" className="min-h-screen p-16 bg-gradient-to-b from-[#65334D] to-[#65334D] text-white">
        <h2 className="text-3xl font-bold text-center text-white">Vår leveranse</h2>
        <p className="text-center mt-2 text-white">Webrodent – Skjulte eksperter som leverer kvalitet i kulissene</p>
        
        <div className="mt-12 space-y-12">
          {/* Box 1 */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
            <div className="p-6 rounded-lg w-full md:w-1/2 flex justify-center">
              <img src="/assets/aro-logo.png" alt="Service 1" className="rounded-lg w-full md:w-1/2" />
            </div>
            <div className="p-6 rounded-lg w-full md:w-1/2 bg-[#4f243b] hover:border-2 hover:border-[#E439F4]">
              <h3 className="text-xl font-bold">Webutvikling</h3>
              <p className="mt-2">Webrodent er et erfarent utviklingsmiljø med veteraner som gnager seg gjennom komplekse utfordringer for å levere sømløse digitale løsninger. Vi tilbyr en bred tjenesteportefølje, inkludert rådgivning, prosjektledelse, utvikling, design, brukeropplevelse, dataanalyse, sikkerhet og testing. Hver kunde og leveranse får et skreddersydd tverrfaglig team, satt sammen for å skape løsninger som virkelig gir verdi.</p>
            </div>
          </div>
          
          {/* Box 2 */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 md:flex-row-reverse">
            <img src="/assets/Illustration1.png" alt="Service 2" className="rounded-lg w-full md:w-1/2" />
            <div className="border-2 border-white p-6 rounded-lg w-full md:w-1/2">
              <h3 className="text-xl font-bold">DevOps</h3>
              <p className="mt-2">Vår styrke ligger i vår evne til å tilpasse oss kundens behov, kombinere ekspertise på tvers av fagområder og levere løsninger som ikke bare fungerer – men som gjør en forskjell. Med en ærlig tilnærming, nysgjerrighet og tett samarbeid med kundene våre, utforsker vi nye teknologier og muligheter for å sikre optimale resultater.</p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
            <img src="/assets/Illustration1.png" alt="Service 3" className="rounded-lg w-full md:w-1/2" />
            <div className="border-2 border-white p-6 rounded-lg w-full md:w-1/2">
              <h3 className="text-xl font-bold">Cloud Hosting</h3>
              <p className="mt-2">Vi koder i bakgrunnen, slik at produktet fremstår som en naturlig forlengelse av kundens egen visjon. Webrodent er den usynlige kraften bak kulissene – vi sørger for operativ drift, skreddersydd funksjonalitet og kompromissløs kvalitet, slik at du kan skinne utad.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="priser" className="min-h-screen p-16 bg-[#65334D] text-white">
        <h2 className="text-3xl font-bold text-center text-[#07EDF8]">Priser</h2>
        <p className="text-center mt-2 text-[#E439F4]">Fleksible priser for alle behov.</p>
      </section>

      <section id="fag" className="min-h-screen p-16 bg-[#65334D] text-white">
        <h2 className="text-3xl font-bold text-center text-[#07EDF8]">Priser</h2>
        <p className="text-center mt-2 text-[#E439F4]">Fleksible priser for alle behov.</p>
      </section>

      <section id="kontakt" className="min-h-screen p-16 bg-gradient-to-b from-[#65334D] to-[#65334D] text-white">
        <h2 className="text-3xl font-bold text-center text-[#07EDF8]">Kontakt Oss</h2>
        <p className="text-center mt-2 text-[#E439F4]">Ta kontakt for en uforpliktende prat.</p>
      </section>
    </div>
  );
};

export default Home;
