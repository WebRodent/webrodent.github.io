// components/SocialMetaTags.js
const SocialMetaTags = () => {
  const title = "WebRodent";
  const description = "Webrodent tilbyr rimelige skyløsninger som gir deg full eierskap over dine digitale ressurser. I motsetning til andre aktører som kan beholde kontroll over systemene de drifter for deg, sørger vi for at du har fleksibiliteten til å ta over eller skalere etter eget ønske. Vi støtter bedrifter som ønsker en rask oppstart og kontroll på egne løsninger, samtidig som vi gir deg kostnadseffektive og skalerbare tjenester for fremtiden.";
  const url = "https://webrodent.com";
  const imageUrl = "https://webrodent.com/assets/head_tag_image.png";
  const siteName = "WebRodent er din agile partner for digitale løsninger!";

  return (
    <>
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </>
  );
};

export default SocialMetaTags;
  