import Image from 'next/image'
import '../../app/globals.css'
import useMobileDetect from '../../lib/mobileDetect';
import useTextAnimation from '../../lib/textAnimation';
import {ContentCard, TableOfContents, ContentCardImage, CannonPoints, ComparisonCard} from '../../components/content';
import {MainFooter, SocialFooter} from '../../components/footers';
import { text } from 'stream/consumers';


export default function DevHandbook() {
    const isMobile = useMobileDetect();
    const textRef = useTextAnimation(isMobile, "WebRodent Håndboken for utviklere");

    return (
        <main className="flex flex-col items-center justify-top min-h-screen p-6">
            {!isMobile && (
            <header className="w-1/3 max-w-5xl px-6 py-4 text-left">
                <div className="flex">
                <p className="text-blue-400 opacity-40">C:\Users\WebRodent\AI-Adoption&gt;</p>
                <p ref={textRef} className="text-blue-400"></p>
                </div>
            </header>
            )}
            {/* The table of contents */}
            <div className="flex min-w-min">
                <div className="w-1/4 min-w-min">
                <TableOfContents
                sections={[
                    { title: "Introduksjon", id: "introduksjon", level: 1 },
                    { title: "Veiledning for Commits", id: "veiledning-for-commits", level: 1 },
                    { title: "Generelle retningslinjer", id: "generelle-retningslinjer", level: 2 },
                    { title: "Arbeidsflyt 1: Skogsrotten", id: "arbeidsflyt-1-skogsrotten", level: 3 },
                    { title: "Arbeidsflyt 2: Husrotten", id: "arbeidsflyt-2-husrotten", level: 3 },
                    { title: "Kodegjennomgang: En Kvalitets- og Samarbeidsdrevet Prosess", id: "kodegjennomgang-en-kvalitets-og-samarbeidsdrevet-prosess", level: 1 },
                    { title: "Sikkerhetsrutiner: Å Bygge Tillit", id: "sikkerhetsrutiner-å-bygge-tillit", level: 1 },
                    { title: "Autentisering", id: "sikkerhetsrutiner-å-bygge-tillit", level: 2 },
                    { title: "Databeskyttelse", id: "sikkerhetsrutiner-å-bygge-tillit", level: 2 },
                    { title: "Kodesikkerhet", id: "sikkerhetsrutiner-å-bygge-tillit", level: 2 },
                    { title: "Dokumentasjon", id: "sikkerhetsrutiner-å-bygge-tillit", level: 2 },
                    { title: "Sikkerhet er et hovedfokus", id: "sikkerhet-er-et-hovedfokus", level: 2 },
                    { title: "Kommunikasjon, Teamarbeid og Læringskultur hos WebRodent", id: "kommunikasjon-teamarbeid-og-læringskultur-hos-webrodent", level: 1 },
                    { title: "Kunnskapsdeling", id: "kunnskapsdeling", level: 2 },
                    { title: "Kunnskapsoverføring", id: "kunnskapsoverføring", level: 2 },
                    { title: "Trening & Ferdighetsutvikling", id: "trening-ferdighetsutvikling", level: 1 },
                    { title: "CI/CD Praksis med Dockerisering", id: "cicd-praksis-med-dockerisering", level: 1 },
                    { title: "Vår CI/CD-prosess", id: "vår-cicd-prosess", level: 2 },
                    { title: "Strategi for utvikling i forretningen", id: "strategi-for-utvikling-i-forretningen", level: 1 },
                    { title: "Strategi for Deling inn i Generiske Komponenter", id: "strategi-for-deling-inn-i-generiske-komponenter", level: 2 },
                    { title: "Sammensetning til en Grunnleggende Produktstruktur", id: "sammensetning-til-en-grunnleggende-produktstruktur", level: 2 },
                    { title: "Implementering av en Polert og Robust Kjerne", id: "implementering-av-en-polert-og-robust-kjerne", level: 2 },
                    { title: "Bruk av GitHub Repo Templating i Forretningsspesifikke Applikasjoner", id: "bruk-av-github-repo-templating-i-forretningsspesifikke-applikasjoner", level: 2 },
                    { title: "Viktige Prinsipper og Beste Praksis", id: "viktige-prinsipper-og-beste-praksis", level: 2 },
                ]} />
                </div>
                
                {/* Content container */}
                <div className="w-3/4 max-w-5xl flex flex-col gap-12 py-6">

                    <ContentCard title='Introduksjon' contents={[
                        'Velkommen til DevOps-veiledningen for WebRodent. I den hurtigskiftende verden av programvareutvikling og drift er det viktig med en helhetlig og forståelig tilnærming. Denne veiledningen gir et klart rammeverk og praksis for effektive arbeidsflyter, høykvalitets programvarelevering og sikre rutiner. Hovedfokusene er samarbeid, automatisering og kontinuerlig forbedring.',
                    ]} id='introduksjon'/>
                    
                    <CannonPoints 
                        title="Med WebRodent håndboken ønsker vi:"
                        points={[
                            {subtitle: "Å gi klare retningslinjer for CI/ CD prosesser", text: "Effektivitet og kvalitet i våre leveranser oppnås gjennom klare og forståelige retningslinjer. Innen programvareutvikling som stadig endrer seg, gir tydelige prosedyrer oss evnen til smidig tilpasning. Dette spenner fra kodeintegrasjon til infrastrukturhåndtering. Målet er å minimere flaskehalser, redusere feilrater og sikre en pålitelig levering av software."},
                            {subtitle: "Å vektlegge sikkerhet i alt vi gjør", text: "I vår digitaliserte tid er sikkerhet en absolutt nødvendighet. Vi har et ansvar for å beskytte vår egen og brukerens informasjon, uansett om det er gjennom kodeutvikling eller datalagring. Dette innebærer regelmessige sikkerhetssjekker, bruk av kryptering og kontinuerlig opplæring av teamet. Med sikkerhet i kjernen av vår virksomhet bygger vi tillit og robusthet mot potensielle trusler."},
                            {subtitle: "Å fremme god kommunikasjon og samarbeid mellom team", text: "Suksess drives av effektivt teamarbeid. Klare kommunikasjonslinjer og et sterkt fokus på samarbeid er kritisk for å sikre at alle jobber mot et felles mål. Dette betyr regelmessige møter, bruk av samarbeidsfremmende verktøy, og et kontinuerlig fokus på åpenhet. Med en samkjørt innsats oppnår vi mer sammen."},
                            {subtitle: "Å støtte en kultur for kontinuerlig læring og deling av kunnskap", text: "For å holde tritt med den raske utviklingen i teknologi og industri, er en kultur preget av læring og kunnskapsdeling essensiell. Dette innebærer å motivere teamet til å oppsøke nye læringsmuligheter og dele den tilegnede kunnskapen. Ved å se feil som læringsmuligheter, vokser og forbedrer vi oss sammen."},
                            {subtitle: "Å ivareta bedriftens kjerneverdier under utviklingsprosessen", text: "For å ivareta bedriftens overordnet strategi, er det viktig at det er ivaretatt i alle prosjekter og utviklingsprosesser. Dette innebærer at alle prosjekter og produkter som det jobbes med i WebRodent, skal ta hensyn til bedriftens overordnet strategi. \"Strategien er beskrevet i Strategi for utvikling i forretningen\""},
                        ]} />
                    
                    <ContentCardImage title='Veiledning for Commits' contents={[
                        'For å sikre kvalitet og sporbarhet i vår kodebase, er det avgjørende med klare retningslinjer for hvordan vi håndterer commits. I WebRodent har vi utarbeidet to arbeidsprosesser som vi støtter. Begge støttes av våre produkt repositories.',
                    ]} id='veiledning-for-commits' image='/images/devops_git_product.png' size={{width: 800, height: 400}} nextTo={false} />

                    <CannonPoints 
                        title="Generelle retningslinjer"
                        points={[
                            {subtitle: "Beskrivende Meldinger", text: "Klare beskrivelser av endringen og dens hensikt. En tydelig commit-melding gir kontekst for teammedlemmer og hjelper med fremtidig referanse. Meldinger skal starte på et enkelt verb som: Added, Updated, Removed, Fixed. Dette gir en lettere lesbarhet for de som gjennomfører kvalitetssikring eller skal feilsøke og trenger å spore endringer i git."},
                            {subtitle: "Kontinuerlig Integrasjon", text: "Inkluder automatiserte bygg, tester, og sørg for umiddelbare tilbakemeldinger ved feil. Regelmessig integrering av endringer og automatisert testing bidrar til tidlig oppdagelse av feil, sikrer kvalitet, og reduserer manuell innsats."},
                            {subtitle: "Strategi for Branching: Trunk-based development", text: "Dette sikrer at kode som er under utvikling, holdes adskilt fra stabile release-koden og tillater en kontrollstruktur for kildekoden som holder main fri for uferdig kode."},
                            {subtitle: "Pull før Push", text: "Hent oppdatert kode fra remote før du pusher/ merger til main. Uavhengig om du foretrekker arbeidsflyt 1 eller 2, det er vitkig at du tar eget ansvar for egen kode, og sørger for at dine bidrag integrerer godt med resten av kildekoden."},
                        ]} id="generelle-retningslinjer" />
                    <ComparisonCard
                        points={[
                            {
                            title: "Arbeidsflyt 1: Skogsrotten",
                            id: "arbeidsflyt-1-skogsrotten",
                            content: "\“Skogsrotten er en rotte som liker rom til å utforske, besøker regelmessig med sine større og mer omfattende funn.\”",
                            subPoints: [
                                {
                                    title: "Commits",
                                    content: "Sporbarhet kan oppnås i commit meldinger eller i PR-kommentaren.",
                                },
                                {
                                    title: "Branching strategi",
                                    content: " Du lager en ny branch \“feature/<det du jobber med>\”. Feature branches har typisk en levetid på 3-6 timer, altså 1 dag om behov, og maksimum 2 dager. Hvis det føles vanskelig å nå, så er det kanskje et tegn på at feature-oppdateringen du jobber med, bør brytes ned i flere mindre deler."
                                },
                                {
                                    title: "PR og Review prosessen",
                                    content: "Når du jobber som en skogsrotte, så er dette en god måte å uthente feedback på det du jobber med. Da kan teamet gjennomføre reviews og komme med tilbakemelding rett fra sitt utviklermiljø. Det er en super måte å forbedre kodingen sin via teamets delte kunnskap. Du vil også jobbe jevn og ofte igjennom PR og review prosessen, og det er ikke alltid nødvendig å gjennomføre en review. Derfor er dette opp til utviklerens vurdering."
                                },
                            ],
                            },
                            {
                                title: "Arbeidsflyt 2: Husrotten",
                                id: "arbeidsflyt-2-husrotten",
                                content: "\“Husrotten er en rotte som liker å besøke ofte for alle små behov.\”",
                                subPoints: [
                                    {
                                        title: "Atomic Commits",
                                        content: "Én spesifikk endring per commit. Dette sikrer enkel sporing og gjør det enklere å forstå endringene som er gjort, samt eventuelt rulle tilbake til en tidligere versjon om nødvendig.",
                                    },
                                    {
                                        title: "Trunk-based i praksis for hyppig commits",
                                        content: "Du trenger ikke å branche ut i feature branches fra main. Når du bidrar i små og presise commits, så kan det være en del overhead å jobbe mot feature branches, og det kan bli vanskelig å vite når du er \“ferdig\”.",
                                    },
                                ]
                            },

                        ]}
                        />
                    <ContentCard title='Kodegjennomgang: En Kvalitets- og Samarbeidsdrevet Prosess' contents={[
                        'Kodegjennomgang er en essensiell del av softwareutviklingsprosessen. Dens formål strekker seg utover det å bare sikre kvalitetskoden. Det er også et kraftig verktøy for teamkommunikasjon, kunnskapsdeling, og for å bygge en kultur for kontinuerlig forbedring.',
                    ]} id='kodegjennomgang-en-kvalitets-og-samarbeidsdrevet-prosess' />

                    <CannonPoints 
                        title=""
                        points={[
                            {subtitle: "Tidspunkt", text: "Det er avgjørende å initiere kodegjennomganger raskt etter en forespørsel. Dette sikrer at koden fortsatt er frisk i tankene til utvikleren, noe som fører til en mer effektiv og meningsfull gjennomgang. Dette vil også bidra til å opprettholde fremdriften i prosjektet, slik at endringene kan integreres smidig."},
                            {subtitle: "Omfang", text: "En kodegjennomgang skal være konsis og fokusert. Ved å begrense gjennomgangen til enkelte endringer sørger man for at gjennomgangen ikke blir overveldende, og at diskusjonen forblir målrettet. Dette øker sjansen for at kritiske problemer blir identifisert, og at de viktigste delene av koden blir vurdert nøye."},
                            {subtitle: "Fokus", text: "Selv om kodeestetikk og stil kan være viktige for noen prosjekter, bør fokus under en kodegjennomgang hovedsakelig være på logikk. Er koden funksjonell? Er det noen potensielle feil? I tillegg er det avgjørende å se på sikkerhetsaspekter og vurdere koden med tanke på ytelse. Dette sikrer at programvaren ikke bare fungerer som den skal, men også at den er robust og effektiv."},
                            {subtitle: "Tilbakemelding", text: "Kritikk kan være vanskelig å ta, spesielt når det gjelder noe så personlig som ens egen kode. Derfor bør tilbakemeldinger være konstruktive og spesifikke. Når man påpeker et problem eller foreslår en forbedring, kan det være nyttig å inkludere referanser til dokumentasjon eller beste praksis. Dette gir grunnlag for forslagene og hjelper utvikleren med å forstå og lære."},
                        ]} />
                    
                    <ContentCard title='Sikkerhetsrutiner: Å Bygge Tillit' contents={[
                        'I den digitale tidsalderen er sikkerhet ikke bare et ønske, men en absolutt nødvendighet. For startups, som ofte opererer med begrensede ressurser men likevel håndterer verdifull informasjon, er det avgjørende å ha solide sikkerhetsrutiner på plass. Her er en grundigere forklaring på våre sikkerhetsprosedyrer',
                    ]} id='sikkerhetsrutiner-å-bygge-tillit' />

                    <CannonPoints 
                        title=""
                        points={[
                            {subtitle: "Autentisering", text: "Det er avgjørende å initiere kodegjennomganger raskt etter en forespørsel. Dette sikrer at koden fortsatt er frisk i tankene til utvikleren, noe som fører til en mer effektiv og meningsfull gjennomgang. Dette vil også bidra til å opprettholde fremdriften i prosjektet, slik at endringene kan integreres smidig."},
                            {subtitle: "Databeskyttelse", text: "En kodegjennomgang skal være konsis og fokusert. Ved å begrense gjennomgangen til enkelte endringer sørger man for at gjennomgangen ikke blir overveldende, og at diskusjonen forblir målrettet. Dette øker sjansen for at kritiske problemer blir identifisert, og at de viktigste delene av koden blir vurdert nøye."},
                            {subtitle: "Kodesikkerhet", text: "Selv om kodeestetikk og stil kan være viktige for noen prosjekter, bør fokus under en kodegjennomgang hovedsakelig være på logikk. Er koden funksjonell? Er det noen potensielle feil? I tillegg er det avgjørende å se på sikkerhetsaspekter og vurdere koden med tanke på ytelse. Dette sikrer at programvaren ikke bare fungerer som den skal, men også at den er robust og effektiv."},
                            {subtitle: "Dokumentasjon", text: "Vi utarbeider et kort risikonotat som beskriver formålet, omfang, deltakere, metodevalg, identifiserte obs-områder, utfordringer, og resultatet av risikovurderingen. Vedlegg inkluderer en risikotabell, en risikomatrise, og eventuelt en restliste. Som støtteverktøy benytter vi Digitaliseringsdirektoratets Excel-verktøy for en effektiv og systematisk gjennomføring av risikovurderingen. Med denne konsise tilnærmingen følger vi nøye Digitaliseringsdirektoratets veiledning, sikrer integriteten av våre systemer, og bygger tillit hos våre kunder og samarbeidspartnere."},
                            {subtitle: "Sikkerhet er et hovedfokus", text: "Å investere i sikkerhet er å investere i fremtiden til selskapet. Med disse rutinene på plass sikrer vi ikke bare at WebRodent er beskyttet, men også at vi bygger tillit blant kunder, partnere og investorer. I en verden hvor cybertrusler stadig øker, setter vi sikkerhet i førersetet, og sørger for at teamet vårt, uansett hvor lite, er godt utrustet for å håndtere dem."},
                        ]} />
                    



                    

                </div>
            </div>
        </main>
    )
}
        