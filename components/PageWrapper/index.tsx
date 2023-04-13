// This is page wrapper which adds default styles including margin padding height and backgound color

export default function PageWrapper({ children }: { children?: JSX.Element[] | JSX.Element }): JSX.Element {
  return (
    <div className="bg-bgColor min-h-[calc(100vh-64px)] px-12 py-6 pb-16 space-y-3">
      {children}
    </div>
  );
}
