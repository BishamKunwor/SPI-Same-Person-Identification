// This wrappers wraps input field from children props and adds label via label props and contains two label alignment i.e., horizontal and vertical
interface FieldHeadingProps {
  children?: JSX.Element,
  label?: string,
  labelAlignment?: "vertical" | "horizontal";
}

export default function FieldHeadingWrapper({
  children,
  label,
  labelAlignment = "vertical",
}: FieldHeadingProps): JSX.Element {

  const isVerticallyAligned: boolean = labelAlignment.toLowerCase()[0] === "v";

  return (
    <div
      className={`flex ${isVerticallyAligned
        ? "flex-col gap-2 items-start" 
        : "flex-row gap-5 items-baseline"
        }`}
    >
      <div
        className={`tracking-[-0.01em] text-base leading-6 font-bold min-w-fit`}
      >
        {label}
      </div>
      <div className="">{children}</div>
    </div>
  );
}
