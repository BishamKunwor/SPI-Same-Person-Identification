import { Col, Form, Input, Radio, Row, Select } from "antd";
import AccSetupFormHeading from "../../AccSetupFormHeading";
import FormItemWrapper from "../../FormItemWrapper";
import FormLabel from "../../FormLabel";
import PageBottomButtons from "../../PageBottomButtons";

interface ClientNomineeArgs {
    prev?(): void,
    next?(): void,
    calledFrom?: "review" | "edit"
}

export default function ClientNomineeForm({ prev = () => { }, next = () => { }, calledFrom = "edit" }: ClientNomineeArgs) {
    const isEditable = calledFrom !== "edit";
    return <>
        <Form onFinish={(data) => { console.log(data); next(); }}>
            <AccSetupFormHeading className="mb-4">Nominee Details</AccSetupFormHeading>
            <div className="mt-6"></div>
            <Row gutter={[48, 0]}>
                <Col>
                    <div className="flex space-x-12 items-baseline">
                        <FormLabel>Do you want to provide details of Nominee*</FormLabel>
                        <FormItemWrapper
                            labelAlignment="horizontal"
                            colProps={{ span: 12 }}
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
                                <div className="flex space-x-12">
                                    <Radio disabled={isEditable} value={""}>
                                        <FormLabel>Yes</FormLabel>
                                    </Radio>
                                    <Radio disabled={isEditable} value={""}>
                                        <FormLabel>No</FormLabel>
                                    </Radio>
                                </div>
                            </Radio.Group>
                        </FormItemWrapper>
                    </div>
                </Col>
            </Row>
            <Row gutter={[48, 0]}>
                <FormItemWrapper label="Nominee’s Name*" colProps={{ span: 8 }} >
                    <Input disabled={isEditable} size="large" placeholder="Enter full name of nominee" />
                </FormItemWrapper>
                <FormItemWrapper label="Relationship to me*" colProps={{ span: 8 }} >
                    <Select disabled={isEditable} size="large" placeholder="Select relationship with nominee" />
                </FormItemWrapper>
            </Row>
            <Row gutter={[48, 0]}>
                <FormItemWrapper label="Reference Document of Nominee*" colProps={{ span: 8 }} >
                    <Radio.Group
                    //   onChange={(data) => {
                    //     console.log(data);
                    //   }}
                    //   value={1}
                    >
                        <div className="flex space-x-12">
                            <Radio disabled={isEditable} value={""}>
                                <FormLabel>Citizenship</FormLabel>
                            </Radio>
                            <Radio disabled={isEditable} value={""}>
                                <FormLabel>Passport</FormLabel>
                            </Radio>
                            <Radio disabled={isEditable} value={""}>
                                <FormLabel>Birth Certificate</FormLabel>
                            </Radio>
                        </div>
                    </Radio.Group>
                </FormItemWrapper>
                <FormItemWrapper label="Document Number*" colProps={{ span: 8 }} >
                    <Input disabled={isEditable} size="large" placeholder="Enter document identification number of nominee" />
                </FormItemWrapper>
                <FormItemWrapper label="Place of Issue*" colProps={{ span: 8 }} >
                    <Select disabled={isEditable} size="large" placeholder="Select from dropdown" />
                </FormItemWrapper>
            </Row>
            <Row gutter={[48, 0]}>
                <FormItemWrapper label="Age*" colProps={{ span: 8 }} >
                    <Input disabled={isEditable} size="large" placeholder="Enter age of nominee" />
                </FormItemWrapper>
                <FormItemWrapper label="PAN No.*" colProps={{ span: 8 }} >
                    <Input disabled={isEditable} size="large" placeholder="Enter PAN of nominee" />
                </FormItemWrapper>
            </Row>
            <AccSetupFormHeading className="mb-4">Nominee Contact Details</AccSetupFormHeading>
            <Row gutter={[48, 0]}>
                <FormItemWrapper label="Nominee Address*" colProps={{ span: 8 }} >
                    <Select disabled={isEditable} size="large" placeholder="Select from dropdown" />
                </FormItemWrapper>
                <FormItemWrapper label="Mobile No.*" colProps={{ span: 8 }} >
                    <Input disabled={isEditable} size="large" placeholder="Enter nominee's mobile number" />
                </FormItemWrapper>
                <FormItemWrapper label="Email*" colProps={{ span: 8 }} >
                    <Input disabled={isEditable} size="large" placeholder="Enter nominee's email" />
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
                        cancelTitle="Previous"
                        saveTitle="Next"
                    />
                </div>
            }
        </Form>
    </>
}