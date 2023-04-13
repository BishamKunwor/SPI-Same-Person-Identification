import { Upload } from "antd";
import NormalBtn from "../Btn/BtnNormal";
import FormLabel from "../FormLabel";
import * as colors from "../../variables/themes";

interface UploadFiles {
  previewProps?: any
  getParsedData?(data: ProgressEvent<FileReader>): any,
  getUploadedFile?(data: File): any,
  showPrevBtn?: boolean
}
export default function UploadAndPreviewFile({
  previewProps,
  getParsedData = (data: ProgressEvent<FileReader>) => { },
  getUploadedFile = (data: File) => { },
  showPrevBtn = true,
}: UploadFiles): JSX.Element {
  const uploadProps = {
    maxCount: 1,
    beforeUpload(data: File) {
      getUploadedFile(data);
      const file = new FileReader();
      file.readAsText(data);
      file.onload = (txtContent: ProgressEvent<FileReader>) => {
        console.log(txtContent.target?.result);
        getParsedData(txtContent);
      };
    },
  };
  if (!showPrevBtn) {
    return (
      <Upload {...uploadProps}>
        <NormalBtn
          btnProps={{ type: "primary" }}
          title={"Choose file"}
          tokenConfig={{
            colorPrimary: colors.goldYellow,
            colorBorder: colors.primaryColor,
          }}
          titleColor={colors.primaryColor}
        />
      </Upload>
    );
  }
  return (
    <div className="flex gap-16 flex-wrap pt-4">
      <div className="flex gap-8 flex-wrap items-baseline">
        <FormLabel>Upload file</FormLabel>
        <div className="w-72">
          <Upload {...uploadProps}>
            <NormalBtn
              btnProps={{ type: "primary" }}
              title={"Choose file"}
              tokenConfig={{
                colorPrimary: colors.goldYellow,
                colorBorder: colors.primaryColor,
                // controlHeight: 25,
              }}
              titleColor={colors.primaryColor}
            />
          </Upload>
        </div>
      </div>
      <div className="flex gap-8 flex-wrap items-baseline">
        {
          // <FormLabel>No file chosen</FormLabel>
        }
        <NormalBtn
          {...previewProps}
          btnProps={{ type: "primary" }}
          title={"Preview Data"}
          tokenConfig={{
            colorPrimary: colors.primaryColor,
            colorPrimaryBg: colors.transparantColor,
            // controlHeight: 25,
          }}
        />
      </div>
    </div>
  );
}
