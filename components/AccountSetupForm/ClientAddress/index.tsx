import { Form, Input, Row, Select } from "antd";
import FormItemWrapper from "../../FormItemWrapper";
import FormLabel from "../../FormLabel";
import PageBottomButtons from "../../PageBottomButtons";

interface ClientAddressArguments {
  prev?(): void;
  next?(): void;
  calledFrom?: "review" | "edit";
  setAddressTabForm: (data: any) => void;
}

export default function ClientAddressForm({
  prev = () => {},
  next = () => {},
  calledFrom = "edit",
  setAddressTabForm,
}: ClientAddressArguments) {
  const isEditable = calledFrom !== "edit";
  return (
    <>
      <Form
        onFinish={(data) => {
          console.log(data);
          setAddressTabForm(data);
          next();
        }}
      >
        <FormLabel className="text-purple text-lg mb-4">
          Contact Details
        </FormLabel>
        <Row gutter={[48, 0]}>
          <FormItemWrapper
            colProps={{ span: 8 }}
            label="Telephone Number"
            formItemsProps={{
              name: "telephoneNo",
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
            label="Mobile Number*"
            formItemsProps={{
              name: "mobileNo",
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
            label="Email*"
            formItemsProps={{
              name: "email",
            }}
          >
            <Input
              disabled={isEditable}
              size="large"
              placeholder="Enter your first name"
            />
          </FormItemWrapper>
        </Row>
        <FormLabel className="text-purple text-lg mb-4">
          Permanent Address
        </FormLabel>
        <Row gutter={[48, 0]}>
          <FormItemWrapper
            colProps={{ span: 8 }}
            label="Country*"
            formItemsProps={{
              name: "country",
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
            label="Province*"
            formItemsProps={{
              name: "province",
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
            label="District*"
            formItemsProps={{
              name: "district",
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
            label="Gaupalika / Nagarpalika*"
            formItemsProps={{
              name: "gaupalikaNagarpalika",
            }}
          >
            <Select
              disabled={isEditable}
              size="large"
              placeholder="Enter your first name"
            />
          </FormItemWrapper>
          <FormItemWrapper
            colProps={{ span: 8 }}
            label="Ward No."
            formItemsProps={{
              name: "wardNo",
            }}
          >
            <Select
              disabled={isEditable}
              size="large"
              placeholder="Enter your first name"
            />
          </FormItemWrapper>
          <FormItemWrapper
            colProps={{ span: 8 }}
            label="Tole*"
            formItemsProps={{
              name: "tole",
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
            colProps={{ span: 8 }}
            label="House/Block Number"
            formItemsProps={{
              name: "houseNo",
            }}
          >
            <Input
              disabled={isEditable}
              size="large"
              placeholder="Enter your first name"
            />
          </FormItemWrapper>
        </Row>
        <FormLabel className="text-purple text-lg mb-4">
          Current Address
        </FormLabel>
        <Row gutter={[48, 0]}>
          <FormItemWrapper
            colProps={{ span: 8 }}
            label="Country*"
            formItemsProps={{
              name: "currentCountry",
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
            label="Province*"
            formItemsProps={{
              name: "currentProvince",
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
            label="District*"
            formItemsProps={{
              name: "currentDistrict",
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
            label="Gaupalika / Nagarpalika*"
            formItemsProps={{
              name: "currentGaupalika",
            }}
          >
            <Select
              disabled={isEditable}
              size="large"
              placeholder="Enter your first name"
            />
          </FormItemWrapper>
          <FormItemWrapper
            colProps={{ span: 8 }}
            label="Ward No."
            formItemsProps={{
              name: "currentWardNo",
            }}
          >
            <Select
              disabled={isEditable}
              size="large"
              placeholder="Enter your first name"
            />
          </FormItemWrapper>
          <FormItemWrapper
            colProps={{ span: 8 }}
            label="Tole*"
            formItemsProps={{
              name: "currentTole",
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
            colProps={{ span: 8 }}
            label="House/Block Number"
            formItemsProps={{
              name: "currentHouseNo",
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
