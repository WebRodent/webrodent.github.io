// components/SocialMetaTags.js
const SocialMetaTags = () => {
    return (
      <>
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Webrodent" />
        <meta property="og:description" content="Webrodent provides high-quality, affordable cloud hosting solutions for developers and businesses looking to scale their operations. Our services are designed to simplify cloud adoption and help you achieve your goals efficiently." />
        <meta property="og:url" content="https://webrodent.com" />
        <meta property="og:image" content="https://webrodent.com/assets/head_tag_image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Webrodent" />
  
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Webrodent" />
        <meta name="twitter:description" content="Webrodent provides high-quality, affordable cloud hosting solutions for developers and businesses looking to scale their operations. Our services are designed to simplify cloud adoption and help you achieve your goals efficiently." />
        <meta name="twitter:image" content="https://webrodent.com/assets/head_tag_image.png" />
      </>
    );
  };
  
  export default SocialMetaTags;
  