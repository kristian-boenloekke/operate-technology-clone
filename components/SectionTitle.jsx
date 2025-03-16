export default function SectionTitle ({children, className}) {
    return (
        <p className={`${className} zodiak italic text-[18px] font-light mb-[22px]`}>
            {children}
        </p>
    )
}