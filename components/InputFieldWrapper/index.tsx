// This wrappers wraps input field from children props and adds label via label props and contains two label alignment i.e., horizontal and vertical
interface InputFieldWrapperProps {
  children: JSX.Element,
  label?: string,
  labelAlignment?: "vertical" | "horizontal",
  isDisabled?: boolean
}
export default function InputFieldWrapper({
  children,
  label,
  labelAlignment = "vertical",
  isDisabled = false,
}: InputFieldWrapperProps): JSX.Element {
  const isVerticallyAligned: boolean = labelAlignment.toLowerCase()[0] === "v";
  return (
    <div
      className={`flex ${isVerticallyAligned
        ? "flex-col gap-2 items-start"
        : "flex-row gap-5 items-baseline w-full"
        }`}
    >
      <div
        className={`tracking-[-0.01em] text-sm leading-6 font-semibold min-w-max ${isDisabled ? "text-disableGray" : "title"
          }`}
      >
        {label}
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}
