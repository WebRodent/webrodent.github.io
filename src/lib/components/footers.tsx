import Image from 'next/image'
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

