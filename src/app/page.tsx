'use client'

import Image from 'next/image'
import MainFooter from '../lib/components/footers';
import useMobileDetect from '../lib/mobileDetect';
import useTextAnimation from '../lib/textAnimation';

export default function Home() {
  const isMobile = useMobileDetect();
  const textRef = useTextAnimation(isMobile, " Welcome to the WebRodent Nest!");

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
            <div className="h-[437px] w-[680px] rounded-full bg-gradient-radial from-white to-transparent blur-2xl from-transparent to-blue-700 opacity-20 z-[-1]" />
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

      <nav className="w-full max-w-5xl px-6 py-4 mb-32 grid grid-cols-1 gap-4 text-center lg:grid-cols-3 lg:mb-0">
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
          href="/services/meet-the-team"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Meet the Rodents</h2>
        </a>
      </nav>

      <MainFooter />
    </main>
  )
}
