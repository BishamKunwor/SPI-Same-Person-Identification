import { Button, Col, ConfigProvider, Input, Modal } from "antd";
import TableWrapper from "../../TableWrapper";
import { useEffect, useState } from "react";
import store from "store";
import ClientReviewPage from "../../AccountSetupForm/ClientReviewPage";
import moment from "moment";
import NormalBtn from "../../Btn/BtnNormal";

export default function KycVerification() {
  const [dataSource, setDataSource] = useState([]);
  const [showUserDetailsModal, setShowUserDetailsModal] = useState(false);
  const [activeUserDetails, setActiveUserDetails] = useState({});
  useEffect(() => {
    console.log("useeffect runned");
    const createDematStoreData = store.get("createDematAccount");
    if (Object.keys(createDematStoreData).length > 0) {
      if (dataSource.length === 0) {
        setDataSource(createDematStoreData);
        setActiveUserDetails(createDematStoreData[0]);
      }
    }
  }, []);

  const onAddIntoDatabase = () => {
    console.log(activeUserDetails);
  };

  const onRejectUserApplication = () => {
    console.log(activeUserDetails);
  };

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
        // setActiveUserDetails(record);
        return (
          <div className="flex gap-4 flex-wrap">
            <Button
              // onMouseEnter={() => {
              //   console.log(activeUserDetails);
              //   setActiveUserDetails((data) => {
              //     console.log(data);
              //     return record;
              //   });
              // }}
              onClick={() => {
                setActiveUserDetails((data) => {
                  if (data === record) {
                    return data;
                  }
                  return record;
                });
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
              <Button
                type="primary"
                onClick={() => {
                  console.log(record);
                }}
              >
                Run SPI Check
              </Button>
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
          <div className="text-lg font-bold text-black/80">Verify KYC Form</div>
          {/* <Col span={4}>
            <Input prefix={magnifyingGlassIcon} />
          </Col> */}
        </div>
        <TableWrapper columns={columns} dataSource={dataSource} />
      </div>
      <Modal
        width={1200}
        open={showUserDetailsModal}
        footer={false}
        onCancel={() => setShowUserDetailsModal(false)}
      >
        <div className="rounded-lg bg-gray-800 my-6 p-2 px-4">
          <div className="text-white font-bold text-2xl">
            Verify Details and Add User to the Database
          </div>
          <div className="flex gap-8 justify-end">
            <NormalBtn
              tokenConfig={{
                controlHeight: 30,
                colorPrimary: "#3a86ff",
                colorBorder: "#3a86ff",
              }}
              btnProps={{ type: "primary", onClick: onAddIntoDatabase }}
              title={<p className="px-2 font-medium text-white">Accept</p>}
              titleColor={"primary"}
            />
            <NormalBtn
              tokenConfig={{
                controlHeight: 30,
                colorPrimary: "#d00000",
                colorBorder: "#d00000",
              }}
              btnProps={{ type: "primary", onClick: onRejectUserApplication }}
              title={<p className="px-2 font-medium text-white">Reject</p>}
              titleColor={"primary"}
            />
          </div>
        </div>
        <ClientReviewPage
          calledFrom="review"
          formData={activeUserDetails}
          setFormData={() => {}}
        />
      </Modal>
    </>
  );
}
