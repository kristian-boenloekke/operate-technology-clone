import Section from "./Section";
import Heading from "./Heading";
import SectionTitle from "./SectionTitle";
import Image from "next/image";

export default function ProcessSection() {
    return (
        <Section className="bg-[#ebebeb]">
            <SectionTitle className={'text-black'}> Vores proces</SectionTitle>

            <Heading className={'text-black font-semibold'}>
                Få et indblik i vores hverdag
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-auto gap-6 pt-[24px]">
                <ProcessCard
                    src="/analyse.svg"
                    heading={"analyse"}
                >
                    Vi starter altid med en grundig analyse af jeres organisation, målgruppe og domæne. Ved at forstå jeres behov skaber vi en strategisk retning, der dækker jeres behov og krav. Vi kombinerer data og vores erfaring for at lægge fundamentet til en succesfuld digital løsning.
                </ProcessCard>
                <ProcessCard
                    src="/design.svg"
                    heading={"design"}
                >
                    Vores designer skaber brugervenlige og æstetiske løsninger, der engagerer din målgruppe. Vi arbejder med wireframes, Figma-prototyper og løbende feedback for at sikre, at hver detalje understøtter jeres CVI og leverer en solid brugeroplevelse med korrekt webtilgængelighed.
                </ProcessCard>
                <ProcessCard
                    src="/implementering.svg"
                    heading={"implementering"}
                >
                   Fra koncept til virkelighed – vi udfører en fejlfri implementering af løsningen, da vores proces er gennemsigtig, effektiv og præget af en tæt dialog. Krydret med vores erfaring fra lignende projekter, opnår vi en platform som opfylder alle jeres krav.
                </ProcessCard>
                <ProcessCard
                    src="/udvikling.svg"
                    heading={"udvikling"}
                >
                    Vi udvikler skræddersyede løsninger og moduler, når der er brug for det og læner os ellers op af Drupals fantastiske community. Vores moduler tager udgangspunkt i specifikke brugsmønstre og konkrete behov. Sammen skaber vi digitale løsninger, der gør en forskel.
                </ProcessCard>

            </div>

        </Section>
    )
}

export function ProcessCard({src, heading, children}) {
    return (
        <article className="flex flex-col bg-white p-3 lg:p-6">
            <Image src={src} alt="icon" width={1600} height={1600} className="w-40 h-40" />
            <h2 className="text-[34px] capitalize font-bold mb-3">{heading}</h2>
            <p className="text-[18px]">{children}</p>


        </article>
    )
}