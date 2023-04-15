import { Form, Input, Row, Select } from "antd";
import FormItemWrapper from "../../FormItemWrapper";
import FormLabel from "../../FormLabel";
import PageBottomButtons from "../../PageBottomButtons";
import { useEffect } from "react";
import moment from "moment";

interface ClientFamilyDetailsArgument {
  prev?(): void;
  next?(): void;
  calledFrom?: "review" | "edit";
  setFormData: (data: any) => void;
  formData: any;
}

export default function ClientFamilyDetailsForm({
  prev = () => {},
  next = () => {},
  setFormData,
  formData,
  calledFrom = "edit",
}: ClientFamilyDetailsArgument) {
  const isEditable = calledFrom !== "edit";
  const [form] = Form.useForm();
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
  }, []);
  return (
    <>
      <Form
        onFinish={(data) => {
          console.log(data);
          setFormData({ ...data, ...formData });
          next();
        }}
      >
        <FormLabel className="text-purple text-lg mb-4">
          Family Details
        </FormLabel>
        <Row gutter={[48, 0]}>
          <FormItemWrapper
            colProps={{ span: 8 }}
            label="Grand Father's Name*"
            formItemsProps={{
              name: "grandFatherName",
              rules: [
                {
                  required: true,
                  message: "Grand Father Name Should not be empty.",
                },
              ],
            }}
          >
            <Input
              disabled={isEditable}
              size="large"
              placeholder="Enter your first name"
            />
          </FormItemWrapper>
          <FormItemWrapper
            colProps={{ span: 8 }}
            label="Father's Name*"
            formItemsProps={{
              name: "fatherName",
              rules: [
                {
                  required: true,
                  message: "Father Name Should not be empty.",
                },
              ],
            }}
          >
            <Input
              disabled={isEditable}
              size="large"
              placeholder="Enter your first name"
            />
          </FormItemWrapper>
          <FormItemWrapper
            colProps={{ span: 8 }}
            label="Mother’s Name*"
            formItemsProps={{
              name: "motherName",
            }}
          >
            <Input
              disabled={isEditable}
              size="large"
              placeholder="Enter your first name"
            />
          </FormItemWrapper>
        </Row>
        <Row gutter={[48, 0]}>
          <FormItemWrapper
            colProps={{ span: 8 }}
            label="Spouse’s Name"
            formItemsProps={{
              name: "spouseName",
            }}
          >
            <Input
              disabled={isEditable}
              size="large"
              placeholder="Enter your first name"
            />
          </FormItemWrapper>
          <FormItemWrapper
            colProps={{ span: 8 }}
            label="Son’s Name"
            formItemsProps={{
              name: "sonName",
            }}
          >
            <Input
              disabled={isEditable}
              size="large"
              placeholder="Enter your first name"
            />
          </FormItemWrapper>
          <FormItemWrapper
            colProps={{ span: 8 }}
            label="Daughter’s Name"
            formItemsProps={{
              name: "daughterName",
            }}
          >
            <Input
              disabled={isEditable}
              size="large"
              placeholder="Enter your first name"
            />
          </FormItemWrapper>
        </Row>
        <Row gutter={[48, 0]}>
          <FormItemWrapper
            colProps={{ span: 8 }}
            label="Daughter in Law’s Name"
            formItemsProps={{
              name: "daughterInLawName",
            }}
          >
            <Input
              disabled={isEditable}
              size="large"
              placeholder="Enter your first name"
            />
          </FormItemWrapper>
          <FormItemWrapper
            colProps={{ span: 8 }}
            label="Father’s in Law’s Name"
            formItemsProps={{
              name: "fatherInLawName",
            }}
          >
            <Input
              disabled={isEditable}
              size="large"
              placeholder="Enter your first name"
            />
          </FormItemWrapper>
        </Row>
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
    </>
  );
}
