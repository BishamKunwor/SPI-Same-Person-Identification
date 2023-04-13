import { Col, Input } from "antd";
import Link from "next/link";
import { magnifyingGlassIcon } from "../../../public/icons";
import { tableActionRender } from "../../../utils";
import BtnWithIcon from "../../Btn/BtnWithIcon";
import TableWrapper from "../../TableWrapper";

export default function KycVerification() {
    const columns = [
        {
            title: "Charge",
            key: "charge",
            dataIndex: "charge",
            render(data: string) {
                return (
                    <div className="font-[500] text-sm text-primaryColor">{data}</div>
                );
            },
        },
        {
            title: "Type",
            key: "type",
            dataIndex: "type",
            render(data: string) {
                return (
                    <div className="font-[500] text-sm text-primaryColor">{data}</div>
                );
            },
        },
        {
            title: "Status",
            key: "status",
            dataIndex: "status",
            render(data: string) {
                return (
                    <div className="font-[500] text-sm text-primaryColor">{data}</div>
                );
            },
        },
        {
            title: "Action",
            key: "action",
            dataIndex: "action",
            render: tableActionRender,
        },
    ];
    const datasource = [];
    for (let i = 0; i < 8; i++) {
        datasource.push({
            key: i * i,
            charge: "Entry Management Fee",
            type: "Percentage",
            status: "Approved",
        });
    }
    return <>
        <div className="flex justify-between items-center">
            <Link href="/">
                <BtnWithIcon
                    btnProps={{
                        loading: false,
                        type: "primary",
                    }}
                    title={"ADD NEW"}
                />
            </Link>
        </div>
        <div className="pt-8 flex flex-col space-y-4">
            <div className="flex justify-end">
                <Col span={4}>
                    <Input prefix={magnifyingGlassIcon} />
                </Col>
            </div>
            <TableWrapper columns={columns} dataSource={datasource} />
        </div>
    </>
}