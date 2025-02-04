import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../components/Layout/ScrollAnimationWrapper";
import React, { useMemo } from "react";
import {isMobile} from 'react-device-detect';
import { Menu, X } from "lucide-react";

const Home = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [isOpen, setIsOpen] = useState(false);
  const [showMoreServices, setShowMoreServices] = useState([false, false, false, false]);

  const handleServices = (index) => {
    setShowMoreServices(prevState => 
      prevState.map((show, idx) => idx === index ? !show : show)
    );
  };
  
  const services = [
    {
      title: 'For Regnskapsbransjen',
      description: 'ARO er vår egenutviklede tjeneste som automatiserer og effektiviserer Aksjonærregisteroppgaven!',
      listItems: ['Fornøyde kunder', 'Sparer tid og ressurser', 'Brukt av flere Regnskapsbyrå'],
      additionalContent: 'Vi hjelper deg med å automatisere regnskapoppgaver og øke nøyaktigheten, og sikrer en jevn økonomisk drift for firmaet ditt.',
      icon: (
        <svg viewBox="0 0 64 64" fill="#ffffff">
          <style type="text/css">
            {`
              .st0{fill:none;stroke:#ffffff;stroke-width:2;stroke-miterlimit:10;}
              .st1{fill:none;stroke:#ffffff;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
              .st2{fill:none;stroke:#ffffff;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:6,5;}
            `}
          </style>
          <g>
            <rect className="st1" height="8" width="6" x="17" y="44"></rect>
            <rect className="st1" height="20" width="6" x="29" y="32"></rect>
            <rect className="st1" height="32" width="6" x="41" y="20"></rect>
            <g>
              <line className="st1" x1="12" x2="36" y1="36" y2="12"></line>
              <polyline className="st1" points="30,12 36,12 36,18 "></polyline>
            </g>
          </g>
          <line className="st1" x1="12" x2="52" y1="52" y2="52"></line>
        </svg>
      )
    },
    {
      title: 'Konsulent-tjenester',
      description: 'Skreddersydde konsulenttjenester for å drive vekst, forbedre effektivitet og løse forretningsutfordringer.',
      listItems: ['Forretningsstrategi', 'Prosjektledelse', 'Risikovurdering'],
      additionalContent: 'Våre konsulenter jobber tett med deg for å identifisere utfordringer og implementere strategiske løsninger som forbedrer ytelsen.',
      icon: (
        <svg fill="#FFFFFF" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF">
          <g>
            <path d="M54.414,14c-1.291-1.289-3.537-1.289-4.828,0l-0.639,0.639C48.714,14.872,48.404,15..."></path>
            <path d="M19.469,51.439l2.365-1.351c0.227,0.104,0.455,0.2,0.685,0.286L23.236,53h5.527l0.718-2.625 c0.229-0.086,0.458-0.182,0.685-0.286l2.365,1.351l3.908-3.908l-1.351-2.365c0.104-0.227,0.2-0.455,0.286-0.685L38,43.764v-5.527 l-2.625-0.718c-0.086-0.229-0.182-0.458-0.286-0.685l1.351-2.365l-3.908-3.908l-2.366,1.35c-0.226-0.104-0.454-0.2-0.684-0.286 L28.764,29h-5.527l-0.718,2.625c-0.229,0.086-0.458,0.181-0.684,0.286l-2.366-1.35l-3.908,3.908l1.351,2.365 c-0.104,0.227-0.2,0.455-0.286,0.685L14,38.236v5.527l2.625,0.718c0.086,0.229,0.182,0.458,0.286,0.685l-1.351,2.365L19.469,51.439 z M16,42.236v-2.473l2.193-0.601l0.161-0.524c0.143-0.462,0.335-0.923,0.572-1.37l0.258-0.485l-1.13-1.98l1.748-1.748l1.979,1.129 l0.486-0.257c0.449-0.237,0.91-0.43,1.37-0.572l0.524-0.161L24.764,31h2.473l0.601,2.193l0.524,0.161 c0.46,0.143,0.921,0.335,1.37,0.572l0.486,0.257l1.979-1.129l1.748,1.748l-1.13,1.98l0.258,0.485 c0.237,0.447,0.43,0.908,0.572,1.37l0.161,0.524L36,39.764v2.473l-2.193,0.601l-0.161,0.524c-0.143,0.462-0.335,0.923-0.572,1.37 l-0.258,0.485l1.13,1.98l-1.748,1.748l-1.98-1.13l-0.485,0.258c-0.447,0.237-0.908,0.43-1.37,0.572l-0.524,0.161L27.236,51h-2.473 l-0.601-2.193l-0.524-0.161c-0.462-0.143-0.923-0.335-1.37-0.572l-0.485-0.258l-1.98,1.13l-1.748-1.748l1.13-1.98l-0.258-0.485 c-0.237-0.447-0.43-0.908-0.572-1.37l-0.161-0.524L16,42.236z"></path>
            <path d="M26,47c3.309,0,6-2.691,6-6s-2.691-6-6-6s-6,2.691-6,6S22.691,47,26,47z M26,37c2.206,0,4,1.794,4,4s-1.794,4-4,4 s-4-1.794-4-4S23.794,37,26,37z"></path>
            <path d="M60,1H34c-1.654,0-3,1.346-3,3v8H20c-1.39,0-2.551,0.954-2.89,2.239C10.864,17.552,7,23.921,7,31v5.08 C3.614,36.568,1,39.481,1,43v4c0,3.859,3.141,7,7,7h5V36H9v-5c0-6.068,3.171-11.56,8.354-14.617C17.856,17.339,18.847,18,20,18h11 v6c0,1.654,1.346,3,3,3h8.515C42.831,28.303,43,29.644,43,31v5h-4v18h1.899c-0.465,2.279-2.484,4-4.899,4h-5.142 c-0.447-1.721-1.999-3-3.858-3h-4c-2.206,0-4,1.794-4,4s1.794,4,4,4h4c1.859,0,3.411-1.279,3.858-3H36c3.519,0,6.432-2.614,6.92-6 H44c3.859,0,7-3.141,7-7v-4c0-3.519-2.614-6.432-6-6.92V31c0-1.352-0.143-2.692-0.424-4H47v5.804L56.287,27H60c1.654,0,3-1.346,3-3 V4C63,2.346,61.654,1,60,1z M11,52H9V40H7v11.899C4.721,51.434,3,49.414,3,47v-4c0-2.757,2.243-5,5-5h3V52z M27,61h-4 c-1.103,0-2-0.897-2-2s0.897-2,2-2h4c1.103,0,2,0.897,2,2S28.103,61,27,61z M49,43v4c0,2.414-1.721,4.434-4,4.899V40h-2v12h-2V38h3 C46.757,38,49,40.243,49,43z M25,14v2h-2v-2H25z M19,15c0-0.551,0.448-1,1-1h1v2h-1C19.448,16,19,15.551,19,15z M27,16v-2h4v2H27z M61,24c0,0.551-0.448,1-1,1h-4.287L49,29.196V25H34c-0.552,0-1-0.449-1-1V4c0-0.551,0.448-1,1-1h26c0.552,0,1,0.449,1,1V24z"></path>
          </g>
        </svg>
      )
    },
    {
      title: 'Skreddersydde Nettsider',
      description: 'Skreddersydd webutvikling som bringer visjonen din til liv med brukerfokusert design og banebrytende teknologi.',
      listItems: ['Responsivt design', 'E-handel integrasjon', 'SEO-optimalisering'],
      additionalContent: 'Vi spesialiserer oss på å lage nettsider som er både estetisk tiltalende og funksjonelle, og sikrer en sømløs brukeropplevelse.',
      icon: (
        <svg viewBox="0 0 1800 1800" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" xmlSpace="preserve">
          <g>
            <path ill="#ffffff" d="M1718.199,2.029H81.579c-43.977,0-79.754,35.772-79.754,79.741v1636.633c0,43.973,35.777,79.749,79.754,79.749h1636.62c43.969,0,79.745-35.776,79.745-79.749V81.77C1797.944,37.801,1762.168,2.029,1718.199,2.029z M1734.873,1718.402c0,9.195-7.479,16.679-16.674,16.679H81.579c-9.204,0-16.683-7.483-16.683-16.679V340.556h1669.977V1718.402z M1734.873,277.485H64.896V81.77c0-9.19,7.479-16.67,16.683-16.67h1636.62c9.194,0,16.674,7.479,16.674,16.67V277.485z"></path>
            <circle fill="#ffffff" cx="201.36" cy="168.237" r="50.682"></circle>
            <circle fill="#ffffff" cx="361.29" cy="168.237" r="50.682"></circle>
            <circle fill="#ffffff" cx="521.221" cy="168.237" r="50.682"></circle>
            <path fill="#ffffff" d="M691.019,1349.104c4.712,2.503,9.771,3.687,14.76,3.687c11.293,0,22.218-6.085,27.884-16.753l362.28-682.476c8.166-15.385,2.314-34.475-13.066-42.64c-15.385-8.166-34.474-2.31-42.639,13.067l-362.291,682.476C669.782,1321.85,675.634,1340.939,691.019,1349.104z"></path>
            <path fill="#ffffff" d="M281.378,967.035c0.018,0.29,0.062,0.576,0.083,0.871c0.181,2.38,0.647,4.765,1.395,7.114c0.105,0.325,0.184,0.659,0.299,0.984c0.136,0.388,0.317,0.771,0.471,1.153c0.233,0.599,0.466,1.193,0.739,1.773c0.021,0.048,0.04,0.102,0.066,0.153c0.057,0.124,0.141,0.229,0.202,0.353c0.537,1.091,1.144,2.143,1.804,3.162c0.176,0.282,0.352,0.561,0.542,0.832c0.743,1.078,1.544,2.12,2.424,3.103c0.163,0.18,0.338,0.339,0.501,0.514c0.739,0.788,1.526,1.541,2.354,2.254c0.303,0.259,0.603,0.515,0.911,0.765c0.858,0.688,1.75,1.333,2.692,1.936c0.176,0.115,0.344,0.247,0.524,0.356c0.928,0.567,1.888,1.091,2.891,1.57l315.32,150.776c4.391,2.098,9.019,3.092,13.581,3.092c11.769,0,23.058-6.616,28.469-17.941c7.515-15.71,0.871-34.54-14.844-42.055L385.988,965.481l255.813-122.323c15.715-7.514,22.359-26.344,14.844-42.055c-7.51-15.714-26.344-22.367-42.05-14.848L299.592,936.882c-0.009,0.004-0.018,0.004-0.022,0.008l-0.295,0.141c-0.264,0.128-0.501,0.282-0.761,0.414c-0.633,0.321-1.263,0.646-1.874,1.016c-0.356,0.212-0.69,0.449-1.038,0.678c-0.515,0.335-1.034,0.674-1.536,1.042c-0.37,0.274-0.712,0.573-1.074,0.859c-0.44,0.36-0.879,0.712-1.307,1.1c-0.356,0.325-0.695,0.673-1.033,1.012c-0.388,0.383-0.774,0.761-1.145,1.166c-0.343,0.383-0.66,0.779-0.981,1.175c-0.33,0.396-0.66,0.787-0.968,1.205c-0.334,0.453-0.638,0.919-0.946,1.391c-0.255,0.392-0.528,0.774-0.77,1.179c-0.331,0.55-0.621,1.117-0.911,1.681c-0.167,0.317-0.352,0.607-0.501,0.928c-0.026,0.054-0.044,0.103-0.066,0.154c-0.273,0.581-0.506,1.175-0.739,1.769c-0.154,0.388-0.335,0.77-0.471,1.157c-0.115,0.325-0.194,0.66-0.299,0.99c-0.748,2.345-1.214,4.729-1.395,7.109c-0.022,0.291-0.066,0.581-0.083,0.872c-0.027,0.518-0.005,1.037-0.005,1.556C281.373,965.997,281.351,966.512,281.378,967.035z"></path>
            <path fill="#ffffff" d="M1117.246,1129.855c5.411,11.325,16.705,17.941,28.474,17.941c4.558,0,9.19-0.994,13.576-3.092l315.321-150.776c1.003-0.479,1.967-1.003,2.89-1.57c0.181-0.109,0.349-0.241,0.523-0.356c0.942-0.603,1.839-1.248,2.692-1.936c0.313-0.25,0.612-0.506,0.916-0.765c0.826-0.713,1.61-1.466,2.35-2.254c0.166-0.175,0.343-0.334,0.501-0.514c0.88-0.982,1.681-2.024,2.429-3.103c0.184-0.271,0.361-0.55,0.54-0.832c0.661-1.02,1.268-2.071,1.805-3.162c0.063-0.124,0.145-0.229,0.202-0.353c0.022-0.052,0.039-0.105,0.065-0.153c0.274-0.58,0.503-1.175,0.74-1.773c0.153-0.383,0.334-0.766,0.47-1.153c0.115-0.325,0.193-0.659,0.301-0.984c0.746-2.35,1.209-4.734,1.393-7.114c0.022-0.295,0.066-0.581,0.081-0.871c0.026-0.523,0.008-1.038,0.008-1.554c0-0.519,0.019-1.038-0.008-1.556c-0.015-0.291-0.059-0.581-0.081-0.872c-0.184-2.381-0.646-4.765-1.393-7.109c-0.107-0.33-0.186-0.665-0.301-0.99c-0.136-0.388-0.316-0.77-0.47-1.157c-0.237-0.594-0.466-1.188-0.74-1.769c-0.026-0.052-0.043-0.101-0.065-0.154c-0.154-0.32-0.34-0.616-0.506-0.928c-0.291-0.567-0.58-1.131-0.906-1.681c-0.246-0.408-0.52-0.802-0.783-1.197c-0.304-0.457-0.599-0.923-0.933-1.368c-0.316-0.427-0.655-0.831-0.994-1.236c-0.308-0.383-0.616-0.77-0.95-1.135c-0.383-0.427-0.787-0.822-1.192-1.224c-0.321-0.319-0.638-0.646-0.973-0.954c-0.458-0.413-0.938-0.796-1.417-1.183c-0.315-0.256-0.624-0.523-0.954-0.767c-0.559-0.418-1.14-0.795-1.72-1.174c-0.281-0.181-0.555-0.375-0.841-0.546c-0.712-0.431-1.447-0.818-2.195-1.192c-0.167-0.079-0.316-0.18-0.483-0.26l-0.186-0.088c-0.062-0.03-0.132-0.065-0.197-0.097l-314.938-150.59c-15.696-7.51-34.536-0.863-42.05,14.848c-7.515,15.711-0.867,34.541,14.844,42.055l255.817,122.323l-255.817,122.319C1116.379,1095.315,1109.731,1114.146,1117.246,1129.855z"></path>
          </g>
        </svg>
      )
    },
    {
      title: 'Første Kontakt',
      description: 'Din første steg mot digital transformasjon. Vi hjelper bedrifter med å tilpasse seg den digitale tidsalderen med letthet.',
      listItems: ['Konsultasjon', 'Digital strategi', 'Implementering'],
      additionalContent: 'Gjennom innledende konsultasjoner gir vi en veikart for digital suksess, og legger grunnlaget for fremtidig vekst.',
      icon: (
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M5 7h14M5 11h14M5 15h14M5 19h14" />
        </svg>
      )
    }
  ];

  const features = [
    {
      title: "The quick fox",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium rem aperiam, eaque ipsa quae. Sit error voluptatem.",
    },
    {
      title: "Leverage agile",
      description:
        "Storage shed, troughs feed bale manure, is garden wheat oats at augers. Bulls at rose garden cucumbers mice sunflower wheat in pig.",
    },
    {
      title: "Organically grow",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium rem aperiam, eaque ipsa quae. Sit error voluptatem.",
    },
    {
      title: "Have a good one",
      description:
        "Storage shed, troughs feed bale manure, is garden wheat oats at augers. Bulls at rose garden cucumbers mice sunflower wheat in pig.",
    },
    {
      title: "Trough pomfret",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium rem aperiam, eaque ipsa quae. Sit error voluptatem.",
    },
    {
      title: "Disrupt inspire",
      description:
        "Storage shed, troughs feed bale manure, is garden wheat oats at augers. Bulls at rose garden cucumbers mice sunflower wheat in pig.",
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full p-4 bg-transparent text-white z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-lg md:text-xl xl:text-3xl font-bold text-white">WEBRODENT</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4 xl:space-x-6 text-white">
          {["hjem", "tjenester", "referanser", "fagområder", "kontakt"].map((item) => (
            <li key={item} className="text-sm md:text-base xl:text-lg">
              <ScrollLink to={item} smooth duration={500} className="cursor-pointer hover:text-[#E439F4]">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#4f243b] shadow-lg">
          <ul className="flex flex-col items-center py-4 space-y-2 text-white">
            {["hjem", "tjenester", "referanser", "fagområder", "kontakt"].map((item) => (
              <li key={item} className="text-lg">
                <ScrollLink 
                  to={item} 
                  smooth 
                  duration={500} 
                  className="cursor-pointer hover:text-[#E439F4]"
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>

      {/* Hero Section */}
      <ScrollAnimationWrapper>
          <section id="hjem" className="h-screen flex flex-col items-center justify-center bg-[radial-gradient(circle,_#04233d_0%,_#05132b_40%)] text-white text-center px-4 relative">
            <motion.div className="absolute top-1/3 w-full" variants={scrollAnimation}>
              <h1 className="text-4xl md:text-6xl font-bold text-white">Din Digitale Fremtid</h1>
              <p className="mt-4 text-md md:text-xl text-[#E439F4]">Vi leverer moderne løsninger for din bedrift.</p>
            </motion.div>
            <ScrollLink to="tjenester" smooth duration={500} className="absolute bottom-10 inline-flex items-center bg-white text-[#010409] px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#E439F4] transition cursor-pointer">
              Les mer <ArrowDown className="ml-2" />
            </ScrollLink>
          </section>
      </ScrollAnimationWrapper>

      {/* Sections */}
      <section id="tjenester" className="min-h-screen p-16 bg-gradient-to-b from-[#05132b] to-[#65334D] text-white">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
            <div className="lg:w-1/2">
              <h2 className="max-w-md mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none xl:max-w-lg">
                <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="#65334D"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="07690130-d013-42bc-83f4-90de7ac68f76"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#07690130-d013-42bc-83f4-90de7ac68f76)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">Ta</span>
              </span>{' '}
              
                din plass i det digitale domenet idag!
              </h2>
            </div>
            <div className="lg:w-1/2">
              <p className="text-base text-white md:text-lg">
                Webrodent – Skjulte eksperter som leverer kvalitet i kulissene. Vi har et erfarent utviklingsmiljø som leverer sømløse digitale løsninger.
              </p>
            </div>
          </div>
          <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index}>
                <div className="flex items-center justify-center w-16 h-16 mb-4">
                  {service.icon}
                </div>
                <h6 className="mb-2 font-semibold leading-5">{service.title}</h6>
                <p className="mb-3 text-sm text-white">
                  {service.description}
                </p>
                <ul className="mb-4 -ml-1 space-y-2">
                  {service.listItems.map((item, idx) => (
                    <li className="flex items-start" key={idx}>
                      <span className="mr-1">
                        <svg className="w-5 h-5 mt-px text-white" stroke="currentColor" viewBox="0 0 52 52">
                          <polygon
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                          />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleServices(index)} 
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-white hover:text-[#E439F4]"
                >
                  {showMoreServices[index] ? 'Vis mindre' : 'Les mer'}
                </button>

                {/* Conditionally render the additional content */}
                {showMoreServices[index] && (
                  <div className="mt-4 text-white">
                    <p>{service.additionalContent}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="referanser" className="min-h-screen p-16 bg-[#65334D]">
        <div className="py-16 max-w-6xl mx-auto font-sans">
        <div className="text-center mb-12 md:mb-28">
        <h2 className="max-w-md mx-auto mb-6 font-sans text-3xl font-bold tracking-tight text-white text-center sm:text-4xl sm:leading-none xl:max-w-lg">
              <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="#05132b"
                className="absolute top-0 left-0 z-0 w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="dots-pattern"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#dots-pattern)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Hva</span>
            </span>{' '}
            
              våre kunder sier
            </h2>
        </div>

        <div className="relative grid gap-6 md:grid-cols-3">
          {/* Background Gradient */}
          <div className="absolute top-[-4rem] left-0 right-0 mx-auto h-[145%] w-[65%] rounded-3xl max-md:hidden" style={{backgroundImage: "linear-gradient(to bottom, #030817, #070d1f, #0a1127, #0a142f, #0c1737)"}}></div>

          {/* Testimonial 1 */}
          <div className="relative mx-auto h-auto rounded-2xl bg-white p-6 shadow-md md:shadow-none">
            <img src="https://readymadeui.com/profile_2.webp" alt="John Doe" className="w-10 h-10 rounded-full" />
            <h4 className="mt-3 text-sm font-bold text-black">Brakstad</h4>
            <p className="mt-0.5 text-xs text-black">Pigeon Vitality, Eier</p>
            <p className="mt-4 text-sm leading-relaxed text-black">
              Duene vinner nå alle konkurranser takket være WebRodent.
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="relative mx-auto h-auto rounded-2xl bg-white p-6 shadow-md md:shadow-none">
            <img src="https://readymadeui.com/profile_3.webp" alt="Mark Adair" className="w-10 h-10 rounded-full" />
            <h4 className="mt-3 text-sm font-bold text-black">Mads William Lia</h4>
            <p className="mt-0.5 text-xs text-black">Aicono, Daglig Leder</p>
            <p className="mt-4 text-sm leading-relaxed text-black">
              ARO-tjenesten til WebRodent har effektivisert vår årlige innsamling av Aksjonærregisteroppgaven for alle våre kunder. Denne tjenesten bruker vi om igjen!
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="relative mx-auto h-auto rounded-2xl bg-white p-6 shadow-md md:shadow-none">
            <img src="https://readymadeui.com/profile_4.webp" alt="Simon Konecki" className="w-10 h-10 rounded-full" />
            <h4 className="mt-3 text-sm font-bold text-black">Simon Konecki</h4>
            <p className="mt-0.5 text-xs text-black">Founder of Labar</p>
            <p className="mt-4 text-sm leading-relaxed text-black">
              The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.
            </p>
          </div>
        </div></div>
      </section>

      <section id="fagområder" className="min-h-screen p-16 bg-[#65334D] text-white">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
            <div className="lg:w-1/2">
              <h2 className="max-w-md mb-6 font-sans text-3xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none xl:max-w-lg">
                <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="white"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="dots-pattern-2"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#dots-pattern-2)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">Våre</span>
              </span>{' '}
              
                fagområder
              </h2>
            </div>
            <div className="lg:w-1/2">
              <p className="text-base text-black md:text-lg">
                Vi har et bredt spekter av kompetanse. Vi har et bredt spekter av kompetanse. Vi har et bredt spekter av kompetanse.
              </p>
            </div>
          </div>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-8 border-[#05132b] ${
                    index < 3 ? "sm:border-b" : ""
                  } ${index % 3 !== 2 ? "sm:border-r" : ""}`}
                >
                  <div className="max-w-md text-center">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                      <svg
                        className="w-8 h-8 text-black sm:w-12 sm:h-12"
                        stroke="black"
                        viewBox="0 0 52 52"
                      >
                        <polygon
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                      </svg>
                    </div>
                    <h6 className="mb-2 font-semibold leading-5">{feature.title}</h6>
                    <p className="mb-3 text-sm text-black">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="kontakt" className="min-h-screen p-16 bg-gradient-to-b from-[#65334D] to-[#65334D] text-white">
        <h2 className="text-3xl font-bold text-center text-[#07EDF8]">Kontakt Oss</h2>
        <p className="text-center mt-2 text-[#E439F4]">Ta kontakt for en uforpliktende prat.</p>
      </section>
    </div>
  );
};

export default Home;
