import { useRouter } from 'next/navigation';
import ArrowButton from './ArrowButton';
import useMobileDetect from '../lib/mobileDetect';
import useTextAnimation from '../lib/textAnimation';

export default function HeroSection() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/login'); // Navigate to the login page
  };

  const isMobile = useMobileDetect();
  const textRef = useTextAnimation(isMobile, " Ta din plass i det digitale domenet idag!");

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
        <h1 className="text-8xl mb-12">Din digitale leverandør</h1>
        <div className="flex space-x-4 mb-12">
          <h1 className="text-6xl text-orange-700">Nettsider</h1>
          <h1 className="text-6xl text-green-700">Hosting</h1>
          <h1 className="text-6xl text-pink-700">AI-Tjenester</h1>
        </div>
        <div className="flex mb-12">
          <p className="text-3xl">C:\Users\WebRodent&gt;</p>
          <p ref={textRef} className="text-3xl"></p>
          <span className="text-3xl inline-block blink-cursor">_</span>
        </div>
        <ArrowButton />
      </div>
    </section>
  );
}
