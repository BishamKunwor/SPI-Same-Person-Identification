import { Button, ConfigProvider } from "antd";

interface NormanBtnProps {
  title?: string | JSX.Element,
  tokenConfig?: any,
  btnProps?: any,
  titleColor?: string;
}

export default function NormalBtn({
  title,
  tokenConfig,
  btnProps,
  titleColor,
}: NormanBtnProps): JSX.Element {
  return (
    <ConfigProvider
      theme={{
        token: {
          ...tokenConfig,
          controlHeight: tokenConfig?.controlHeight ?? 35,
        },
      }}
    >
      <Button {...btnProps}>
        <span
          className={`px-4 font-bold tracking-[0.01em] leading-6 title ${btnProps && btnProps.type == "primary" &&
            (titleColor ? "text-[" + titleColor + "]" : "text-white")
            }`}
        >
          {title}
        </span>
      </Button>
    </ConfigProvider>
  );
}
