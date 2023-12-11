import Image from 'next/image'
import '../../app/globals.css'

export default function GenerativeAIAdoption() {
    return (
        <main className="flex flex-col items-center justify-top min-h-screen p-6">
        <header className="w-full max-w-5xl px-6 py-4 text-center">
            <p className="text-blue-400 bg-gradient-to-b from-zinc-200 to-transparent border-b border-gray-300 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 text-center">
            &gt; Meet the Team
            </p>
        </header>

        
        
        
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