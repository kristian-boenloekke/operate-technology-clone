import Heading from "./Heading";
import Section from "./Section";

export default function StatsSection() {
    return (
        <Section className="brand-blue">


            <Heading className={'text-white font-semibold'}>
                Tallene bag Operate Technology
            </Heading>

            <ul className="text-white text-[20px] gap-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                <li className="flex flex-col items-center justify-center text-center">
                    <span className="font-semibold text-[36px] lg:text-[72px] pb-1">300+</span>
                    <p>udarbejdede løsninger</p>
                </li>
                <li className="flex flex-col items-center justify-center text-center">
                    <span className="font-semibold text-[36px] lg:text-[72px] pb-1">135+</span>
                    <p>aktive webplatforme</p>
                </li>
                <li className="flex flex-col items-center justify-center text-center">
                    <span className="font-semibold text-[36px] lg:text-[72px] pb-1">75 års</span>
                    <p>kombineret erfaring</p>
                </li>
                <li className="flex flex-col items-center justify-center text-center">
                    <span className="font-semibold text-[36px] lg:text-[72px] pb-1">9</span>
                    <p>specialiserede medarbejdere</p>
                </li>
            </ul>


        </Section>
    )
}

