import Link from "next/link";
import Heading from "./Heading";
import Paragraph from "./Heading";
import { ChevronRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import CustomLink from "./CustomLink";
import Section from "./Section";

export default function TeamSection() {
    return (
        <Section className="bg-white ">
            <SectionTitle className={'text-[#031710]'}> Teamet</SectionTitle>

            <div className="flex flex-col lg:flex-row lg:gap-14">


                <Heading className={'text-black flex flex-col min-w-2/3 pb-3'}>
                    <div className="border-b w-full mb-6" />
                    <span>
                        Vi er Operate Technology.
                    </span>
                    Vi arbejder efter best practice-principper og tager strukturerede beslutninger.
                    Hver eneste dag.
                </Heading>
                <div>
                    <div className="border-b w-full mb-6" />


                    <p className="text-[18px] lg:text-[21.6px]">
                        Vi starter ikke forfra. Vores projekter har altid et udgangspunkt, ikke kun kva vores årelange erfaring, men primært fordi vi har bygget en teknisk webplatform skræddersyet til vores forskellige målgrupper. Vi har igennem de seneste 15 år forfinet fællesnævnerne hos vores kunder på tværs af formål, behov og bygget det ultimative fundament til at indarbejde den enkelte kundes individuelle behov og udseende.
                    </p>
                    <p className="pt-6 text-[18px] lg:text-[21.6px]">Kort sagt; vi forstår og elsker webmediet og alle dets facetter. <span className="font-semibold">Punktum.</span></p>

                    <CustomLink>Se hele teamet</CustomLink>
                </div>

            </div>

        </Section>
    )
}