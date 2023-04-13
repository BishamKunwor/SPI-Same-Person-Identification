import { Form, Input, Row, Select } from "antd"
import FormItemWrapper from "../../FormItemWrapper"
import FormLabel from "../../FormLabel"
import PageBottomButtons from "../../PageBottomButtons"

interface ClientAddressArguments {
    prev?(): void,
    next?(): void,
    calledFrom?: "review" | "edit"
}


export default function ClientAddressForm({ prev = () => { }, next = () => { }, calledFrom = "edit" }: ClientAddressArguments) {
    const isEditable = calledFrom !== "edit";
    return <>
        <Form onFinish={(data) => { console.log(data); next() }}>
            <FormLabel className="text-purple text-lg mb-4">Contact Details</FormLabel>
            <Row gutter={[48, 0]}>
                <FormItemWrapper colProps={{ span: 8 }} label="Telephone Number">
                    <Input disabled={isEditable} size="large" placeholder="Enter your first name" />
                </FormItemWrapper>
                <FormItemWrapper colProps={{ span: 8 }} label="Mobile Number*">
                    <Input disabled={isEditable} size="large" placeholder="Enter your first name" />
                </FormItemWrapper>
                <FormItemWrapper colProps={{ span: 8 }} label="Email*">
                    <Input disabled={isEditable} size="large" placeholder="Enter your first name" />
                </FormItemWrapper>
            </Row>
            <FormLabel className="text-purple text-lg mb-4">Permanent Address</FormLabel>
            <Row gutter={[48, 0]}>
                <FormItemWrapper colProps={{ span: 8 }} label="Country*">
                    <Input disabled={isEditable} size="large" placeholder="Enter your first name" />
                </FormItemWrapper>
                <FormItemWrapper colProps={{ span: 8 }} label="Province*">
                    <Input disabled={isEditable} size="large" placeholder="Enter your first name" />
                </FormItemWrapper>
                <FormItemWrapper colProps={{ span: 8 }} label="District*">
                    <Input disabled={isEditable} size="large" placeholder="Enter your first name" />
                </FormItemWrapper>
            </Row>
            <Row gutter={[48, 0]}>
                <FormItemWrapper colProps={{ span: 8 }} label="Gaupalika / Nagarpalika*">
                    <Select disabled={isEditable} size="large" placeholder="Enter your first name" />
                </FormItemWrapper>
                <FormItemWrapper colProps={{ span: 8 }} label="Ward No.">
                    <Select disabled={isEditable} size="large" placeholder="Enter your first name" />
                </FormItemWrapper>
                <FormItemWrapper colProps={{ span: 8 }} label="Tole*">
                    <Select disabled={isEditable} size="large" placeholder="Enter your first name" />
                </FormItemWrapper>
            </Row>
            <Row gutter={[48, 0]}>
                <FormItemWrapper colProps={{ span: 8 }} label="House/Block Number">
                    <Input disabled={isEditable} size="large" placeholder="Enter your first name" />
                </FormItemWrapper>
            </Row>
            <FormLabel className="text-purple text-lg mb-4">Current Address</FormLabel>
            <Row gutter={[48, 0]}>
                <FormItemWrapper colProps={{ span: 8 }} label="Country*">
                    <Input disabled={isEditable} size="large" placeholder="Enter your first name" />
                </FormItemWrapper>
                <FormItemWrapper colProps={{ span: 8 }} label="Province*">
                    <Input disabled={isEditable} size="large" placeholder="Enter your first name" />
                </FormItemWrapper>
                <FormItemWrapper colProps={{ span: 8 }} label="District*">
                    <Input disabled={isEditable} size="large" placeholder="Enter your first name" />
                </FormItemWrapper>
            </Row>
            <Row gutter={[48, 0]}>
                <FormItemWrapper colProps={{ span: 8 }} label="Gaupalika / Nagarpalika*">
                    <Select disabled={isEditable} size="large" placeholder="Enter your first name" />
                </FormItemWrapper>
                <FormItemWrapper colProps={{ span: 8 }} label="Ward No.">
                    <Select disabled={isEditable} size="large" placeholder="Enter your first name" />
                </FormItemWrapper>
                <FormItemWrapper colProps={{ span: 8 }} label="Tole*">
                    <Select disabled={isEditable} size="large" placeholder="Enter your first name" />
                </FormItemWrapper>
            </Row>
            <Row gutter={[48, 0]}>
                <FormItemWrapper colProps={{ span: 8 }} label="House/Block Number">
                    <Input disabled={isEditable} size="large" placeholder="Enter your first name" />
                </FormItemWrapper>
            </Row>
            {
                !isEditable &&
                <div className="mt-6">
                    <PageBottomButtons
                        cancelBtnProps={{ loading: false, onClick: () => { prev() } }}
                        saveBtnProps={{
                            loading: false,
                            htmlType: "submit",
                        }}
                        saveTitle="Next"
                        cancelTitle="Previous"
                    />
                </div>
            }
        </Form>
    </>
}