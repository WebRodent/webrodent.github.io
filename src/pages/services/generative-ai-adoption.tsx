import Image from 'next/image'
import '../../app/globals.css'
import ContentRow from '../../app/contents'; // Adjust the path as needed
import useMobileDetect from '../../lib/mobileDetect';
import useTextAnimation from '../../lib/textAnimation';

export default function GenerativeAIAdoption() {
    const isMobile = useMobileDetect();
    const textRef = useTextAnimation(isMobile);

    const contents = [
        {
          title: 'The Rise of Generative AI',
          article: 'Generative AI is changing the landscape of tech...',
          imagePath: '/images/generative_ai_illustration.svg',
        },
        {
          title: 'Integrating AI into Business',
          article: 'When introducing AI into your business, there are many factors to consider...',
          imagePath: null, // No image for this content row
        },
        // Add more content objects as needed
      ];

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
        {contents.map((content, index) => (
          <ContentRow
            key={index}
            title={content.title}
            article={content.article}
            imagePath={content.imagePath}
          />
        ))}
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
