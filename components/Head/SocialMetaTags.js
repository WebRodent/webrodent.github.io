// components/SocialMetaTags.js
const SocialMetaTags = () => {
    return (
      <>
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Webrodent" />
        <meta property="og:description" content="Affordable cloud hosting solutions by Webrodent." />
        <meta property="og:url" content="https://webrodent.com" />
        <meta property="og:image" content="https://webrodent.com/assets/Rodent_Web_logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Webrodent" />
  
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Webrodent" />
        <meta name="twitter:description" content="Affordable cloud hosting solutions by Webrodent." />
        <meta name="twitter:image" content="https://webrodent.com/assets/Rodent_Web_logo.png" />
      </>
    );
  };
  
  export default SocialMetaTags;
  