import { Button, ConfigProvider } from "antd";
import { AliasToken } from "antd/es/theme/internal";
import { addDirSVG } from "../../../public/icons";

interface BtnWithIconProps {
  btnProps?: any,
  icon?: any,
  title?: string,
  styleConfig?: Partial<AliasToken>
}
export default function BtnWithIcon({ btnProps, icon, title, styleConfig }: BtnWithIconProps): JSX.Element {
  return (
    <ConfigProvider
      theme={{
        token: {
          controlHeight: 40,
          ...styleConfig
        },
      }}
    >
      <Button {...btnProps}>
        <span className="">
          <span className="px-4 font-bold tracking-[0.01em] leading-6 flex gap-x-6 items-center">
            {icon ? icon : addDirSVG} {title}
          </span>
        </span>
      </Button>
    </ConfigProvider>
  );
}
