export default function Heading({children, className}) {
    return (
        <h2 className={`${className} text-[36px] lg:text-[50.4px] font-semibold`}>
            {children}
        </h2>
    )
}