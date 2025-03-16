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
            <div className="grid grid-cols-2 grid-rows-2 gap-6 pt-[24px]">
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
                    Vi starter altid med en grundig analyse af jeres organisation, målgruppe og domæne. Ved at forstå jeres behov skaber vi en strategisk retning, der dækker jeres behov og krav. Vi kombinerer data og vores erfaring for at lægge fundamentet til en succesfuld digital løsning.
                </ProcessCard>
                <ProcessCard
                    src="/implementering.svg"
                    heading={"implementering"}
                >
                    Vi starter altid med en grundig analyse af jeres organisation, målgruppe og domæne. Ved at forstå jeres behov skaber vi en strategisk retning, der dækker jeres behov og krav. Vi kombinerer data og vores erfaring for at lægge fundamentet til en succesfuld digital løsning.
                </ProcessCard>
                <ProcessCard
                    src="/udvikling.svg"
                    heading={"udvikling"}
                >
                    Vi starter altid med en grundig analyse af jeres organisation, målgruppe og domæne. Ved at forstå jeres behov skaber vi en strategisk retning, der dækker jeres behov og krav. Vi kombinerer data og vores erfaring for at lægge fundamentet til en succesfuld digital løsning.
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