import '../../app/globals.css'
import useMobileDetect from '../../lib/mobileDetect';
import useTextAnimation from '../../lib/textAnimation';
import {ContentCard, LinkedList, } from '../../components/content';
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
        
        {/* Content container */}
        <div className="w-full max-w-5xl flex flex-col gap-12 py-6">
        <ContentCard
            title="Meet the Team"
            contents={[
                "Meet our team - a dynamic ensemble of passionate technologists and creative minds. United by our drive to redefine the boundaries of what technology can achieve, we bring a rich tapestry of backgrounds and expertise to the table. Our services span from the intricate realms of AI integration to the art of web development. At our core, we are dedicated to pioneering solutions that are not just at the forefront of innovation but also grounded in ethical practices. We share a collective dream: to harmonize technology and creativity, crafting a future where both thrive in unison for a better world.",
            ]}
        />
        <ContentCard
            title="Our Values"
            contents={[
                "At WebRodent, our essence is rooted in the belief that technology is more than a tool; it's a catalyst for positive transformation. Our commitment to this ethos shapes our journey towards digital excellence.",
                "We cherish the dance between technology and creativity. Fostering a culture of innovation, we empower our team to explore the uncharted, to break new ground in what technology can accomplish.",
                "We hold a deep conviction that technology, while powerful, must be wielded with a sense of responsibility. Our commitment is to ensure our solutions are not just innovative but also ethically responsible.",
                "Our strength lies in our diversity. A workplace that celebrates different perspectives and creative approaches, where collaboration and individuality go hand in hand, is what we strive for. We cherish each unique contribution, knowing it's these differences that make us stronger together.",
            ]}
        />
        <LinkedList
          title="Custom GPT Models we value"
          items={[
            { name: "Web Design Wizard", link: "https://chat.openai.com/g/g-WgwwZSfwE-web-design-wizard" },
            { name: "FastAPI Engineering Advisor", link: "https://chat.openai.com/g/g-WfcPON8Pb-fastapi-engineering-advisor" },
            { name: "Web Rodent Guide", link: "https://chat.openai.com/g/g-GGplzI5ze-web-rodent-guide" },
            { name: "Spirit Rodent Avatar Creator", link: "https://chat.openai.com/g/g-3cOYDFDED-spirit-rodent-avatar-creator" }
          ]}
        />

        </div>

        <MainFooter />
        <SocialFooter />
        </main>
    )
}