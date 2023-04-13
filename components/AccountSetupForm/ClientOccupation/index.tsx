import { Form, Input, Row, Select } from "antd"
import FormItemWrapper from "../../FormItemWrapper"
import FormLabel from "../../FormLabel"
import PageBottomButtons from "../../PageBottomButtons"

interface ClientOccupationArgs {
    prev?(): void,
    next?(): void,
    calledFrom?: "review" | "edit"
}

export default function ClientOccupationForm({ prev = () => { }, next = () => { }, calledFrom = "edit" }: ClientOccupationArgs) {
    const isEditable = calledFrom !== "edit";
    return <>
        <Form onFinish={(data) => { console.log(data); next() }}>
            <FormLabel className="text-purple text-lg mb-4">Occupation</FormLabel>
            <Row gutter={[48, 0]}>
                <FormItemWrapper colProps={{ span: 8 }} label="Occupation*">
                    <Input disabled={isEditable} size="large" placeholder="Enter your first name" />
                </FormItemWrapper>
                <FormItemWrapper colProps={{ span: 8 }} label="PAN NO.">
                    <Input disabled={isEditable} size="large" placeholder="Enter your first name" />
                </FormItemWrapper>
            </Row>
            <Row gutter={[48, 0]}>
                <FormItemWrapper colProps={{ span: 8 }} label="Nature of business">
                    <Select disabled={isEditable} size="large" placeholder="Enter your first name" />
                </FormItemWrapper>
                <FormItemWrapper colProps={{ span: 8 }} label="Organization's name">
                    <Select disabled={isEditable} size="large" placeholder="Enter your first name" />
                </FormItemWrapper>
                <FormItemWrapper colProps={{ span: 8 }} label="Organization Address">
                    <Select disabled={isEditable} size="large" placeholder="Enter your first name" />
                </FormItemWrapper>
            </Row>
            <Row gutter={[48, 0]}>
                <FormItemWrapper colProps={{ span: 8 }} label="Designation">
                    <Input disabled={isEditable} size="large" placeholder="Enter your first name" />
                </FormItemWrapper>
                <FormItemWrapper colProps={{ span: 8 }} label="Employee ID">
                    <Input disabled={isEditable} size="large" placeholder="Enter your first name" />
                </FormItemWrapper>
                <FormItemWrapper colProps={{ span: 8 }} label="Annual Income">
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