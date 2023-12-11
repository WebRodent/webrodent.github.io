import Image from 'next/image'

export function MainFooter() {
    return (
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
                className="relative z-10 drop-shadow-[0_0_0.3rem_#ffffff70] invert"
            />
            </a>
        </footer>
    )
}

export function SocialFooter() {
    return (
        <footer className="flex items-center justify-center w-full max-w-5xl px-6 py-4 mb-32 grid grid-cols-1 gap-4 text-center lg:grid-cols- lg:mb-0">
            <div className="flex items-center justify-center gap-2">
                <a
                href="https://github.com/WebRodent"
                className="flex items-center justify-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
                >
                <Image
                    src="/github.svg"
                    alt="GitHub"
                    width={50}
                    height={12}
                    priority
                    className="relative z-10 drop-shadow-[0_0_0.3rem_#ffffff70] invert"
                />
                </a>
                <a
                href="https://www.linkedin.com/company/webrodent"
                className="flex items-center justify-center gap-3"
                target="_blank"
                rel="noopener noreferrer"
                >
                <Image
                    src="/linkedin.svg"
                    alt="LinkedIn"
                    width={50}
                    height={12}
                    priority
                    className="relative z-10 drop-shadow-[0_0_0.3rem_#ffffff70] invert"
                />
                </a>
            </div>
        </footer>
    )
}
