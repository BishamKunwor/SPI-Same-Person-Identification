import * as colors from "../../variables/themes";
import NormalBtn from "../Btn/BtnNormal";

interface PageBottomProps {
  cancelBtnProps: any,
  saveBtnProps: any,
  cancelTitle?: string,
  saveTitle?: string
}

// These are the Two Buttons at the bottom of every page and is configured via cancelBtnProps and saveBtnProps
export default function PageBottomButtons({ cancelBtnProps, saveBtnProps, cancelTitle = "Cancel", saveTitle = "Save" }: PageBottomProps): JSX.Element {
  return (
    <div className="flex justify-between items-center flex-wrap gap-4">
      <NormalBtn
        title={cancelTitle}
        tokenConfig={{
          colorPrimary: colors.primaryColor,
          colorBorder: colors.primaryColor,
          lineWidth: 2,
          controlHeight: 40,
        }}
        btnProps={{ ...cancelBtnProps, type: "default" }}
      />

      <NormalBtn
        title={saveTitle}
        tokenConfig={{
          colorPrimary: colors.primaryColor,
          colorBorder: colors.primaryColor,
          controlHeight: 40,
        }}
        btnProps={{ ...saveBtnProps, type: "primary" }}
      />
    </div>
  );
}
