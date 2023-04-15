import { Form, Input, Row, Select } from "antd";
import FormItemWrapper from "../../FormItemWrapper";
import FormLabel from "../../FormLabel";
import PageBottomButtons from "../../PageBottomButtons";
import { useEffect } from "react";
import moment from "moment";

interface ClientOccupationArgs {
  prev?(): void;
  next?(): void;
  calledFrom?: "review" | "edit";
  setFormData: (data: any) => void;
  formData: any;
}

export default function ClientOccupationForm({
  prev = () => {},
  next = () => {},
  calledFrom = "edit",
  setFormData,
  formData,
}: ClientOccupationArgs) {
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
        form={form}
        onFinish={(data) => {
          console.log(data);
          setFormData({ ...data, ...formData });
          next();
        }}
      >
        <FormLabel className="text-purple text-lg mb-4">Occupation</FormLabel>
        <Row gutter={[48, 0]}>
          <FormItemWrapper
            colProps={{ span: 8 }}
            label="Occupation*"
            formItemsProps={{
              name: "occupation",
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
            label="PAN NO."
            formItemsProps={{
              name: "panNo",
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
            label="Nature of business"
            formItemsProps={{
              name: "natureOfBusiness",
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
            label="Organization's name"
            formItemsProps={{
              name: "organizationName",
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
            label="Organization Address"
            formItemsProps={{
              name: "organizationAddress",
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
            label="Designation"
            formItemsProps={{
              name: "designation",
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
            label="Employee ID"
            formItemsProps={{
              name: "employeeId",
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
            label="Annual Income"
            formItemsProps={{
              name: "annualIncome",
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
