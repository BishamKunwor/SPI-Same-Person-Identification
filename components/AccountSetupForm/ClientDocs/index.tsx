import { Button, Col, Form, Row, Upload } from "antd";
import AccSetupFormHeading from "../../AccSetupFormHeading";
import NormalBtn from "../../Btn/BtnNormal";
import FormItemWrapper from "../../FormItemWrapper";
import * as colors from "../../../variables/themes";
interface ClientDocsArgs {
    next?(): void,
    prev?(): void,
}

export default function ClientDocsForm({ next = () => { }, prev = () => { } }: ClientDocsArgs) {
    const uploadProps = {
        maxCount: 1,
        beforeUpload(data: File) {
            const file = new FileReader();
            file.readAsText(data);
            file.onload = (txtContent: ProgressEvent<FileReader>) => {
                console.log(txtContent.target?.result);
            };
        },
    };
    return <div className="client-docs">
        <Form onFinish={(data) => { console.log(data); next() }}>
            <AccSetupFormHeading className="mb-4">Upload Documents</AccSetupFormHeading>
            <AccSetupFormHeading className="mb-4">Required Documents of Applicant</AccSetupFormHeading>
            <div className="space-y-2">
                <Row>
                    <Col span={8}>
                        <div className="font-bold text-sm leading-6">Passport size photo</div>
                    </Col>
                    <Col span={9}>
                        <Form.Item>
                            <Upload listType="picture" className="grid grid-cols-2">
                                <NormalBtn tokenConfig={{
                                    controlHeight: 30, colorPrimary: colors.goldYellow,
                                    colorBorder: colors.primaryColor,
                                }} btnProps={{ type: "primary" }} title={<p className="px-12 font-normal">Choose file</p>} titleColor={"primary"} />
                            </Upload>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <div className="font-bold text-sm leading-6">Citizenship Copy Front</div>
                    </Col>
                    <Col span={9}>
                        <Form.Item>
                            <Upload listType="picture" className="grid grid-cols-2">
                                <NormalBtn tokenConfig={{
                                    controlHeight: 30, colorPrimary: colors.goldYellow,
                                    colorBorder: colors.primaryColor,
                                }} btnProps={{ type: "primary" }} title={<p className="px-12 font-normal">Choose file</p>} titleColor={"primary"} />
                            </Upload>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <div className="font-bold text-sm leading-6">Citizenship Copy Back</div>
                    </Col>
                    <Col span={9}>
                        <Form.Item>
                            <Upload listType="picture" className="grid grid-cols-2">
                                <NormalBtn tokenConfig={{
                                    controlHeight: 30, colorPrimary: colors.goldYellow,
                                    colorBorder: colors.primaryColor,
                                }} btnProps={{ type: "primary" }} title={<p className="px-12 font-normal">Choose file</p>} titleColor={"primary"} />
                            </Upload>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <div className="font-bold text-sm leading-6">Applicants Signature</div>
                    </Col>
                    <Col span={9}>
                        <Form.Item>
                            <Upload listType="picture" className="grid grid-cols-2">
                                <NormalBtn tokenConfig={{
                                    controlHeight: 30, colorPrimary: colors.goldYellow,
                                    colorBorder: colors.primaryColor,
                                }} btnProps={{ type: "primary" }} title={<p className="px-12 font-normal">Choose file</p>} titleColor={"primary"} />
                            </Upload>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <div className="font-bold text-sm leading-6">Applicants thumb print</div>
                    </Col>
                    <Col span={9}>
                        <Form.Item>
                            <Upload listType="picture" className="grid grid-cols-2">
                                <NormalBtn tokenConfig={{
                                    controlHeight: 30, colorPrimary: colors.goldYellow,
                                    colorBorder: colors.primaryColor,
                                }} btnProps={{ type: "primary" }} title={<p className="px-12 font-normal">Choose file</p>} titleColor={"primary"} />
                            </Upload>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <div className="font-bold text-sm leading-6">Applicants Photo with Citizenship</div>
                    </Col>
                    <Col span={9}>
                        <Form.Item>
                            <Upload listType="picture" className="grid grid-cols-2">
                                <NormalBtn tokenConfig={{
                                    controlHeight: 30, colorPrimary: colors.goldYellow,
                                    colorBorder: colors.primaryColor,
                                }} btnProps={{ type: "primary" }} title={<p className="px-12 font-normal">Choose file</p>} titleColor={"primary"} />
                            </Upload>
                        </Form.Item>
                    </Col>
                </Row>
            </div>
        </Form>
    </div>
}