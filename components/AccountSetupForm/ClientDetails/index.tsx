import { Button, DatePicker, Form, Input, Radio, Row, Select } from "antd";
import AccSetupFormHeading from "../../AccSetupFormHeading";
import FormItemWrapper from "../../FormItemWrapper";
import FormLabel from "../../FormLabel";
import PageBottomButtons from "../../PageBottomButtons";
import { useRouter } from "next/router";

interface ClientDetailsArgument {
  next?(): void;
  calledFrom?: "review" | "edit";
}

export default function ClientDetailsForm({
  next = () => {},
  calledFrom = "edit",
}: ClientDetailsArgument) {
  const isEditable = calledFrom !== "edit";
  const radioGroupGenderLabel = {
    male: "male",
    female: "female",
    others: "others",
  };
  const router = useRouter();
  return (
    <>
      <Form
        onFinish={(data) => {
          console.log(data);
          next();
        }}
      >
        <AccSetupFormHeading className="mb-4">
          Personal Details
        </AccSetupFormHeading>
        <Row gutter={[48, 0]}>
          <FormItemWrapper
            colProps={{ span: 8 }}
            label="First Name*"
            formItemsProps={{
              name: "firstName",
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
            formItemsProps={{
              name: "middleName",
            }}
            label="Middle Name"
          >
            <Input
              disabled={isEditable}
              size="large"
              placeholder="Enter your middle name"
            />
          </FormItemWrapper>
          <FormItemWrapper
            colProps={{ span: 8 }}
            label="Last Name*"
            formItemsProps={{
              name: "lastName",
            }}
          >
            <Input
              disabled={isEditable}
              size="large"
              placeholder="Enter your last name"
            />
          </FormItemWrapper>
        </Row>
        <Row gutter={[48, 0]}>
          <FormItemWrapper
            colProps={{ span: 8 }}
            formItemsProps={{
              name: "dateOfBirthBS",
            }}
            label="Date of Birth (B.S)*"
          >
            <DatePicker
              disabled={isEditable}
              className="w-full"
              size="large"
              placeholder="Enter your first name"
            />
          </FormItemWrapper>
          <FormItemWrapper
            colProps={{ span: 8 }}
            formItemsProps={{
              name: "dateOfBithAD",
            }}
            label="Date of Birth (A.D)*"
          >
            <DatePicker
              disabled={isEditable}
              className="w-full"
              size="large"
              placeholder="Enter your first name"
            />
          </FormItemWrapper>
          <FormItemWrapper
            colProps={{ span: 8 }}
            label="Educational Qualification*"
            formItemsProps={{
              name: "educationQualification",
            }}
          >
            <Select
              disabled={isEditable}
              size="large"
              placeholder="Enter your first name"
            />
          </FormItemWrapper>
        </Row>
        <Row gutter={[48, 0]}>
          <FormItemWrapper
            label="Gender*"
            labelAlignment="vertical"
            colProps={{ span: 8 }}
            formItemsProps={{
              rules: [{ required: true, message: "Not empty" }],
              name: "gender",
            }}
          >
            <Radio.Group
              size="large"
              buttonStyle="solid"
              //   onChange={(data) => {
              //     console.log(data);
              //   }}
              //   value={1}
            >
              <div className="flex space-x-4">
                <Radio disabled={isEditable} value={radioGroupGenderLabel.male}>
                  <FormLabel>Male</FormLabel>
                </Radio>
                <Radio
                  disabled={isEditable}
                  value={radioGroupGenderLabel.female}
                >
                  <FormLabel>Female</FormLabel>
                </Radio>
                <Radio
                  disabled={isEditable}
                  value={radioGroupGenderLabel.others}
                >
                  <FormLabel>Others</FormLabel>
                </Radio>
              </div>
            </Radio.Group>
          </FormItemWrapper>
          <FormItemWrapper
            label="Nationality*"
            labelAlignment="vertical"
            colProps={{ span: 8 }}
            formItemsProps={{
              rules: [{ required: true, message: "Not empty" }],
              name: "nationality",
            }}
          >
            <Radio.Group
            //   onChange={(data) => {
            //     console.log(data);
            //   }}
            //   value={1}
            >
              <div className="flex space-x-4">
                <Radio disabled={isEditable} value={radioGroupGenderLabel.male}>
                  <FormLabel>Nepali</FormLabel>
                </Radio>
                <Radio
                  disabled={isEditable}
                  value={radioGroupGenderLabel.female}
                >
                  <FormLabel>Other</FormLabel>
                </Radio>
              </div>
            </Radio.Group>
          </FormItemWrapper>
          <FormItemWrapper
            label="Marital Status*"
            labelAlignment="vertical"
            colProps={{ span: 8 }}
            formItemsProps={{
              rules: [{ required: true, message: "Not empty" }],
              name: "maritalStatus",
            }}
          >
            <Radio.Group
            //   onChange={(data) => {
            //     console.log(data);
            //   }}
            //   value={1}
            >
              <div className="flex space-x-4">
                <Radio disabled={isEditable} value={radioGroupGenderLabel.male}>
                  <FormLabel>Single</FormLabel>
                </Radio>
                <Radio
                  disabled={isEditable}
                  value={radioGroupGenderLabel.female}
                >
                  <FormLabel>Married</FormLabel>
                </Radio>
                <Radio
                  disabled={isEditable}
                  value={radioGroupGenderLabel.others}
                >
                  <FormLabel>Others</FormLabel>
                </Radio>
              </div>
            </Radio.Group>
          </FormItemWrapper>
        </Row>
        <AccSetupFormHeading className="mb-6">
          Identity Proof Details
        </AccSetupFormHeading>
        {/* <Row gutter={[48, 0]}>
          <FormItemWrapper
            labelAlignment="vertical"
            colProps={{ span: 8 }}
            formItemsProps={{
              rules: [{ required: true, message: "Not empty" }],
            }}
          >
            <Radio.Group
            //   onChange={(data) => {
            //     console.log(data);
            //   }}
            //   value={1}
            >
              <div className="flex space-x-4">
                <Radio disabled={isEditable} value={radioGroupGenderLabel.male}>
                  <FormLabel>Citizenship</FormLabel>
                </Radio>
                <Radio
                  disabled={isEditable}
                  value={radioGroupGenderLabel.female}
                >
                  <FormLabel>Passport</FormLabel>
                </Radio>
              </div>
            </Radio.Group>
          </FormItemWrapper>
        </Row> */}
        <Row gutter={[48, 0]}>
          <FormItemWrapper
            colProps={{ span: 8 }}
            label="Citizenship No.*"
            formItemsProps={{
              name: "citizenshipNo",
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
            label="Issue District"
            formItemsProps={{
              name: "issueDistrict",
            }}
          >
            <Input
              disabled={isEditable}
              size="large"
              placeholder="Enter your first name"
            />
          </FormItemWrapper>
          {/* <FormItemWrapper
            colProps={{ span: 4 }}
            label="Issue Date (A.D)*"
            formItemsProps={{
              name: "issueDate",
            }}
          >
            <DatePicker
              disabled={isEditable}
              className="w-full"
              size="large"
              placeholder="Enter your first name"
            />
          </FormItemWrapper> */}
          <FormItemWrapper
            colProps={{ span: 6 }}
            label="Issue Date (B.S.)*"
            formItemsProps={{
              name: "issueDate",
            }}
          >
            <DatePicker
              disabled={isEditable}
              className="w-full"
              size="large"
              placeholder="Enter your first name"
            />
          </FormItemWrapper>
        </Row>
        {/* <Row gutter={[48, 0]}>
          <FormItemWrapper colProps={{ span: 8 }} label="Passport Number*">
            <Input
              disabled={isEditable}
              size="large"
              placeholder="Enter your first name"
            />
          </FormItemWrapper>
          <FormItemWrapper colProps={{ span: 8 }} label="Place Of Issue*">
            <Select
              disabled={isEditable}
              size="large"
              placeholder="Enter your first name"
            />
          </FormItemWrapper>
          <FormItemWrapper colProps={{ span: 4 }} label="Passport Issue Date*">
            <DatePicker
              disabled={isEditable}
              className="w-full"
              size="large"
              placeholder="Enter your first name"
            />
          </FormItemWrapper>
          <FormItemWrapper colProps={{ span: 4 }} label="Passport Expiry Date*">
            <DatePicker
              disabled={isEditable}
              className="w-full"
              size="large"
              placeholder="Enter your first name"
            />
          </FormItemWrapper>
        </Row> */}
        {!isEditable && (
          <div className="mt-6">
            <PageBottomButtons
              cancelBtnProps={{
                loading: false,
                onClick: () => {
                  router.back();
                },
              }}
              saveBtnProps={{
                loading: false,
                htmlType: "submit",
              }}
              saveTitle="Next"
            />
          </div>
        )}
      </Form>
    </>
  );
}
