import Image from 'next/image'
import '../../app/globals.css'
import useMobileDetect from '../../lib/mobileDetect';
import useTextAnimation from '../../lib/textAnimation';
  
type ContentCardProps = {
    title: string;
    content: string;
  };
  
    const ContentCard: React.FC<ContentCardProps> = ({ title, content }) => (
        <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-start content-card bg-gray shadow-md p-6 rounded-lg">
            <div className="flex-1">
                <h2 className="text-3xl font-bold text-white-500">{title}</h2>
                <p className="mt-4 mb-6 text-blue-200 text-lg leading-relaxed">{content}</p>
            </div>
        </div>
);

export default function GenerativeAIAdoption() {
    const isMobile = useMobileDetect();
    const textRef = useTextAnimation(isMobile);
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
            title="The Rise of Generative AI"
            content="Generative AI is revolutionizing technology, enabling machines to create new, original content from existing data. From producing realistic images and videos to generating human-like text, these AI models are pushing the boundaries of creativity and innovation. In this exploration, we delve into how Generative AI is being integrated into various industries, reshaping the future of automation and creativity."
        />
        <ContentCard
            title="Integrating AI into Business"
            content="Incorporating AI into your business strategy is not just about the technology: it's about reimagining processes and customer experiences. This article guides you through the essential steps and considerations for a successful AI integration, focusing on scalable, modular solutions that grow with your business needs."
        />
        <ContentCard
            title="Modular Architecture in AI Systems"
            content="Embracing a modular architecture in AI systems is crucial for scalability and flexibility. This article discusses how modular design allows for easier updates, maintenance, and customization, ensuring your AI solutions remain cutting-edge and adaptable to ever-evolving business needs."
        />
        <ContentCard
            title="AI-Driven Document Generation"
            content="Discover how AI is transforming document generation and approval processes. From drafting legal documents to creating detailed financial reports, AI-driven document generation accelerates workflows, minimizes errors, and offers new levels of efficiency and precision."
        />
        <ContentCard
            title="Fostering a Culture of Innovation with AI"
            content="Building a culture of innovation is essential in the AI era. Learn how encouraging creativity, continuous learning, and knowledge sharing within your teams can lead to groundbreaking AI solutions and a sustainable competitive edge in the marketplace."
        />
        </div>

        <footer className="flex flex-col items-center justify-bottom w-full max-w-5xl px-6 py-4 text-center mt-auto">
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
                className="relative z-10 dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            />
            </a>
        </footer>
        </main>
    )
}
