import { Button, Col, ConfigProvider, Input, Modal } from "antd";
import Link from "next/link";
import { magnifyingGlassIcon } from "../../../public/icons";
import { tableActionRender } from "../../../utils";
import BtnWithIcon from "../../Btn/BtnWithIcon";
import TableWrapper from "../../TableWrapper";
import { useEffect, useState } from "react";
import store from "store";
import ClientReviewPage from "../../AccountSetupForm/ClientReviewPage";
import moment from "moment";

export default function KycVerification() {
  const [dataSource, setDataSource] = useState([]);
  const [showUserDetailsModal, setShowUserDetailsModal] = useState(false);
  const [activeUserDetails, setActiveUserDetails] = useState({});
  useEffect(() => {
    const createDematStoreData = store.get("createDematAccount");
    if (Object.keys(createDematStoreData).length > 0) {
      if (dataSource.length === 0) {
        setDataSource(createDematStoreData);
        setActiveUserDetails(createDematStoreData[0]);
      }
    }
  });
  const columns = [
    {
      title: "First Name",
      key: "firstName",
      dataIndex: "firstName",
      render(data: string) {
        return (
          <div className="font-[500] text-sm text-primaryColor">{data}</div>
        );
      },
    },

    {
      title: "Last Name",
      key: "lastName",
      dataIndex: "lastName",
      render(data: string) {
        return (
          <div className="font-[500] text-sm text-primaryColor">{data}</div>
        );
      },
    },
    {
      title: "Citizenship No.",
      key: "citizenshipNo",
      dataIndex: "citizenshipNo",
      render(data: string) {
        return (
          <div className="font-[500] text-sm text-primaryColor">{data}</div>
        );
      },
    },
    {
      title: "DOB",
      key: "dateOfBirthBS",
      dataIndex: "dateOfBirthBS",
      render(data: string) {
        return (
          <div className="font-[500] text-sm text-primaryColor">
            {moment(data).format("YYYY-MM-DD")}
          </div>
        );
      },
    },
    {
      title: "Father Name",
      key: "fatherName",
      dataIndex: "fatherName",
      render(data: string) {
        return (
          <div className="font-[500] text-sm text-primaryColor">{data}</div>
        );
      },
    },
    {
      title: "Grand Father Name",
      key: "grandFatherName",
      dataIndex: "grandFatherName",
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
      render: (_: any, record: any) => {
        // console.log(record);
        setActiveUserDetails(record);
        return (
          <div className="flex gap-4 flex-wrap">
            <Button
              onClick={() => {
                setShowUserDetailsModal(true);
              }}
            >
              View Details
            </Button>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#53A895",
                },
              }}
            >
              <Button type="primary">Run SPI Check</Button>
            </ConfigProvider>
          </div>
        );
      },
    },
  ];
  // const datasource = [];
  // for (let i = 0; i < 8; i++) {
  //     datasource.push({
  //         key: i * i,
  //         charge: "Entry Management Fee",
  //         type: "Percentage",
  //         status: "Approved",
  //     });
  // }
  return (
    <>
      <div className="flex justify-end items-center">
        <Button type="primary">
          <span className="px-4">Show All Users In Database</span>
        </Button>
      </div>
      <div className="pt-8 flex flex-col space-y-4">
        <div className="flex justify-between">
          <div className="text-xl font-bold text-black/80">Verify KYC Form</div>
          <Col span={4}>
            <Input prefix={magnifyingGlassIcon} />
          </Col>
        </div>
        <TableWrapper columns={columns} dataSource={dataSource} />
      </div>
      <Modal
        width={1200}
        open={showUserDetailsModal}
        footer={false}
        onCancel={() => setShowUserDetailsModal(false)}
      >
        <ClientReviewPage
          calledFrom="review"
          formData={activeUserDetails}
          setFormData={() => {}}
        />
      </Modal>
    </>
  );
}
