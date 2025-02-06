import React from 'react'
import Image from 'next/image'

interface ContactLink {
  icon: React.ReactNode
  text: string
  href: string
}

const contactLinks: ContactLink[] = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    text: "post@webrodent.com",
    href: "mailto:post@webrodent.com"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852v2.743c0 .267.18.578.688.481C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
    text: "GitHub",
    href: "https://github.com/webrodent"
  }
]

function ContactCard({ link }: { link: ContactLink }) {
  return (
    <a 
      href={link.href}
      target={link.href.startsWith('http') ? '_blank' : undefined}
      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="group flex items-center p-4 bg-navy-800/50 rounded-lg hover:bg-navy-800 transition duration-300"
    >
      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-400 flex items-center justify-center mr-4">
        {link.icon}
      </div>
      <span className="text-lg group-hover:text-fuchsia-400 transition">{link.text}</span>
    </a>
  )
}

export default function ContactSection() {
  return (
    <section id="kontakt" className="py-20 px-4 md:px-8 lg:px-16 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Kontakt Oss</h2>
              <p className="text-xl text-gray-300 mb-8">
                Ta kontakt for en uforpliktende prat
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Vi er her for å hjelpe deg med å ta din bedrift til neste nivå. 
                Send oss en melding, så tar vi kontakt!
              </p>
            </div>

            <div className="space-y-4">
              {contactLinks.map((link, index) => (
                <ContactCard key={index} link={link} />
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent z-10" />
              <Image
                src="/assets/rats/rat_purple_wave.png"
                alt="Contact Webrodent"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full blur-2xl opacity-20" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full blur-2xl opacity-20" />
          </div>
        </div>
      </div>
    </section>
  )
} 