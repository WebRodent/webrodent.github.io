import useMobileDetect from '../lib/mobileDetect';

export default function ContactSection() {
  const isMobile = useMobileDetect();

    return (
    <section id="contact-section" className="py-16 bg-[#202121]">
      <div className="container mx-auto px-4">

        {/* Tjenestetekst */}
        <h1 className={isMobile ? "text-3xl md:text-6xl font-bold text-white text-center mb-12" : "text-4xl md:text-6xl font-bold text-white text-center mb-12"}>
          Kontakt oss
        </h1>

        {/* Beskrivelseskort */}
        <div className="flex flex-wrap justify-center gap-6">

          {/* Kort 1 */}
          <div className="text-white text-center overflow-hidden flex-1 w-1/3">
            <div className="p-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-12 mb-4 text-white mx-auto">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <h2 className={isMobile ? "text-lg font-semibold mb-4 text-center" : "text-2xl font-semibold mb-4 text-center"}>mats@webrodent.com</h2>
              <h2 className={isMobile ? "text-lg font-semibold mb-4 text-center" : "text-2xl font-semibold mb-4 text-center"}>øyvind@webrodent.com</h2>
              <h2 className={isMobile ? "text-lg font-semibold mb-4 text-center" : "text-2xl font-semibold mb-4 text-center"}>ruben@webrodent.com</h2>
              <br />
            </div>
          </div>

        </div>
      </div>
    </section>
    );
}