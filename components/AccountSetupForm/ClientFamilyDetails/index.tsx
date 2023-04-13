import { Form, Input, Row, Select } from "antd"
import FormItemWrapper from "../../FormItemWrapper"
import FormLabel from "../../FormLabel"
import PageBottomButtons from "../../PageBottomButtons"

interface ClientFamilyDetailsArgument {
    prev?(): void,
    next?(): void,
    calledFrom?: "review" | "edit"
}

export default function ClientFamilyDetailsForm({ prev = () => { }, next = () => { }, calledFrom = "edit" }: ClientFamilyDetailsArgument) {
    const isEditable = calledFrom !== "edit";
    return <>
        <Form onFinish={(data) => { console.log(data); next(); }}>
            <FormLabel className="text-purple text-lg mb-4">Family Details</FormLabel>
            <Row gutter={[48, 0]}>
                <FormItemWrapper colProps={{ span: 8 }} label="Grand Father's Name*">
                    <Input disabled={isEditable} size="large" placeholder="Enter your first name" />
                </FormItemWrapper>
                <FormItemWrapper colProps={{ span: 8 }} label="Father's Name*">
                    <Input disabled={isEditable} size="large" placeholder="Enter your first name" />
                </FormItemWrapper>
                <FormItemWrapper colProps={{ span: 8 }} label="Mother’s Name*">
                    <Input disabled={isEditable} size="large" placeholder="Enter your first name" />
                </FormItemWrapper>
            </Row>
            <Row gutter={[48, 0]}>
                <FormItemWrapper colProps={{ span: 8 }} label="Spouse’s Name">
                    <Select disabled={isEditable} size="large" placeholder="Enter your first name" />
                </FormItemWrapper>
                <FormItemWrapper colProps={{ span: 8 }} label="Son’s Name">
                    <Select disabled={isEditable} size="large" placeholder="Enter your first name" />
                </FormItemWrapper>
                <FormItemWrapper colProps={{ span: 8 }} label="Daughter’s Name">
                    <Select disabled={isEditable} size="large" placeholder="Enter your first name" />
                </FormItemWrapper>
            </Row>
            <Row gutter={[48, 0]}>
                <FormItemWrapper colProps={{ span: 8 }} label="Daughter in Law’s Name">
                    <Input disabled={isEditable} size="large" placeholder="Enter your first name" />
                </FormItemWrapper>
                <FormItemWrapper colProps={{ span: 8 }} label="Father’s in Law’s Name">
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