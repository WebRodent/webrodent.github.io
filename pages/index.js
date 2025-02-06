import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../components/Layout/ScrollAnimationWrapper";
import React, { useMemo } from "react";
import {isMobile} from 'react-device-detect';
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import Header from "../components/Layout/Header";
import LoadingSpinner from '../components/LoadingSpinner';

const Home = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [isOpen, setIsOpen] = useState(false);
  const [showMoreServices, setShowMoreServices] = useState([false, false, false, false]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeLink, setActiveLink] = useState("home");
  const [showBubble, setShowBubble] = useState(false);

  // Move generateParticles and particles up here, before any conditionals
  const generateParticles = (count) => {
    return [...Array(count)].map((_, i) => ({
      id: i,
      size: ['small', 'medium', 'large'][Math.floor(Math.random() * 3)],
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 20,
    }));
  };

  const particles = useMemo(() => generateParticles(15), []);

  const handleServices = (index) => {
    setShowMoreServices(prevState => 
      prevState.map((show, idx) => idx === index ? !show : show)
    );
  };
  
  const services = [
    {
      title: 'ARO - Aksjonærregisteroppgaven',
      description: 'Automatiser og effektiviser innrapportering av Aksjonærregisteroppgaven med vår egenutviklede løsning.',
      listItems: ['Automatisk prosessering', 'Tidsbesparende', 'Kvalitetssikret'],
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
      title: 'Skreddersydde Nettsider',
      description: 'Moderne og brukervennlige nettsider tilpasset din bedrifts behov og målgruppe.',
      listItems: ['Responsivt Design', 'SEO-Optimalisert', 'Skalerbare Løsninger'],
      icon: (
        <svg viewBox="0 0 1800 1800" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" xmlSpace="preserve">
          <g>
            <path ill="#ffffff" d="M1718.199,2.029H81.579c-43.977,0-79.754,35.772-79.754,79.741v1636.633c0,43.973,35.777,79.749,79.754,79.749h1636.62c43.969,0,79.745-35.776,79.745-79.749V81.77C1797.944,37.801,1762.168,2.029,1718.199,2.029z M1734.873,1718.402c0,9.195-7.479,16.679-16.674,16.679H81.579c-9.204,0-16.683-7.483-16.683-16.679V340.556h1669.977V1718.402z M1734.873,277.485H64.896V81.77c0-9.19,7.479-16.67,16.683-16.67h1636.62c9.194,0,16.674,7.479,16.674,16.67V277.485z"></path>
            <circle fill="#ffffff" cx="201.36" cy="168.237" r="50.682"></circle>
            <circle fill="#ffffff" cx="361.29" cy="168.237" r="50.682"></circle>
            <circle fill="#ffffff" cx="521.221" cy="168.237" r="50.682"></circle>
            <path fill="#ffffff" d="M691.019,1349.104c4.712,2.503,9.771,3.687,14.76,3.687c11.293,0,22.218-6.085,27.884-16.753l362.28-682.476c8.166-15.385,2.314-34.475-13.066-42.64c-15.385-8.166-34.474-2.31-42.639,13.067l-362.291,682.476C669.782,1321.85,675.634,1340.939,691.019,1349.104z"></path>
            <path fill="#ffffff" d="M281.378,967.035c0.018,0.29,0.062,0.576,0.083,0.871c0.181,2.38,0.647,4.765,1.395,7.114c0.105,0.325,0.184,0.659,0.299,0.984c0.136,0.388,0.317,0.771,0.471,1.153c0.233,0.599,0.466,1.193,0.739,1.773c0.021,0.048,0.04,0.102,0.066,0.153c0.057,0.124,0.141,0.229,0.202,0.353c0.537,1.091,1.144,2.143,1.804,3.162c0.176,0.282,0.352,0.561,0.542,0.832c0.743,1.078,1.544,2.12,2.424,3.103c0.163,0.18,0.338,0.339,0.501,0.514c0.739,0.788,1.526,1.541,2.354,2.254c0.303,0.259,0.603,0.515,0.911,0.765c0.858,0.688,1.75,1.333,2.692,1.936c0.176,0.115,0.344,0.247,0.524,0.356c0.928,0.567,1.888,1.091,2.891,1.57l315.32,150.776c4.391,2.098,9.019,3.092,13.581,3.092c11.769,0,23.058-6.616,28.469-17.941c7.515-15.71,0.871-34.54-14.844-42.055L385.988,965.481l255.813-122.323c15.715-7.514,22.359-26.344,14.844-42.055c-7.51-15.714-26.344-22.367-42.05-14.848L299.592,936.882c-0.009,0.004-0.018,0.004-0.022,0.008l-0.295,0.141c-0.264,0.128-0.501,0.282-0.761,0.414c-0.633,0.321-1.263,0.646-1.874,1.016c-0.356,0.212-0.69,0.449-1.038,0.678c-0.515,0.335-1.034,0.674-1.536,1.042c-0.37,0.274-0.712,0.573-1.074,0.859c-0.44,0.36-0.879,0.712-1.307,1.1c-0.356,0.325-0.695,0.673-1.033,1.012c-0.388,0.383-0.774,0.761-1.145,1.166c-0.343,0.383-0.66,0.779-0.981,1.175c-0.33,0.396-0.66,0.787-0.968,1.205c-0.334,0.453-0.638,0.919-0.946,1.391c-0.255,0.392-0.528,0.774-0.77,1.179c-0.331,0.55-0.621,1.117-0.911,1.681c-0.167,0.317-0.352,0.607-0.501,0.928c-0.026,0.054-0.044,0.103-0.066,0.154c-0.273,0.581-0.506,1.175-0.739,1.769c-0.154,0.388-0.335,0.77-0.471,1.157c-0.115,0.325-0.194,0.66-0.299,0.99c-0.748,2.345-1.214,4.729-1.395,7.109c-0.022,0.291-0.066,0.581-0.083,0.872c-0.027,0.518-0.005,1.037-0.005,1.556C281.373,965.997,281.351,966.512,281.378,967.035z"></path>
            <path fill="#ffffff" d="M1117.246,1129.855c5.411,11.325,16.705,17.941,28.474,17.941c4.558,0,9.19-0.994,13.576-3.092l315.321-150.776c1.003-0.479,1.967-1.003,2.89-1.57c0.181-0.109,0.349-0.241,0.523-0.356c0.942-0.603,1.839-1.248,2.692-1.936c0.313-0.25,0.612-0.506,0.916-0.765c0.826-0.713,1.61-1.466,2.35-2.254c0.166-0.175,0.343-0.334,0.501-0.514c0.88-0.982,1.681-2.024,2.429-3.103c0.184-0.271,0.361-0.55,0.54-0.832c0.661-1.02,1.268-2.071,1.805-3.162c0.063-0.124,0.145-0.229,0.202-0.353c0.022-0.052,0.039-0.105,0.065-0.153c0.274-0.58,0.506-1.175,0.74-1.773c0.154-0.383,0.334-0.766,0.47-1.153c0.115-0.325,0.193-0.659,0.301-0.984c0.746-2.35,1.209-4.734,1.393-7.114c0.022-0.295,0.066-0.581,0.081-0.871c0.026-0.523,0.008-1.038,0.008-1.554c0-0.519,0.019-1.038-0.008-1.556c-0.015-0.291-0.059-0.581-0.081-0.872c-0.184-2.381-0.646-4.765-1.393-7.109c-0.107-0.33-0.186-0.665-0.301-0.99c-0.136-0.388-0.316-0.77-0.47-1.157c-0.237-0.594-0.466-1.188-0.74-1.769c-0.026-0.052-0.043-0.101-0.065-0.154c-0.154-0.32-0.34-0.616-0.506-0.928c-0.291-0.567-0.58-1.131-0.906-1.681c-0.246-0.408-0.52-0.802-0.783-1.197c-0.304-0.457-0.599-0.923-0.933-1.368c-0.316-0.427-0.655-0.831-0.994-1.236c-0.308-0.383-0.616-0.77-0.95-1.135c-0.383-0.427-0.787-0.822-1.192-1.224c-0.321-0.319-0.638-0.646-0.973-0.954c-0.458-0.413-0.938-0.796-1.417-1.183c-0.315-0.256-0.624-0.523-0.954-0.767c-0.559-0.418-1.14-0.795-1.72-1.174c-0.281-0.181-0.555-0.375-0.841-0.546c-0.712-0.431-1.447-0.818-2.195-1.192c-0.167-0.079-0.316-0.18-0.483-0.26l-0.186-0.088c-0.062-0.03-0.132-0.065-0.197-0.097l-314.938-150.59c-15.696-7.51-34.536-0.863-42.05,14.848c-7.515,15.711-0.867,34.541,14.844,42.055l255.817,122.323l-255.817,122.319C1116.379,1095.315,1109.731,1114.146,1117.246,1129.855z"></path>
          </g>
        </svg>
      )
    },
    {
      title: 'Konsulenttjenester',
      description: 'Strategisk rådgivning og teknisk ekspertise for din digitale transformasjon.',
      listItems: ['Digital Strategi', 'Teknisk Rådgivning', 'Prosjektledelse'],
      icon: (
        <svg fill="#FFFFFF" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF">
          <g>
            <path d="M54.414,14c-1.291-1.289-3.537-1.289-4.828,0l-0.639,0.639C48.714,14.872,48.404,15.404,48.404,16s0.311,1.128,0.543,1.36l0.639,0.639c1.291,1.289,3.537,1.289,4.828,0l0.639-0.639C55.872,17.128,55.872,15.289,54.414,14z"></path>
            <path d="M19.469,51.439l2.365-1.351c0.227,0.104,0.455,0.2,0.685,0.286L23.236,53h5.527l0.718-2.625c0.229-0.086,0.458-0.182,0.685-0.286l2.365,1.351l3.908-3.908l-1.351-2.365c0.104-0.227,0.2-0.455,0.286-0.685L38,43.764v-5.527l-2.625-0.718c-0.086-0.229-0.182-0.458-0.286-0.685l1.351-2.365l-3.908-3.908l-2.366,1.35c-0.226-0.104-0.454-0.2-0.684-0.286L28.764,29h-5.527l-0.718,2.625c-0.229,0.086-0.458,0.181-0.684,0.286l-2.366-1.35l-3.908,3.908l1.351,2.365c-0.104,0.227-0.2,0.455-0.286,0.685L14,38.236v5.527l2.625,0.718c0.086,0.229,0.182,0.458,0.286,0.685l-1.351,2.365L19.469,51.439z M16,42.236v-2.473l2.193-0.601l0.161-0.524c0.143-0.462,0.335-0.923,0.572-1.37l0.258-0.485l-1.13-1.98l1.748-1.748l1.979,1.129l0.486-0.257c0.449-0.237,0.91-0.43,1.37-0.572l0.524-0.161L24.764,31h2.473l0.601,2.193l0.524,0.161c0.46,0.143,0.921,0.335,1.37,0.572l0.486,0.257l1.979-1.129l1.748,1.748l-1.13,1.98l0.258,0.485c0.237,0.447,0.43,0.908,0.572,1.37l0.161,0.524L36,39.764v2.473l-2.193,0.601l-0.161,0.524c-0.143,0.462-0.335,0.923-0.572,1.37l-0.258,0.485l1.13,1.98l-1.748,1.748l-1.98-1.13l-0.485,0.258c-0.447,0.237-0.908,0.43-1.37,0.572l-0.524,0.161L27.236,51h-2.473l-0.601-2.193l-0.524-0.161c-0.462-0.143-0.923-0.335-1.37-0.572l-0.485-0.258l-1.98,1.13l-1.748-1.748l1.13-1.98l-0.258-0.485c-0.237-0.447-0.43-0.908-0.572-1.37l-0.161-0.524L16,42.236z"></path>
            <path d="M26,47c3.309,0,6-2.691,6-6s-2.691-6-6-6s-6,2.691-6,6S22.691,47,26,47z M26,37c2.206,0,4,1.794,4,4s-1.794,4-4,4s-4-1.794-4-4S23.794,37,26,37z"></path>
            <path d="M60,1H34c-1.654,0-3,1.346-3,3v8H20c-1.39,0-2.551,0.954-2.89,2.239C10.864,17.552,7,23.921,7,31v5.08C3.614,36.568,1,39.481,1,43v4c0,3.859,3.141,7,7,7h5V36H9v-5c0-6.068,3.171-11.56,8.354-14.617C17.856,17.339,18.847,18,20,18h11v6c0,1.654,1.346,3,3,3h8.515C42.831,28.303,43,29.644,43,31v5h-4v18h1.899c-0.465,2.279-2.484,4-4.899,4h-5.142c-0.447-1.721-1.999-3-3.858-3h-4c-2.206,0-4,1.794-4,4s1.794,4,4,4h4c1.859,0,3.411-1.279,3.858-3H36c3.519,0,6.432-2.614,6.92-6H44c3.859,0,7-3.141,7-7v-4c0-3.519-2.614-6.432-6-6.92V31c0-1.352-0.143-2.692-0.424-4H47v5.804L56.287,27H60c1.654,0,3-1.346,3-3V4C63,2.346,61.654,1,60,1z M11,52H9V40H7v11.899C4.721,51.434,3,49.414,3,47v-4c0-2.757,2.243-5,5-5h3V52z M27,61h-4c-1.103,0-2-0.897-2-2s0.897-2,2-2h4c1.103,0,2,0.897,2,2S28.103,61,27,61z M49,43v4c0,2.414-1.721,4.434-4,4.899V40h-2v12h-2V38h3C46.757,38,49,40.243,49,43z M25,14v2h-2v-2H25z M19,15c0-0.551,0.448-1,1-1h1v2h-1C19.448,16,19,15.551,19,15z M27,16v-2h4v2H27z M61,24c0,0.551-0.448,1-1,1h-4.287L49,29.196V25H34c-0.552,0-1-0.449-1-1V4c0-0.551,0.448-1,1-1h26c0.552,0,1,0.449,1,1V24z"></path>
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

  // Replace the testimonials array and section with this new customers section
  const customers = [
    {
      name: "Pigeon Vitality",
      logo: "assets/pgv.png",
      mission: "Kartlegging av IT-infrastruktur og digital strategi",
      nettside: "https://www.pigeonvitality.com/"
    },
    {
      name: "Aicono",
      logo: "assets/aicono_negativ.png",
      mission: "IT tjeneste leverandør",
      nettside: "https://www.aicono.no/"
    },
    {
      name: "One Accounting",
      logo: "assets/oneaccounting-logo.png",
      mission: "IT tjeneste leverandør",
      nettside: "https://www.oneaccounting.no/"
    }
  ];

  // Add this array at the top of your component
  const ratMessages = [
    // Professional & Direct
    "Trenger du en nettside?",
    "La oss bygge noe kult sammen!",
    "Skal vi ta en prat?",
    "Vi kan hjelpe deg med IT!",
    
    // Quirky & Fun
    "🧀 Ost er godt, kode er bedre!",
    "Psst... vil du se noe kult?",
    "En liten mus med store ideer!",
    "Kode-rotta på vakt! 🐭",
    
    // Tech Humor
    "404: Ost ikke funnet",
    "while(sleeping === false) { code(); }",
    "Git commit -m 'fikset alt... tror jeg'",
    "{ margin: auto } løser alt!",
    
    // Playful Business
    "Din IT-partner med hale!",
    "La oss gjøre nettsiden din ost-resistant",
    "Webrodent gnager på dine IT-problemer",
    "Skal vi bygge noe MEGAbit-t?",
    
    // Strange but Charming
    "Jeg drømmer i HTML",
    "Bits, bytes, og litt ost på siden",
    "Kode-ninja med værhår",
    "Musepekeren er min beste venn",
    
    // Norwegian Tech Puns
    "Har du hørt om cloud? Det er over alt!",
    "Jeg er en full-stack-mus",
    "Responsive design er min ost",
    "Backend? Frontned? Jeg tar begge!",
    
    // Random Thoughts
    "Tenk om internett var laget av ost...",
    "Koden min er skarpere enn mine tenner",
    "Jeg bytter bugs mot ost",
    "Debugger profesjonelt siden 2020",
    
    // Call-to-Action with Twist
    "Klikk her, jeg lover ikke å bite!",
    "La oss gjøre nettet litt morsommere",
    "Din nettside trenger litt gnager-magi",
    "Skal vi lage noe OSome sammen?",
    
    // Tech Support Humor
    "Har du prøvd å skru av og på osten?",
    "sudo make me_a_sandwich",
    "Jeg spiser bugs til frokost",
    "Kodet med værhårene i været",
    
    // Seasonal/Time-based
    "Koder mens du sover 🌙",
    "En kode-rotte's dagbok",
    "Nattskiftet er mitt favorittskift",
    "Kaffedrevet webutvikling 24/7"
  ];

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="relative min-h-screen">
      {/* Background Effects */}
      <div className="animated-bg">
        <div className="gradient-orb" />
        <div className="gradient-orb" style={{ 
          animation: 'orb-rotate 25s linear infinite reverse',
          opacity: 0.7,
          transform: 'translateX(50vw) translateY(25vh)'
        }} />
        <div className="absolute inset-0 bg-[#010124]/80 backdrop-blur-3xl" />
      </div>
      
      <Header />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute w-96 h-96 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full filter blur-3xl opacity-10"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  transform: `scale(${Math.random() + 0.5})`,
                  animation: `float ${10 + i * 2}s ease-in-out infinite`,
                  animationDelay: `${i * -2}s`
                }}
              />
            ))}
          </div>
          
          <div className="container mx-auto px-4 pt-20 pb-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10"
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  <span className="text-white leading-tight">Din </span>
                  <span className="text-accent-secondary">Digitale </span>
                  <span className="text-accent-primary">Fremtid</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed">
                  Vi leverer moderne løsninger for din bedrift
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#tjenester" className="hero-button primary">
                    Utforsk våre tjenester
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a href="#contact" className="hero-button secondary">
                    Ta kontakt
                  </a>
                </div>
              </motion.div>

              {/* Right content - Tech illustration */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="relative">
                  <div className="hero-tech-circle"></div>
                  <img
                    src="/assets/hero2.gif"
                    alt="Tech Illustration"
                    className="relative z-10 w-full h-auto rounded-3xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Updated Cutie Rat Character */}
          <motion.div
            initial={{ x: "calc(100% + 120px)" }}
            animate={{ x: "calc(100% - 20px)" }}
            whileHover={{ x: "calc(100% - 140px)" }}
            transition={{ 
              type: "spring",
              stiffness: 400,
              damping: 25
            }}
            className="fixed right-0 bottom-20 z-50"
          >
            {/* Added hit area wrapper */}
            <div 
              className="rat-trigger-area"
              onMouseEnter={() => setShowBubble(true)}
              onMouseLeave={() => setShowBubble(false)}
            >
              <div className="relative group">
                <motion.img 
                  src="/assets/rats/cutie_rat.png" 
                  alt="Cutie Rat"
                  className="w-32 h-auto cutie-rat"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <AnimatePresence>
                  {showBubble && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: 20 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 500,
                        damping: 25
                      }}
                      className="absolute -top-24 -left-32 speech-bubble"
                    >
                      <RandomMessage messages={ratMessages} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Products Section */}
        <section id="products" className="modern-section">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
                Våre Produkter
              </h2>
              <p className="text-xl text-white/80">
                Skreddersydde løsninger for din bedrift
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.3,
                    delay: index * 0.1
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="modern-card float-element"
                >
                  <div className="p-8">
                    <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] opacity-90">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 accent-line">
                      {service.title}
                    </h3>
                    <p className="text-white/80 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.listItems.map((item, idx) => (
                        <li key={idx} className="flex items-center text-white/70">
                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ 
                              duration: 0.2,
                              delay: index * 0.1 + idx * 0.05
                            }}
                            viewport={{ once: true }}
                            className="mr-3"
                            style={{ color: 'var(--accent-secondary)' }}
                          >
                            <svg className="w-5 h-5 text-accent-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </motion.div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Customers Section */}
        <section id="kunder" className="modern-section">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
                Våre Kunder
              </h2>
              <p className="text-xl text-white/80">
                Vi er stolte av å samarbeide med disse selskapene
              </p>
            </motion.div>

            <div className="customer-grid">
              {customers.map((customer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="customer-item"
                >
                  <a 
                    href={customer.nettside} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="customer-link group"
                  >
                    <div className="customer-logo">
                      <img 
                        src={customer.logo}
                        alt={customer.name}
                        className="logo-image"
                      />
                    </div>
                    <div className="customer-info">
                      <h3 className="customer-name">
                        {customer.name}
                      </h3>
                      <p className="customer-mission">
                        {customer.mission}
                      </p>
                      <div className="visit-link">
                        <span>Besøk nettside</span>
                        <svg 
                          className="link-arrow" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="modern-section">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">Om Oss</h2>
              <p className="text-xl text-white/80">Erfaring møter innovasjon</p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="modern-card">
                  <div className="p-8">
                    <h3 className="text-3xl font-bold mb-6 accent-line inline-block">Webrodent</h3>
                    <p className="text-white/80 leading-relaxed mb-8">
                      Vi er skjulte eksperter som leverer kvalitet i kulissene. Med et erfarent utviklingsmiljø 
                      leverer vi sømløse digitale løsninger som hjelper bedrifter å vokse og lykkes i den 
                      digitale verden.
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="modern-card">
                        <div className="p-6">
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center">
                              <svg className="w-5 h-5 text-accent-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            </div>
                            <h4 className="text-xl font-bold text-white">Innovasjon</h4>
                          </div>
                          <p className="text-white/70">Vi er alltid i forkant av teknologiske trender</p>
                        </div>
                      </div>
                      <div className="modern-card">
                        <div className="p-6">
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center">
                              <svg className="w-5 h-5 text-accent-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <h4 className="text-xl font-bold text-white">Kvalitet</h4>
                          </div>
                          <p className="text-white/70">Høy kvalitet i alle ledd av utviklingen</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <div className="modern-card p-1 aspect-[16/9]">
                  <img
                    src="assets/hero2.gif"
                    alt="About Webrodent"
                    className="w-full h-full object-cover rounded-[22px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-deep)] via-transparent to-transparent rounded-[22px]"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="modern-section relative overflow-hidden">
          <div className="container mx-auto px-4">
            {/* Title */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
                Kontakt Oss
              </h2>
              <p className="text-xl text-white/80">
                Ta kontakt for en uforpliktende prat
              </p>
            </motion.div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="contact-card p-8 md:p-12">
                  <h3 className="text-3xl font-bold mb-8 text-accent-secondary glow-text-subtle">
                    La oss snakke sammen
                  </h3>
                  <p className="text-lg text-white/80 mb-12 leading-relaxed">
                    Vi er her for å hjelpe deg med å ta din bedrift til neste nivå. 
                    Send oss en melding, så tar vi kontakt!
                  </p>
                  
                  {/* Contact Links */}
                  <div className="space-y-6">
                    <a href="mailto:post@webrodent.com" className="contact-link-card group">
                      <div className="contact-link-content">
                        <div className="icon-container">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="text-lg">post@webrodent.com</span>
                      </div>
                    </a>
                    
                    <a href="https://github.com/webrodent" target="_blank" rel="noopener noreferrer" 
                      className="contact-link-card group"
                    >
                      <div className="contact-link-content">
                        <div className="icon-container">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-.446-.446-0.446-0.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                          </svg>
                        </div>
                        <span className="text-lg">GitHub</span>
                      </div>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="contact-image-card">
                  <div className="relative w-full aspect-[16/9]">
                    <img
                      src="assets/rats/rat_purple_wave.png"
                      alt="Webrodent Contact"
                      className="w-full h-full object-cover rounded-[22px]"
                    />
                    <div className="image-overlay"></div>
                    <div className="tech-pattern"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

// Add this component for random messages
const RandomMessage = ({ messages }) => {
  const [message, setMessage] = useState(messages[0]);
  
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setMessage(messages[randomIndex]);
  }, [messages]);

  return <p className="text-sm font-medium text-bg-deep">{message}</p>;
};

export default Home;
