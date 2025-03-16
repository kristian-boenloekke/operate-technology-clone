import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Heading from "./Heading";

const links = [
    'Om os',
    'Service',
    'Referencer',
    'Teamet',
    'Kontakt os'
]

export default function Footer() {
    return (
        <footer className="brand-red text-white md:p-[5vw] space-y-6 py-[70px] px-6 md:px-[max(24px,calc(24px+(100vw-768px)*0.08))] lg:px-[max(24px,calc(24px+(100vw-1024px)*0.30))]">
            <div className="flex flex-col md:flex-row gap-6 justify-between w-full">


                <ul className="space-y-4 text-[18px]">
                    <li className="flex flex-col">
                        <p className="font-semibold">Operate Technology A/S</p>
                        <p>Jesper Brochmands Gade 10</p>
                        <p>2020 København N</p>
                        <p>Danmark</p>
                    </li>
                    <li>
                        <p><span className="font-semibold">Kundeservice:</span> <a href="tel:+4553742450">(+45) 53 74 24 50</a></p>
                        <p>(Hverdage kl. 09 - 16:30, fredag til kl. 16)</p>
                    </li>

                    <li>
                        <p><span className="font-semibold">Email:</span> <a href="mailto:kundeservice@operatetechnology.dk">kundeservice@operatetechnology.dk</a></p>
                        <p><span className="font-semibold">CVR:</span> 31 32 66 99</p>
                    </li>
                </ul>
                <nav>
                    <h2 className="font-semibold text-[27px]">Genveje</h2>
                    <ul className=" text-[18px]">
                        {links.map((link, index) => (
                            <li key={index}>
                                <Link
                                    href="/"
                                    className="group relative flex items-center pl-6"
                                >
                                    <ChevronRight
                                        className="absolute left-0 transition-all duration-500 transform group-hover:translate-x-1"
                                    />
                                    <span>{link}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                </nav>
            </div>
            <h2 className="font-semibold text-[27px]">Om Operate-technology</h2>
            <p className="text-[18px]">
            Vi udvikler webplatforme, der med intelligent struktur sikrer sammenhæng mellem jeres unikke indhold og brugernes reelle behov. Vi har fokus på best practise for brugeradfærd og forenkling af redaktørens hverdag.
            </p>


        </footer>
    )
}