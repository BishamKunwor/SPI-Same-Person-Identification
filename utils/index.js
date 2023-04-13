import { Button, ConfigProvider } from "antd";

export function tableDataRender(data) {
  return <div className="font-[500] text-sm text-primaryColor">{data}</div>;
}

// export function tableActionRender(
//   _,
//   record,
//   { viewBtnProps, editBtnProps, disableBtnProps }
// ) {
//   return (
//     <div className="flex gap-4 flex-wrap">
//       <Button {...viewBtnProps}>View</Button>
//       <Button {...editBtnProps}>Edit</Button>
//       <Button {...disableBtnProps}>Disable</Button>
//     </div>
//   );
// }

export function tableActionRender(
  _,
  record,
  { viewBtnProps, editBtnProps, disableBtnProps }
) {
  return (
    <div className="flex gap-4 flex-wrap">
      <Button {...viewBtnProps}>View</Button>
      <Button {...editBtnProps}>Edit</Button>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#E15562",
          },
        }}
      >
        <Button {...disableBtnProps} type="primary">
          Disable
        </Button>
      </ConfigProvider>
    </div>
  );
}

export function tableActionRenderWithEditDelete(
  _,
  record,
  { editBtnProps, discardBtnProps }
) {
  return (
    <div className="flex gap-4 flex-wrap">
      <Button {...editBtnProps}>Edit</Button>
      <Button {...discardBtnProps}>Discard</Button>
    </div>
  );
}
