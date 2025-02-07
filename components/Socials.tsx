'use client'

interface SocialMetadata {
  title: string
  description: string
  images: {
    url: string
    width: number
    height: number
    alt: string
  }[]
  url: string
  siteName: string
  locale: string
  keywords: string[]
  themeColor: string
}

const metadata: SocialMetadata = {
  title: 'WebRodent - Din Digitale Fremtid',
  description: 'Hei, er dette ditt rede? 🐀',
  images: [
    {
      url: '/og/main.png', // Primary OG image
      width: 1200,
      height: 630,
      alt: 'WebRodent - Din Digitale Partner',
    },
    {
      url: '/og/square.png', // For platforms that prefer square images
      width: 1080,
      height: 1080,
      alt: 'WebRodent Logo',
    },
  ],
  url: 'https://webrodent.com',
  siteName: 'WebRodent',
  locale: 'no_NO',
  keywords: [
    'webutvikling',
    'digital transformasjon',
    'teknisk rådgivning',
    'webdesign',
    'norsk teknologiselskap',
  ],
  themeColor: '#0A051E', // Matches your navy-900 color
}

export default function Socials() {
  const { title, description, images, url, siteName, locale, keywords, themeColor } = metadata

  return (
    <>
      {/* Essential Meta Tags */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="theme-color" content={themeColor} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      {images.map((image, index) => (
        <meta key={index} property="og:image" content={`${url}${image.url}`} />
      ))}
      <meta property="og:image:width" content={images[0].width.toString()} />
      <meta property="og:image:height" content={images[0].height.toString()} />
      <meta property="og:image:alt" content={images[0].alt} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}${images[0].url}`} />
      <meta name="twitter:image:alt" content={images[0].alt} />

      {/* Schema.org markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": siteName,
          "url": url,
          "logo": `${url}/assets/wr_logo.png`,
          "description": description,
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": ["Norwegian", "English"]
          }
        })}
      </script>
    </>
  )
}