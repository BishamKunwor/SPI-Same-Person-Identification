export default function AccSetupFormHeading({ children, className }: { children: JSX.Element | string | number, className?: string }): JSX.Element {
    return <div
        className={`tracking-[-0.01em] font-bold leading-6 min-w-max title text-purple text-lg  ${className}`}
    >
        {children}
    </div>
}