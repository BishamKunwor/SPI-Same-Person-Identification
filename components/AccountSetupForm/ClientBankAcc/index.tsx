import { Col, Form, Input, Radio, Row, Select } from "antd";
import AccSetupFormHeading from "../../AccSetupFormHeading";
import FormItemWrapper from "../../FormItemWrapper";
import FormLabel from "../../FormLabel";
import PageBottomButtons from "../../PageBottomButtons";

interface ClientBankAccArgs {
  prev?(): void;
  next?(): void;
  calledFrom?: "review" | "edit";
  setFormData: (data: any) => void;
  formData: any;
}

export default function ClientBankAccForm({
  prev = () => {},
  next = () => {},
  calledFrom = "edit",
  setFormData,
  formData,
}: ClientBankAccArgs) {
  const isEditable = calledFrom !== "edit";
  return (
    <>
      <Form
        onFinish={(data) => {
          console.log(data);
          setFormData({ ...data, ...formData });
          next();
        }}
      >
        <AccSetupFormHeading className="mb-4">Bank Details</AccSetupFormHeading>
        <FormLabel>
          Your provided bank details will be used to trasfer returns of your
          investment at end of stated period of Portfolio Management Service.
        </FormLabel>
        <div className="mt-6"></div>
        {/* <Row gutter={[48, 0]}>
          <Col>
            <div className="flex space-x-12 items-baseline">
              <FormLabel>Type of bank account*</FormLabel>
              <FormItemWrapper
                labelAlignment="horizontal"
                colProps={{ span: 12 }}
                formItemsProps={{
                  rules: [{ required: true, message: "Not empty" }],
                  name: "bankAccType",
                }}
              >
                <Radio.Group
                //   onChange={(data) => {
                //     console.log(data);
                //   }}
                //   value={1}
                >
                  <div className="flex space-x-12">
                    <Radio disabled={isEditable} value={""}>
                      <FormLabel>Saving Account</FormLabel>
                    </Radio>
                    <Radio disabled={isEditable} value={""}>
                      <FormLabel>Current Account</FormLabel>
                    </Radio>
                  </div>
                </Radio.Group>
              </FormItemWrapper>
            </div>
          </Col>
        </Row> */}
        <Row gutter={[48, 0]}>
          <FormItemWrapper
            label="Account Number*"
            colProps={{ span: 8 }}
            formItemsProps={{
              name: "accountNo",
            }}
          >
            <Input
              disabled={isEditable}
              size="large"
              placeholder="Enter bank account number"
            />
          </FormItemWrapper>
          <FormItemWrapper
            label="Bank*"
            colProps={{ span: 8 }}
            formItemsProps={{
              name: "bankName",
            }}
          >
            <Select
              disabled={isEditable}
              size="large"
              placeholder="Select from dropdown"
            />
          </FormItemWrapper>
          <FormItemWrapper
            label="Bank Branch Name*"
            colProps={{ span: 8 }}
            formItemsProps={{
              name: "branchName",
            }}
          >
            <Select
              disabled={isEditable}
              size="large"
              placeholder="Select from dropdown"
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
              cancelTitle="Previous"
              saveTitle="Next"
            />
          </div>
        )}
      </Form>
    </>
  );
}
