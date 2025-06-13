import Image from "next/image";
import CustomLink from "./CustomLink";
import Heading from "./Heading";
import SectionTitle from "./SectionTitle";
import Section from "./Section";

export default function ContactSection() {
    return (
        <Section className="brand-gray-light flex flex-col lg:flex-row lg:gap-10">
            <div className="lg:w-1/2 lg:flex-1">
            <SectionTitle className={'text-black'}> Kontakt os</SectionTitle>

            <Heading className={'text-black font-semibold'}>
                Har du spørgsmål?
            </Heading>
            <p className="text-[18px] lg:text-[21.6px]">
            Vil du vide mere om vores egenudviklede webplatform, baseret på Open Source, eller er du interesseret i en uforpligtende analyse og et tilbud på en ny løsning til jer, så er du velkommen til at kontakte os direkte.

            </p>

            <CustomLink>Skriv til os</CustomLink>
             </div>

            <Image src={'/ai-worker-2.webp'} width={2000} height={2000} alt="programmer"  className="mt-6 lg:w-1/2 lg:h-auto"/>

        </Section>
    )
}