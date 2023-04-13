// This is the styles for reusing Heading of each page 

export default function Heading({ title }: { title: string }): JSX.Element {
  return (
    <div
      className={"font-bold leading-6 tracking-[-0.01em] text-lg text-black"}
    >
      {title}
    </div>
  );
}
