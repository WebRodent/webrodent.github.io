import useMobileDetect from '../lib/mobileDetect';

export default function ServicesSection() {
  const isMobile = useMobileDetect();

  return (
    <section id="services-section" className="py-16 bg-[#202121]">
      {isMobile ? (
        <div className="container mx-auto px-4">

        {/* Tjenestetekst */}
        <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-6xl font-bold text-white text-center mb-12">
          Våre tjenester
        </h1>

        {/* Beskrivelseskort */}
        <div className="flex flex-col items-center gap-6">

          {/* Kort 1 */}
          <div className="bg-[#2a2a2a] text-white text-center rounded-lg shadow-lg overflow-hidden w-full">
            <div className="p-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-12 mb-4 text-orange-700 mx-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
              </svg>
              <h2 className="text-2xl font-semibold mb-4 text-orange-700 text-center">Skreddersydd nettside for din virksomhet</h2>
              <p className="text-lg mb-4">
                Hos oss får du mer enn bare en nettside – du får en løsning som er skreddersydd for dine behov. Enten du trenger en enkel one-pager, en mer omfattende fler-siders nettside, eller en fullstendig skreddersydd løsning, leverer vi kvalitet fra start til slutt.
              </p>
              <h3 className="text-xl font-semibold mb-2 text-white">Hva gjør oss unike?</h3>
              <p className="text-lg mb-4">
                Vi tror på åpenhet og selvstendighet for våre kunder. Derfor leverer vi ikke bare en ferdig nettside, men også all kode som ligger bak. Vi viser deg hvordan du kan videreutvikle og vedlikeholde nettsiden din selv, slik at du slipper å være avhengig av dyre oppdateringer og vedlikeholdsavtaler. Hos oss er du sjefen over din egen nettside.
              </p>
              <h3 className="text-xl font-semibold mb-2 text-white">Moderne teknologi</h3>
              <p className="text-lg mb-4">
                Vi benytter oss av moderne og interaktive rammeverk som sikrer at nettsiden din er rask, responsiv og fremtidsrettet. Dette gir deg en fleksibel og dynamisk plattform som kan tilpasses og vokse i takt med dine behov.
              </p>
              <h3 className="text-xl font-semibold mb-2 text-white">Vårt løfte</h3>
              <p className="text-lg mb-4">
                Vi er ikke ute etter å binde deg opp i dyre avtaler over tid. Vårt mål er å gi deg verktøyene du trenger for å stå på egne ben, samtidig som vi leverer en profesjonell og funksjonell nettside du kan være stolt av.
              </p>
            </div>
          </div>

          {/* Kort 2 */}
          <div className="bg-[#2a2a2a] text-white text-center rounded-lg shadow-lg overflow-hidden w-full hover:shadow-2xl transition-shadow duration-300">
            <div className="p-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-12 mb-4 text-green-700 mx-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
              </svg>
              <h2 className="text-2xl font-semibold mb-4 text-green-700 text-center">Hostingløsninger tilpasset dine behov</h2>
              <p className="text-lg mb-4">
                Når du har fått din nye nettside, er det viktig å velge riktig hostingløsning som møter dine behov. Hos oss er vi ikke bare opptatt av å levere en fantastisk nettside, men vi ønsker også å sikre at den fungerer optimalt etter lansering.
              </p>
              <h3 className="text-xl font-semibold mb-2 text-white">Hva kan vi hjelpe deg med?</h3>
              <p className="text-lg mb-4">
                Vi tilbyr omfattende hjelp med å finne den beste hostingløsningen for din nettside. Enten du er ute etter en robust løsning med høy oppetid og god støtte, eller en mer kostnadseffektiv løsning, kan vi veilede deg til den rette valget.
              </p>
              <h3 className="text-xl font-semibold mb-2 text-white">Gratis hosting med GitHub Pages</h3>
              <p className="text-lg mb-4">
                Vi er glade for å kunne tilby en kostnadseffektiv løsning for hosting – GitHub Pages. Denne plattformen gir deg muligheten til å hoste din nettside helt gratis, perfekt for personlig bruk eller mindre prosjekter. GitHub Pages er ideell for statiske nettsider og gir deg en enkel måte å publisere nettsiden din på nettet uten ekstra kostnader.
              </p>
              <h3 className="text-xl font-semibold mb-2 text-white">Hvordan fungerer det?</h3>
              <p className="text-lg">
                Vårt team vil hjelpe deg med å sette opp og konfigurere GitHub Pages for din nettside, slik at du får en profesjonell webtilstedeværelse uten å bruke penger på hosting. Vi gir deg også veiledning om hvordan du kan administrere og oppdatere nettsiden din direkte fra GitHub, noe som gir deg full kontroll over innholdet ditt.
              </p>
            </div>
          </div>

          {/* Kort 3 */}
          <div className="bg-[#2a2a2a] text-white text-center rounded-lg shadow-lg overflow-hidden w-full hover:shadow-2xl transition-shadow duration-300">
            <div className="p-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-12 mb-4 text-pink-700 mx-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6v11.25A2.25 2.25 0 0 0 6.75 19.5z" />
              </svg>
              <h2 className="text-2xl font-semibold mb-4 text-pink-700 text-center">Enkel tilgang til din nettside</h2>
              <p className="text-lg mb-4">
                Vi forstår viktigheten av enkel tilgang til din nettside. Uansett hvilken type løsning du velger, ønsker vi å sikre at du har en brukervennlig plattform som gjør det lett å oppdatere og administrere innholdet ditt.
              </p>
              <h3 className="text-xl font-semibold mb-2 text-white">Brukervennlige verktøy</h3>
              <p className="text-lg mb-4">
                Vi benytter oss av verktøy og rammeverk som gir deg en enkel måte å håndtere innholdet på, uansett hvor teknisk erfaring du måtte ha. Fra enkle tekstredaktører til mer avanserte verktøy, vi sikrer at du har alt du trenger for å holde nettsiden din oppdatert.
              </p>
              <h3 className="text-xl font-semibold mb-2 text-white">Fremtidssikring</h3>
              <p className="text-lg mb-4">
                Vi er opptatt av å bygge løsninger som ikke bare fungerer i dag, men som også er tilpasset fremtidige behov. Ved å bruke moderne teknologier og beste praksis sikrer vi at nettsiden din er godt rustet for fremtidige oppdateringer og krav.
              </p>
              <h3 className="text-xl font-semibold mb-2 text-white">Hvordan kan vi hjelpe?</h3>
              <p className="text-lg">
                Uansett om du trenger hjelp med å sette opp din nettside for enkel administrasjon eller ønsker råd om de beste verktøyene for dine behov, er vårt team her for å gi deg den støtten du trenger.
              </p>
            </div>
          </div>

        </div>
      </div>
      ) : (
        <div className="container mx-auto px-4">

        {/* Tjenestetekst */}
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-12">
          Våre tjenester
        </h1>

        {/* Beskrivelseskort */}
        <div className="flex flex-wrap justify-center gap-6">

          {/* Kort 1 */}
          <div className="bg-[#2a2a2a] text-white text-center rounded-lg shadow-lg overflow-hidden flex-1 w-1/3">
            <div className="p-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-12 mb-4 text-orange-700 mx-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
              </svg>
              <h2 className="text-2xl font-semibold mb-4 text-orange-700 text-center">Skreddersydd nettside for din virksomhet</h2>
              <p className="text-lg mb-4">
                Hos oss får du mer enn bare en nettside – du får en løsning som er skreddersydd for dine behov. Enten du trenger en enkel one-pager, en mer omfattende fler-siders nettside, eller en fullstendig skreddersydd løsning, leverer vi kvalitet fra start til slutt.
              </p>
              <h3 className="text-xl font-semibold mb-2 text-white">Hva gjør oss unike?</h3>
              <p className="text-lg mb-4">
                Vi tror på åpenhet og selvstendighet for våre kunder. Derfor leverer vi ikke bare en ferdig nettside, men også all kode som ligger bak. Vi viser deg hvordan du kan videreutvikle og vedlikeholde nettsiden din selv, slik at du slipper å være avhengig av dyre oppdateringer og vedlikeholdsavtaler. Hos oss er du sjefen over din egen nettside.
              </p>
              <h3 className="text-xl font-semibold mb-2 text-white">Moderne teknologi</h3>
              <p className="text-lg mb-4">
                Vi benytter oss av moderne og interaktive rammeverk som sikrer at nettsiden din er rask, responsiv og fremtidsrettet. Dette gir deg en fleksibel og dynamisk plattform som kan tilpasses og vokse i takt med dine behov.
              </p>
              <h3 className="text-xl font-semibold mb-2 text-white">Vårt løfte</h3>
              <p className="text-lg mb-4">
                Vi er ikke ute etter å binde deg opp i dyre avtaler over tid. Vårt mål er å gi deg verktøyene du trenger for å stå på egne ben, samtidig som vi leverer en profesjonell og funksjonell nettside du kan være stolt av.
              </p>
            </div>
          </div>

          {/* Kort 2 */}
          <div className="bg-[#2a2a2a] text-white text-center rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex-1 w-1/3">
            <div className="p-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-12 mb-4 text-green-700 mx-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
              </svg>
              <h2 className="text-2xl font-semibold mb-4 text-green-700 text-center">Hostingløsninger tilpasset dine behov</h2>
              <p className="text-lg mb-4">
                Når du har fått din nye nettside, er det viktig å velge riktig hostingløsning som møter dine behov. Hos oss er vi ikke bare opptatt av å levere en fantastisk nettside, men vi ønsker også å sikre at den fungerer optimalt etter lansering.
              </p>
              <h3 className="text-xl font-semibold mb-2 text-white">Hva kan vi hjelpe deg med?</h3>
              <p className="text-lg mb-4">
                Vi tilbyr omfattende hjelp med å finne den beste hostingløsningen for din nettside. Enten du er ute etter en robust løsning med høy oppetid og god støtte, eller en mer kostnadseffektiv løsning, kan vi veilede deg til den rette valget.
              </p>
              <h3 className="text-xl font-semibold mb-2 text-white">Gratis hosting med GitHub Pages</h3>
              <p className="text-lg mb-4">
                Vi er glade for å kunne tilby en kostnadseffektiv løsning for hosting – GitHub Pages. Denne plattformen gir deg muligheten til å hoste din nettside helt gratis, perfekt for personlig bruk eller mindre prosjekter. GitHub Pages er ideell for statiske nettsider og gir deg en enkel måte å publisere nettsiden din på nettet uten ekstra kostnader.
              </p>
              <h3 className="text-xl font-semibold mb-2 text-white">Hvordan fungerer det?</h3>
              <p className="text-lg">
                Vårt team vil hjelpe deg med å sette opp og konfigurere GitHub Pages for din nettside, slik at du får en profesjonell webtilstedeværelse uten å bruke penger på hosting. Vi gir deg også veiledning om hvordan du kan administrere og oppdatere nettsiden din direkte fra GitHub, noe som gir deg full kontroll over innholdet ditt.
              </p>
            </div>
          </div>

          {/* Kort 3 */}
          <div className="bg-[#2a2a2a] text-white text-center rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex-1 w-1/3">
            <div className="p-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-12 mb-4 text-pink-700 mx-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
              </svg>
              <h2 className="text-2xl font-semibold mb-4 text-pink-700 text-center">Chip - Din Smarte AI-Chatbot for Slack</h2>
              <p className="text-lg mb-4">
                Chip er vår avanserte AI-Chatbot designet for å transformere hvordan teamet ditt jobber og samarbeider i Slack. Den er mer enn bare en vanlig chatbot; Chip er en intelligent assistent som kan tilpasses for å møte dine spesifikke behov og preferanser.
              </p>
              <h3 className="text-xl font-semibold mb-2 text-white">Tilpasset AI for Effektiv Samhandling</h3>
              <p className="text-lg mb-4">
                Chip er skreddersydd for å integreres sømløst i Slack, noe som gjør den til et kraftfullt tillegg til din eksisterende kommunikasjonsplattform. Den håndterer alt fra automatiserte svar på ofte stilte spørsmål til oppgavehåndtering og gir teamet ditt viktig informasjon på en enkel måte.
              </p>
              <h3 className="text-xl font-semibold mb-2 text-white">Hvordan Fungerer Integrasjonen?</h3>
              <p className="text-lg mb-4">
                Vi tilbyr en enkel og effektiv integrasjonsprosess for å få Chip oppe og gå i Slack. Vårt team vil veilede deg gjennom hver steg, fra konfigurering til tilpasning, for å sikre at Chip fungerer perfekt med din eksisterende arbeidsflyt.
              </p>
              <h3 className="text-xl font-semibold mb-2 text-white">Din AI-Chatbot Partner</h3>
              <p className="text-lg">
                Med Chip får du en AI-Chatbot som ikke bare er et nyttig verktøy, men en intelligent samarbeidspartner som hjelper deg med å oppnå mer med mindre innsats. La oss hjelpe deg med å integrere Chip i Slack og opplev hvordan moderne teknologi kan forbedre din arbeidsdag.
              </p>
            </div>
          </div>

        </div>
      </div>
      )}
    
    </section>
  );
}
