import Image from 'next/image'
import '../../app/globals.css'
import useMobileDetect from '../../lib/mobileDetect';
import useTextAnimation from '../../lib/textAnimation';
import {MainFooter, SocialFooter} from '../../components/footers';

export default function GenerativeAIAdoption() {
    const isMobile = useMobileDetect();
    const textRef = useTextAnimation(isMobile, "Meet the Team!");

    return (
        <main className="flex flex-col items-center justify-top min-h-screen p-6">
        {!isMobile && (
          <header className="w-1/3 max-w-5xl px-6 py-4 text-left">
            <div className="flex">
              <p className="text-blue-400 opacity-40">C:\Users\WebRodent&gt;</p>
              <p ref={textRef} className="text-blue-400"></p>
            </div>
          </header>
        )}

        <MainFooter />
        <SocialFooter />
        </main>
    )
}