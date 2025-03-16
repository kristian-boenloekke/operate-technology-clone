import Heading from "./Heading";
import Section from "./Section";
import SectionTitle from "./SectionTitle";

export default function ProductSection() {
    return (
        <Section className="brand-green">
            <SectionTitle className={'text-white'}> Vores produkt</SectionTitle>

            <Heading className={'text-white font-semibold'}>
                Få adgang til en gennemtestet, fleksibel og brugervenlig 
                webplatform til jeres kommende hjemmeside eller intranet
            </Heading>
            
        </Section>
    )
}