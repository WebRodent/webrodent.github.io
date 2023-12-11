import Image from 'next/image'
import '../../app/globals.css'
import useMobileDetect from '../../lib/mobileDetect';
import useTextAnimation from '../../lib/textAnimation';
import ContentCard from '../../lib/components/content';
import {MainFooter, SocialFooter} from '../../lib/components/footers';

export default function ModernCustomizedSolutions() {
    const isMobile = useMobileDetect();
    const textRef = useTextAnimation(isMobile, "Your ideas, made into reality");

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

        {/* Content container */}
        <div className="w-full max-w-5xl flex flex-col gap-12 py-6">
        <ContentCard
            title="Cutting-Edge Web Solutions"
            contents={[
                "At WebRodent, we excel in crafting dynamic, robust web solutions that are at the forefront of digital innovation. Our skilled team specializes in developing high-performance websites and web applications that are not only visually appealing but also functionally rich. We understand the nuances of creating user-centric designs, ensuring your web presence resonates with your target audience.",
                "In the fast-paced world of software development, efficiency and agility are key. Our DevOps expertise ensures seamless integration and continuous delivery, helping you accelerate your software development lifecycle. We implement the best practices in automation, monitoring, and collaboration, reducing time-to-market and enhancing software quality.",
                "Our team at WebRodent is adept at integrating complex systems to create cohesive, efficient digital ecosystems for your business. By bridging the gaps between disparate systems, we facilitate smoother workflows, improved data accessibility, and enhanced overall operational efficiency.",
                "Embrace the power of cloud computing with WebRodent's cloud hosting solutions. We provide scalable, secure, and reliable hosting services, ensuring your web applications perform optimally. Our cloud solutions are tailored to meet your specific business needs, offering flexibility and cost-effectiveness.",
            ]}
        />
        </div>

        <MainFooter />
        <SocialFooter />
        </main>
    )
}