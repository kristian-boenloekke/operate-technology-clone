import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function CustomLink({ children, className }) {
    return (
        <Link
            href={'#'}
            className={`italic zodiak flex items-center text-[25px] pt-6 transition duration-500 ease-in-out group ${className}`}
        >
            {children}
            <ChevronRight
                size={25}
                className="transition-transform duration-500 ease-in-out group-hover:translate-x-1 font-light"
            />
        </Link>
    )
}