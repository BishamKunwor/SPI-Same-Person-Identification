import { Form, Input, Row } from "antd";
import FormItemWrapper from "../../FormItemWrapper";
import FormLabel from "../../FormLabel";
import PageBottomButtons from "../../PageBottomButtons";

interface BoDetailsArgs {
    next?(): void,
    prev?(): void,
    calledFrom: "edit" | "review"
}

export default function BoDetailsForm({ prev = () => { }, next = () => { }, calledFrom }: BoDetailsArgs) {
    const isEditable = calledFrom !== "edit";
    const formItemNames = {
        listOfBordMembers: {
            nameOne: "nameOne",
            addressOne: "addressOne",
            contactNoOne: "contactNoOne",
            emailOne: "emailOne",
        },
        cheifExecutiveOfficers: {
            chiefName: "chiefName",
            chiefAddress: "chiefAddress",
            chiefContact: "chiefContact",
            chiefEmail: "chiefEmail",
        }
    }
    return <>
        <FormLabel className="text-purple mb-6">List of Board Members</FormLabel>
        <Form onFinish={(data) => { console.log(data); next() }}>
            <Row gutter={[48, 0]}>
                <FormItemWrapper
                    label={"Name"}
                    labelAlignment="vertical"
                    colProps={{ span: 6 }}
                    formItemsProps={{ name: formItemNames.listOfBordMembers.nameOne }}
                >
                    <Input disabled={isEditable} placeholder="Enter Full Name" />
                </FormItemWrapper>

                <FormItemWrapper
                    label={"Address*"}
                    labelAlignment="vertical"
                    colProps={{ span: 6 }}
                    formItemsProps={{ name: formItemNames.listOfBordMembers.addressOne }}
                >
                    <Input disabled={isEditable} placeholder="Enter Address" />
                </FormItemWrapper>
                <FormItemWrapper
                    label={"Contact No*"}
                    labelAlignment="vertical"
                    colProps={{ span: 6 }}
                    formItemsProps={{ name: formItemNames.listOfBordMembers.contactNoOne }}
                >
                    <Input disabled={isEditable} placeholder="Enter Phone No" />
                </FormItemWrapper>
                <FormItemWrapper
                    label={"Email*"}
                    labelAlignment="vertical"
                    colProps={{ span: 6 }}
                    formItemsProps={{ name: formItemNames.listOfBordMembers.emailOne }}
                >
                    <Input disabled={isEditable} placeholder="Email Address" />
                </FormItemWrapper>
            </Row>
            <Row gutter={[48, 0]}>
                <FormItemWrapper
                    label={""}
                    labelAlignment="vertical"
                    colProps={{ span: 6 }}
                >
                    <Input disabled={isEditable} placeholder="Enter Full Name" />
                </FormItemWrapper>

                <FormItemWrapper
                    label={""}
                    labelAlignment="vertical"
                    colProps={{ span: 6 }}
                >
                    <Input disabled={isEditable} placeholder="Enter Address" />
                </FormItemWrapper>
                <FormItemWrapper
                    label={""}
                    labelAlignment="vertical"
                    colProps={{ span: 6 }}
                >
                    <Input disabled={isEditable} placeholder="Enter Phone No" />
                </FormItemWrapper>
                <FormItemWrapper
                    label={""}
                    labelAlignment="vertical"
                    colProps={{ span: 6 }}
                >
                    <Input disabled={isEditable} placeholder="Email Address" />
                </FormItemWrapper>
            </Row>
            <Row gutter={[48, 0]}>
                <FormItemWrapper
                    label={""}
                    labelAlignment="vertical"
                    colProps={{ span: 6 }}
                >
                    <Input disabled={isEditable} placeholder="Enter Full Name" />
                </FormItemWrapper>

                <FormItemWrapper
                    label={""}
                    labelAlignment="vertical"
                    colProps={{ span: 6 }}
                >
                    <Input disabled={isEditable} placeholder="Enter Address" />
                </FormItemWrapper>
                <FormItemWrapper
                    label={""}
                    labelAlignment="vertical"
                    colProps={{ span: 6 }}
                >
                    <Input disabled={isEditable} placeholder="Enter Phone No" />
                </FormItemWrapper>
                <FormItemWrapper
                    label={""}
                    labelAlignment="vertical"
                    colProps={{ span: 6 }}
                >
                    <Input disabled={isEditable} placeholder="Email Address" />
                </FormItemWrapper>
            </Row>
            <Row gutter={[48, 0]}>
                <FormItemWrapper
                    label={""}
                    labelAlignment="vertical"
                    colProps={{ span: 6 }}
                >
                    <Input disabled={isEditable} placeholder="Enter Full Name" />
                </FormItemWrapper>

                <FormItemWrapper
                    label={""}
                    labelAlignment="vertical"
                    colProps={{ span: 6 }}
                >
                    <Input disabled={isEditable} placeholder="Enter Address" />
                </FormItemWrapper>
                <FormItemWrapper
                    label={""}
                    labelAlignment="vertical"
                    colProps={{ span: 6 }}
                >
                    <Input disabled={isEditable} placeholder="Enter Phone No" />
                </FormItemWrapper>
                <FormItemWrapper
                    label={""}
                    labelAlignment="vertical"
                    colProps={{ span: 6 }}
                >
                    <Input disabled={isEditable} placeholder="Email Address" />
                </FormItemWrapper>
            </Row>
            <Row gutter={[48, 0]}>
                <FormItemWrapper
                    label={""}
                    labelAlignment="vertical"
                    colProps={{ span: 6 }}
                >
                    <Input disabled={isEditable} placeholder="Enter Full Name" />
                </FormItemWrapper>

                <FormItemWrapper
                    label={""}
                    labelAlignment="vertical"
                    colProps={{ span: 6 }}
                >
                    <Input disabled={isEditable} placeholder="Enter Address" />
                </FormItemWrapper>
                <FormItemWrapper
                    label={""}
                    labelAlignment="vertical"
                    colProps={{ span: 6 }}
                >
                    <Input disabled={isEditable} placeholder="Enter Phone No" />
                </FormItemWrapper>
                <FormItemWrapper
                    label={""}
                    labelAlignment="vertical"
                    colProps={{ span: 6 }}
                >
                    <Input disabled={isEditable} placeholder="Email Address" />
                </FormItemWrapper>
            </Row>
            <Row gutter={[48, 0]}>
                <FormItemWrapper
                    label={""}
                    labelAlignment="vertical"
                    colProps={{ span: 6 }}
                >
                    <Input disabled={isEditable} placeholder="Enter Full Name" />
                </FormItemWrapper>

                <FormItemWrapper
                    label={""}
                    labelAlignment="vertical"
                    colProps={{ span: 6 }}
                >
                    <Input disabled={isEditable} placeholder="Enter Address" />
                </FormItemWrapper>
                <FormItemWrapper
                    label={""}
                    labelAlignment="vertical"
                    colProps={{ span: 6 }}
                >
                    <Input disabled={isEditable} placeholder="Enter Phone No" />
                </FormItemWrapper>
                <FormItemWrapper
                    label={""}
                    labelAlignment="vertical"
                    colProps={{ span: 6 }}
                >
                    <Input disabled={isEditable} placeholder="Email Address" />
                </FormItemWrapper>
            </Row>
            <FormLabel className="text-purple my-8">Chief Executive Officers Details</FormLabel>
            <Row gutter={[48, 0]}>
                <FormItemWrapper
                    label={"Name"}
                    labelAlignment="vertical"
                    colProps={{ span: 6 }}
                    formItemsProps={{ name: formItemNames.cheifExecutiveOfficers.chiefName }}
                >
                    <Input disabled={isEditable} placeholder="Enter Full Name" />
                </FormItemWrapper>

                <FormItemWrapper
                    label={"Address*"}
                    labelAlignment="vertical"
                    colProps={{ span: 6 }}
                    formItemsProps={{ name: formItemNames.cheifExecutiveOfficers.chiefAddress }}
                >
                    <Input disabled={isEditable} placeholder="Enter Address" />
                </FormItemWrapper>
                <FormItemWrapper
                    label={"Contact No*"}
                    labelAlignment="vertical"
                    colProps={{ span: 6 }}
                    formItemsProps={{ name: formItemNames.cheifExecutiveOfficers.chiefContact }}
                >
                    <Input disabled={isEditable} placeholder="Enter Phone No" />
                </FormItemWrapper>
                <FormItemWrapper
                    label={"Email*"}
                    labelAlignment="vertical"
                    colProps={{ span: 6 }}
                    formItemsProps={{ name: formItemNames.cheifExecutiveOfficers.chiefEmail }}
                >
                    <Input disabled={isEditable} placeholder="Email Address" />
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