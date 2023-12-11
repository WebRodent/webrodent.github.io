'use client'

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image'

export default function Home() {
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const text = "Welcome to the Web Rodent Nest";
      let i = 0;
      const intervalId = setInterval(() => {
        if (textRef.current) {
          if (i < text.length) {
            textRef.current.textContent = text.slice(0, i+1) + '_';
            i++;
          } else {
            textRef.current.textContent = text; // remove "_" character upon completion
            clearInterval(intervalId);
          }
        } else {
          clearInterval(intervalId);
        }
      }, 100); // adjust speed as needed

      return () => clearInterval(intervalId); // cleanup on unmount
    }
  }, [isMobile]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      {!isMobile && (
        <header className="w-1/3 max-w-5xl px-6 py-4 text-left">
          <div className="flex">
            <p className="text-blue-400 opacity-40">C:\Users\WebRodent&gt;</p>
            <p ref={textRef} className="text-blue-400"></p>
          </div>
        </header>
      )}

      <div className="z-10 flex flex-col items-center justify-center flex-grow w-full max-w-5xl px-6">
        <div className="relative flex justify-center items-center w-full">
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="h-[300px] w-[680px] rounded-full bg-gradient-radial from-white to-transparent blur-2xl from-transparent to-blue-700 opacity-10 z-[-1]" />
            <div className="h-[180px] w-[440px] bg-gradient-conic from-sky-200 via-blue-200 to-transparent blur-2xl from-sky-900 via-[#0141ff] opacity-40 z-[-1]" />
          </div>
          <Image
            src="/webrodent_logo_3.svg" // replace with your logo image path
            alt="WebRodent Logo"
            width={680}
            height={537}
            priority
            className="relative z-10 drop-shadow-[0_0_0.3rem_#ffffff70] invert"
          />
        </div>
      </div>

      <nav className="w-full max-w-5xl px-6 py-4 mb-32 grid grid-cols-1 gap-4 text-center lg:grid-cols-4 lg:mb-0">
        <a
          href="/services/generative-ai-adoption"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Generative AI Adoption Plans</h2>
        </a>
        <a
          href="/services/modern-customized-solutions"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Modern Customized Solutions</h2>
        </a>
        <a
          href="/services/team-training"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Team Training</h2>
        </a>
        <a
          href="/services/meet-the-team"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Meet the Rodents</h2>
        </a>
      </nav>

      <footer className="w-full max-w-5xl px-6 py-4 text-center">
        <a
          href="https://nest.webrodent.com"
          className="flex items-center justify-center gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{' '}
          <Image
            src="/webrodent_logo_stripped.svg"
            alt="WebRodent Logo"
            width={100}
            height={24}
            priority
            className="relative z-10 drop-shadow-[0_0_0.3rem_#ffffff70] invert"
          />
        </a>
      </footer>
    </main>
  )
}
