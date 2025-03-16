import Image from "next/image";
import CustomLink from "./CustomLink";
import Heading from "./Heading";
import SectionTitle from "./SectionTitle";
import Section from "./Section";

export default function ContactSection() {
    return (
        <Section className="brand-gray-light">
            <SectionTitle className={'text-black'}> Kontakt os</SectionTitle>

            <Heading className={'text-black font-semibold'}>
                Har du spørgsmål?
            </Heading>
            <p className="text-[18px] lg:text-[21.6px]">
            Vil du vide mere om vores egenudviklede webplatform, baseret på Open Source, eller er du interesseret i en uforpligtende analyse og et tilbud på en ny løsning til jer, så er du velkommen til at kontakte os direkte.

            </p>

            <CustomLink>Skriv til os</CustomLink>

            <Image src={'/ai-worker.png'} width={2000} height={2000} alt="programmer"  className="mt-6"/>

        </Section>
    )
}