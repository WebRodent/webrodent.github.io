import Image from 'next/image'
import '../../app/globals.css'
import useMobileDetect from '../../lib/mobileDetect';
import useTextAnimation from '../../lib/textAnimation';
import ContentCard from '../../components/content';
import {MainFooter, SocialFooter} from '../../components/footers';

export default function GenerativeAIAdoption() {
    const isMobile = useMobileDetect();
    const textRef = useTextAnimation(isMobile, "Join us in the Generative AI revolution!");
    return (
        <main className="flex flex-col items-center justify-top min-h-screen p-6">
        {!isMobile && (
          <header className="w-1/3 max-w-5xl px-6 py-4 text-left">
            <div className="flex">
              <p className="text-blue-400 opacity-40">C:\Users\WebRodent\AI-Adoption&gt;</p>
              <p ref={textRef} className="text-blue-400"></p>
            </div>
          </header>
        )}

        {/* Content container */}
        <div className="w-full max-w-5xl flex flex-col gap-12 py-6">
        <ContentCard
            title="Generative AI in Business"
            //content="Generative AI is revolutionizing technology, enabling machines to create new, original content from existing data. From producing realistic images and videos to generating human-like text, these AI models are pushing the boundaries of creativity and innovation. In this exploration, we delve into how Generative AI is being integrated into various industries, reshaping the future of automation and creativity."
            contents={[
                "The advent of Generative AI is a game-changer in the tech landscape, transforming how businesses operate and innovate. This cutting-edge technology enables machines to create new, original content from existing data, opening up unprecedented opportunities for efficiency and creativity. From producing realistic images and videos to generating human-like text, Generative AI is not just a tool but a revolutionary partner in creative processes.",
                "Incorporating AI into business strategies goes beyond mere technological integration; it's about reimagining processes and reshaping customer experiences. The key lies in understanding AI's potential to revolutionize various industry facets. For instance, AI-driven document generation is streamlining complex workflows in sectors like law and finance, minimizing errors, and boosting efficiency. By adopting a modular architecture, businesses can ensure their AI solutions are not only cutting-edge but also adaptable to evolving needs.",
                "However, the integration of AI into business is not without its challenges. It requires a thoughtful approach, considering factors like scalability, security, and ethical implications. Businesses must navigate these considerations to harness AI's full potential effectively."

            ]}
        />
        <ContentCard
            title="Pioneering Efficiency with WebRodent: Your AI Transformation Ally"
            //content="Incorporating AI into your business strategy is not just about the technology: it's about reimagining processes and customer experiences. This article guides you through the essential steps and considerations for a successful AI integration, focusing on scalable, modular solutions that grow with your business needs."
            contents={[
                "In the rapidly evolving landscape of artificial intelligence, WebRodent stands as a beacon of innovation and efficiency. Our ethos revolves around not just adapting to the AI revolution but leading it. We offer more than just AI solutions; we provide a partnership that empowers businesses to navigate and excel in the digital era with confidence.",
                "At WebRodent, we recognize that each business has unique challenges and goals. Our approach is to provide modular and scalable AI architectures, meticulously crafted to align with specific business objectives. This customization ensures that our solutions are not just effective but also evolve alongside your business, guaranteeing longevity and relevance in a constantly changing digital landscape.",
                "The journey towards AI integration is more than a technological upgrade—it's a cultural shift. WebRodent champions this transition by nurturing a culture of innovation within our partner organizations. We believe in the symbiotic relationship between creativity and technology. By encouraging continuous learning and knowledge sharing, we help teams unlock their creative potential, leading to innovative solutions that are both effective and ethically grounded.",
                "Our role extends beyond being a service provider; we are collaborators in your journey towards digital transformation. WebRodent’s team of experts works closely with our partners, ensuring seamless integration of AI into existing workflows. We prioritize understanding your business inside and out, enabling us to offer insights and solutions that are not just technologically advanced but also strategically sound.",
                "In partnering with WebRodent, businesses gain more than just an AI solution; they gain a roadmap to the future. Our commitment to staying ahead of technological trends means our partners are always equipped with the latest and most efficient AI tools. This forward-thinking approach ensures that businesses remain competitive and resilient, ready to embrace the opportunities of tomorrow.",
            ]}    
        />
        </div>

        <MainFooter />
        <SocialFooter />
        </main>
    )
}
