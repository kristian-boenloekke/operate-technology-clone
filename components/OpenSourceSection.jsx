import CustomLink from "./CustomLink";
import Heading from "./Heading";
import Section from "./Section";
import SectionTitle from "./SectionTitle";


export default function OpenSourceSection() {
    return (
        <Section className="brand-red">
            <SectionTitle className={'text-white'}>Opensource</SectionTitle>
            <Heading className={'text-white lg:whitespace-nowrap'}>
                Vi lever og ånder for
                <div className="inline-flex flex-col w-fit pl-2">
                    <span className="italic font-normal leading-8">Drupal CMS</span>
                    <svg className="w-fit "  viewBox="0 0 650 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50.2994 15.7508C250.157 13.6635 450.059 15.5575 649.839 21.4197C434.54 32.0555 213.811 -32.2423 5.95898 24.9113C181.079 16.8974 356.199 8.87713 531.319 0.863251" stroke="#ffffff" strokeWidth="2" strokeMiterlimit="10"></path>
                    </svg>
                </div>
            </Heading>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-10">


                <p className="text-[18px] lg:text-[21.6px] text-white">
                    Vi kan ikke sige det nok, vi er helt tossede med Drupal som fundament for vores løsninger. Vi har brugt de seneste 15+ år på at tilpasse, forfine og optimere måden som vi bruger Drupal på og har derfor en helt unik metode og tilgang til vores tekniske løsninger - både under analyse- og designfasen samt udvikling og efterfølgende drift. Til fordel for os og for dig. Som vores kunde.
                </p>
                <p className="text-[18px] lg:text-[21.6px] text-white">

                    Hele vores forretning er opbygget med ét formål: at give vores kunder en form for stordriftfordel, selvom budgettet til webløsninger ikke nødvendigvis er særligt stort. Vi samler alle vores kunder, store som små, i vores eget-udviklede hostingsetup som sikrer optimal performance til konkurrencedygtige priser og så får I vores årelange erfaring til spotpris, når der skal laves tilpasninger og nyudvikling.
                </p>
            </div>

            <CustomLink className={'text-white'}>Læs mere om platformen</CustomLink>

        </Section>
    )
}