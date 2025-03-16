export default function Section({ children, className }) {
    return (
        <section className={` ${className} py-[70px] px-6 md:px-[max(24px,calc(24px+(100vw-768px)*0.05))] lg:px-[max(24px,calc(24px+(100vw-1024px)*0.08))]`}>
            {children}
        </section>
    )
}