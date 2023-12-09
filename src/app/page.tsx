import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      <header className="w-full max-w-5xl px-6 py-4 text-center">
        <p className="text-blue-400 bg-gradient-to-b from-zinc-200 to-transparent border-b border-gray-300 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 text-center">
          &gt; Welcome to the Web Rodents Nest
        </p>
      </header>

      <div className="z-10 flex flex-col items-center justify-center flex-grow w-full max-w-5xl px-6">
        <div className="relative flex justify-center items-center w-full">
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="h-[300px] w-[680px] rounded-full bg-gradient-radial from-white to-transparent blur-2xl dark:from-transparent dark:to-blue-700 dark:opacity-10 z-[-1]" />
            <div className="h-[180px] w-[440px] bg-gradient-conic from-sky-200 via-blue-200 to-transparent blur-2xl dark:from-sky-900 dark:via-[#0141ff] dark:opacity-40 z-[-1]" />
          </div>
          <Image
            src="/webrodent_logo_3.svg" // replace with your logo image path
            alt="WebRodent Logo"
            width={680}
            height={537}
            priority
            className="relative z-10 dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          />
        </div>
      </div>

      <nav className="w-full max-w-5xl px-6 py-4 mb-32 grid grid-cols-1 gap-4 text-center lg:grid-cols-4 lg:mb-0">
        <a
          href="/services/generative-ai-adoption"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Generative AI Adoption Plans</h2>
        </a>
        <a
          href="/services/modern-customized-solutions"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Modern Customized Solutions</h2>
        </a>
        <a
          href="/services/team-training"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Team Training</h2>
        </a>
        <a
          href="/services/meet-the-team"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Meet the Rodents</h2>
        </a>
      </nav>

      <footer className="w-full max-w-5xl px-6 py-4 text-center">
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
          />
        </a>
      </footer>
    </main>
  )
}
