export default function FormLabel({ children, className }: { children: JSX.Element | string | number, className?: string }): JSX.Element {
  return (
    <div
      className={`tracking-[-0.01em] text-sm leading-6 font-semibold min-w-max title ${className}`}
    >
      {children}
    </div>
  );
}
