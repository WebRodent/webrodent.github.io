import { useRouter } from 'next/navigation';
import ArrowButton from './ArrowButton';
import useMobileDetect from '../lib/mobileDetect';
import useTextAnimation from '../lib/textAnimation';

export default function HeroSection() {

  const isMobile = useMobileDetect();
  const textRef = useTextAnimation(false, "Ta din plass i det digitale domenet idag!");

  return (
    <section
      className="relative h-screen bg-cover bg-center"
      id="home-section"
      //style={{ background: 'linear-gradient(45deg, #626263, #010124)' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0"></div>

        <div className="container mx-auto h-full flex flex-col justify-center items-center text-center text-white relative">
          <br /><br />
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl mb-12">Din digitale leverandør</h1>
          <div className="flex space-x-4 mb-12">
            <h1 className="text-2xl md:text-4xl lg:text-4xl xl:text-6xl text-orange-700">Nettsider</h1>
            <h1 className="text-2xl md:text-4xl lg:text-4xl xl:text-6xl text-green-700">Hosting</h1>
            <h1 className="text-2xl md:text-4xl lg:text-4xl xl:text-6xl text-pink-700">AI-Tjenester</h1>
          </div>
          {isMobile ? (
            <div className="flex mb-12">
              <p ref={textRef} className="text-lg md:text-2xl lg:text-2xl xl:text-2xl"></p>
            </div>
          ) : (
            <div className="flex mb-12">
              <p className="text-lg md:text-2xl lg:text-2xl xl:text-2xl">C:\Users\WebRodent&gt;</p>
              <p ref={textRef} className="text-lg md:text-2xl lg:text-2xl xl:text-3xl"></p>
              <span className="text-lg md:text-2xl lg:text-2xl xl:text-2xl inline-block blink-cursor">{isMobile ? "" : "_"}</span>
            </div>
          )}
          
          <ArrowButton />
        </div>
      
    </section>
  );
}
