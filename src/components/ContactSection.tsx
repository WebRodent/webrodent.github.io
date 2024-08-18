export default function ContactSection() {
    return (
    <section id="contact-section" className="py-16 bg-[#202121]">
      <div className="container mx-auto px-4">

        {/* Tjenestetekst */}
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-12">
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
              <h2 className="text-2xl font-semibold mb-4 text-center">mats@webrodent.com</h2>
              <h2 className="text-2xl font-semibold mb-4 text-center">øyvind@webrodent.com</h2>
              <h2 className="text-2xl font-semibold mb-4 text-center">ruben@webrodent.com</h2>
              <br />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-12 mb-4 text-white mx-auto">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <h2 className="text-2xl font-semibold mb-4 text-center">+48 926 72 648</h2>
            </div>
          </div>

        </div>
      </div>
    </section>
    );
}