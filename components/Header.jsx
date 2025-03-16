
import Image from "next/image";
import BurgerMenu from "./BurgerMenu";
import Link from "next/link";

export default function Header() {

    return (
        <header className="bg-black/20 p-3 fixed top-0 left-0 right-0 z-20 flex justify-between items-center w-full">
            <Link href={'#'}>
                <Image src={'/logo.svg'} alt="logo" width={300} height={86} className="w-30 lg:w-35" />
            </Link>

            <div className="flex gap-6 items-center">

                <nav className="hidden lg:block">
                    <ul className="flex gap-4 text-[18px] text-white">
                        <li>
                            <div>
                                <a href="#">Om os</a>
                            </div>
                        </li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Referencer</a></li>
                        <li><a href="#">Teamet</a></li>
                        <li><a href="#">Kunde service</a></li>
                        <li><a href="#">Kontakt os</a></li>
                    </ul>
                </nav>
                <BurgerMenu />

            </div>
        </header >
    )
}