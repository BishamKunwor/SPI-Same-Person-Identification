import { Col, Form, Row, Upload } from "antd";
import AccSetupFormHeading from "../../AccSetupFormHeading";
import NormalBtn from "../../Btn/BtnNormal";
import * as colors from "../../../variables/themes";
import PageBottomButtons from "../../PageBottomButtons";
import { useEffect, useState } from "react";
import moment from "moment";

interface ClientDocsArgs {
  next?(): void;
  calledFrom?: "review" | "edit";
  prev?(): void;
  setFormData: (data: any) => void;
  formData: any;
}

export default function ClientDocsForm({
  next = () => {},
  prev = () => {},
  calledFrom = "edit",
  setFormData,
  formData,
}: ClientDocsArgs) {
  const isEditable = calledFrom !== "edit";
  function fileToBase64(file: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
  const uploadProps = {
    maxCount: 1,
    beforeUpload(data: File) {
      async function handleBeforeUpload(file: any) {
        const base64Url = await fileToBase64(data);
        return base64Url;
      }
      handleBeforeUpload(data);
    },
  };
  const [form] = Form.useForm();
  //   const [ppPhoto, setPpPhoto] = useState("");
  //   const [citizenshipFront, setSitizenshipFront] = useState("");
  //   const [citizenshipBack, setSitizenshipBack] = useState("");
  //   const [signature, setSignature] = useState("");
  //   const [thumbPrint, setThumbPrint] = useState("");

  useEffect(() => {
    if (Object.keys(formData).length > 0) {
      for (let data in form.getFieldsValue()) {
        if (data.toLocaleLowerCase().includes("date")) {
          form.setFieldValue(data, moment(formData[data]));
        } else {
          form.setFieldValue(data, formData[data]);
        }
      }
    }
  });
  return (
    <div className="client-docs">
      <Form
        onFinish={(data) => {
          console.log(data);
          const list: any = {};

          for (let key in data) {
            if (data[key]) {
              list[key] = data[key].file.thumbUrl;
            }
          }
          setFormData({ ...list, ...formData });
          next();
        }}
      >
        <AccSetupFormHeading className="mb-4">
          Upload Documents
        </AccSetupFormHeading>
        <AccSetupFormHeading className="mb-4">
          Required Documents of Applicant
        </AccSetupFormHeading>
        <div className="space-y-2">
          <Row>
            <Col span={8}>
              <div className="font-bold text-sm leading-6">
                Passport size photo
              </div>
            </Col>
            <Col span={9}>
              <Form.Item name={"passportSizePhoto"}>
                <Upload
                  {...uploadProps}
                  listType="picture"
                  className="grid grid-cols-2"
                >
                  <NormalBtn
                    tokenConfig={{
                      controlHeight: 30,
                      colorPrimary: colors.goldYellow,
                      colorBorder: colors.primaryColor,
                    }}
                    btnProps={{ type: "primary" }}
                    title={<p className="px-12 font-normal">Choose file</p>}
                    titleColor={"primary"}
                  />
                </Upload>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <div className="font-bold text-sm leading-6">
                Citizenship Copy Front
              </div>
            </Col>
            <Col span={9}>
              <Form.Item name="citizenshipFront">
                <Upload
                  {...uploadProps}
                  listType="picture"
                  className="grid grid-cols-2"
                >
                  <NormalBtn
                    tokenConfig={{
                      controlHeight: 30,
                      colorPrimary: colors.goldYellow,
                      colorBorder: colors.primaryColor,
                    }}
                    btnProps={{ type: "primary" }}
                    title={<p className="px-12 font-normal">Choose file</p>}
                    titleColor={"primary"}
                  />
                </Upload>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <div className="font-bold text-sm leading-6">
                Citizenship Copy Back
              </div>
            </Col>
            <Col span={9}>
              <Form.Item name={"citizenshipBack"}>
                <Upload
                  {...uploadProps}
                  listType="picture"
                  className="grid grid-cols-2"
                >
                  <NormalBtn
                    tokenConfig={{
                      controlHeight: 30,
                      colorPrimary: colors.goldYellow,
                      colorBorder: colors.primaryColor,
                    }}
                    btnProps={{ type: "primary" }}
                    title={<p className="px-12 font-normal">Choose file</p>}
                    titleColor={"primary"}
                  />
                </Upload>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <div className="font-bold text-sm leading-6">
                Applicants Signature
              </div>
            </Col>
            <Col span={9}>
              <Form.Item name={"applicantSignature"}>
                <Upload
                  {...uploadProps}
                  listType="picture"
                  className="grid grid-cols-2"
                >
                  <NormalBtn
                    tokenConfig={{
                      controlHeight: 30,
                      colorPrimary: colors.goldYellow,
                      colorBorder: colors.primaryColor,
                    }}
                    btnProps={{ type: "primary" }}
                    title={<p className="px-12 font-normal">Choose file</p>}
                    titleColor={"primary"}
                  />
                </Upload>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <div className="font-bold text-sm leading-6">
                Applicants thumb print
              </div>
            </Col>
            <Col span={9}>
              <Form.Item name={"applicantThumb"}>
                <Upload
                  {...uploadProps}
                  listType="picture"
                  className="grid grid-cols-2"
                >
                  <NormalBtn
                    tokenConfig={{
                      controlHeight: 30,
                      colorPrimary: colors.goldYellow,
                      colorBorder: colors.primaryColor,
                    }}
                    btnProps={{ type: "primary" }}
                    title={<p className="px-12 font-normal">Choose file</p>}
                    titleColor={"primary"}
                  />
                </Upload>
              </Form.Item>
            </Col>
          </Row>
          {/* <Row>
            <Col span={8}>
              <div className="font-bold text-sm leading-6">
                Applicants Photo with Citizenship
              </div>
            </Col>
            <Col span={9}>
              <Form.Item>
                <Upload listType="picture" className="grid grid-cols-2">
                  <NormalBtn
                    tokenConfig={{
                      controlHeight: 30,
                      colorPrimary: colors.goldYellow,
                      colorBorder: colors.primaryColor,
                    }}
                    btnProps={{ type: "primary" }}
                    title={<p className="px-12 font-normal">Choose file</p>}
                    titleColor={"primary"}
                  />
                </Upload>
              </Form.Item>
            </Col>
          </Row> */}
        </div>
        {!isEditable && (
          <div className="mt-6">
            <PageBottomButtons
              cancelBtnProps={{
                loading: false,
                onClick: () => {
                  prev();
                },
              }}
              saveBtnProps={{
                loading: false,
                htmlType: "submit",
              }}
              saveTitle="Next"
              cancelTitle="Previous"
            />
          </div>
        )}
      </Form>
    </div>
  );
}
