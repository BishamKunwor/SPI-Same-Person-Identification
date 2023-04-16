import { Button, Col, ConfigProvider, Input, Modal, message } from "antd";
import TableWrapper from "../../TableWrapper";
import { useEffect, useState } from "react";
import store from "store";
import ClientReviewPage from "../../AccountSetupForm/ClientReviewPage";
import moment from "moment";
import NormalBtn from "../../Btn/BtnNormal";
import SpiChecker from "../../../spi-core";

export default function KycVerification() {
  const [dataSource, setDataSource] = useState([]);
  const [showUserDetailsModal, setShowUserDetailsModal] = useState(false);
  const [activeUserDetails, setActiveUserDetails] = useState({}) as any;
  const [activeSpiUserDetails, setActiveSpiUserDetails] = useState({}) as any;
  const [showSpiDiffModel, setShowSpiDiffModel] = useState(false);
  const [spiData, setSpiData] = useState([]);
  const [showAllUserModal, setShowAllUserModal] = useState(false);
  const [allDbData, setAllDbData] = useState([]);
  const [showAllUserIndividualModal, setShowAllUserIndividualModal] =
    useState(false);

  const updateDbData = () => {
    const usersInfoDb = store.get("usersInfo");
    setAllDbData(usersInfoDb);
  };

  useEffect(() => {
    const createDematStoreData = store.get("createDematAccount");
    if (Object.keys(createDematStoreData).length > 0) {
      if (dataSource.length === 0) {
        setDataSource(createDematStoreData);
        setActiveUserDetails(createDematStoreData[0]);
      }
    }
  }, []);

  const onAddIntoDatabase = () => {
    const usersInfoDb = store.get("usersInfo");
    usersInfoDb.push(activeUserDetails);
    store.set("usersInfo", usersInfoDb);
    onRejectUserApplication("added");
    setSpiData([]);
  };

  const onRejectUserApplication = (type: string) => {
    const filteredData = dataSource.filter(
      (data) => data !== activeUserDetails
    );
    setDataSource([...filteredData]);
    setShowUserDetailsModal(false);
    store.set("createDematAccount", filteredData);
    message.success(`Successfully ${type} User's Record`);
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
        return (
          <div className="flex gap-4 flex-wrap">
            <Button
              onClick={() => {
                setActiveUserDetails((data: any) => {
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
                  // console.log(record);
                  setSpiData([]);
                  setActiveUserDetails((data: any) => {
                    if (data === record) {
                      return data;
                    }
                    return record;
                  });
                  const duplicates = SpiChecker(record) as [];
                  if (duplicates.length > 0) {
                    message.warning(
                      `Found ${duplicates.length} that needs your attention`
                    );
                  } else {
                    message.success("No Duplicated Found");
                  }
                  setTimeout(() => {
                    setSpiData(duplicates);
                  }, 500);
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

  const spiTableColumn = [
    {
      title: "First Name",
      key: "firstName",
      dataIndex: "firstName",
      render(data: string, record: any) {
        return (
          <div className="font-[500] text-sm text-primaryColor">
            {record.suspectedRecord.firstName}
          </div>
        );
      },
    },

    {
      title: "Last Name",
      key: "lastName",
      dataIndex: "lastName",
      render(data: string, record: any) {
        return (
          <div className="font-[500] text-sm text-primaryColor">
            {record.suspectedRecord.lastName}
          </div>
        );
      },
    },
    {
      title: "Citizenship No.",
      key: "citizenshipNo",
      dataIndex: "citizenshipNo",
      render(data: string, record: any) {
        return (
          <div className="font-[500] text-sm text-primaryColor">
            {record.suspectedRecord.citizenshipNo}
          </div>
        );
      },
    },
    {
      title: "DOB",
      key: "dateOfBirthBS",
      dataIndex: "dateOfBirthBS",
      render(data: string, record: any) {
        return (
          <div className="font-[500] text-sm text-primaryColor">
            {moment(record.suspectedRecord.dateOfBirthBS).format("YYYY-MM-DD")}
          </div>
        );
      },
    },
    {
      title: "Father Name",
      key: "fatherName",
      dataIndex: "fatherName",
      render(data: string, record: any) {
        return (
          <div className="font-[500] text-sm text-primaryColor">
            {record.suspectedRecord.fatherName}
          </div>
        );
      },
    },
    {
      title: "Grand Father Name",
      key: "grandFatherName",
      dataIndex: "grandFatherName",
      render(data: string, record: any) {
        return (
          <div className="font-[500] text-sm text-primaryColor">
            {record.suspectedRecord.grandFatherName}
          </div>
        );
      },
    },
    {
      title: "Matched Accuracy",
      key: "percentage",
      dataIndex: "percentage",
      render(data: string, record: any) {
        return <div className="text-sm text-red-500 font-bold">{data}</div>;
      },
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "action",
      render: (_: any, record: any) => {
        return (
          <div className="flex gap-4 flex-wrap">
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#E15562",
                },
              }}
            >
              <Button
                type="primary"
                onClick={() => {
                  setActiveSpiUserDetails(record.suspectedRecord);
                  setShowSpiDiffModel(true);
                }}
              >
                View Diff
              </Button>
            </ConfigProvider>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Modal
        open={showSpiDiffModel}
        onCancel={() => setShowSpiDiffModel(false)}
        footer={false}
        width={1300}
      >
        <div className="grid gap-8 grid-cols-2">
          <div className="overflow-scroll h-[920px]">
            <div className="font-bold text-xl my-4 text-red-500">
              Matched Result
            </div>
            <div className="my-4 space-y-4">
              <div className="">
                <img
                  className="h-48 w-48 border"
                  src={activeSpiUserDetails.passportSizePhoto}
                  alt=""
                />
                <div className="mt-2 font-semibold">Passport Size Photo</div>
              </div>
              <div className="">
                <img
                  className="h-48 w-48 border"
                  src={activeSpiUserDetails.applicantSignature}
                  alt=""
                />
                <div className="mt-2 font-semibold">Signature</div>
              </div>
            </div>
            <ClientReviewPage
              calledFrom="review"
              formData={activeSpiUserDetails}
              setFormData={() => {}}
            />
          </div>
          <div className="overflow-scroll h-[920px]">
            <div className="font-bold text-xl my-4 text-red-500">
              KYC Verification Pending User
            </div>
            <div className="my-4 space-y-4">
              <div className="">
                <img
                  className="h-48 w-48 border"
                  src={activeUserDetails.passportSizePhoto}
                  alt=""
                />
                <div className="mt-2 font-semibold">Passport Size Photo</div>
              </div>
              <div className="">
                <img
                  className="h-48 w-48 border"
                  src={activeUserDetails.applicantSignature}
                  alt=""
                />
                <div className="mt-2 font-semibold">Signature</div>
              </div>
            </div>
            <ClientReviewPage
              calledFrom="review"
              formData={activeUserDetails}
              setFormData={() => {}}
            />
          </div>
        </div>
      </Modal>
      <div className="flex justify-end items-center">
        <Button
          type="primary"
          onClick={() => {
            updateDbData();
            setShowAllUserModal(true);
          }}
        >
          <span className="px-4">Show All Users In Database</span>
        </Button>
      </div>
      <div className="pt-8 flex flex-col space-y-4">
        <div className="flex justify-between">
          <div className="text-xl font-bold text-black/80">Verify KYC Form</div>
          {/* <Col span={4}>
            <Input prefix={magnifyingGlassIcon} />
          </Col> */}
        </div>
        <TableWrapper columns={columns} dataSource={dataSource} />
      </div>
      <Modal
        open={showAllUserModal}
        footer={false}
        width={1300}
        onCancel={() => setShowAllUserModal(false)}
      >
        <div className="mt-8 mb-4 text-xl font-bold text-green-800">
          {allDbData.length} Users In Database
        </div>
        <TableWrapper
          columns={[
            {
              title: "First Name",
              key: "firstName",
              dataIndex: "firstName",
              render(data: string) {
                return (
                  <div className="font-[500] text-sm text-primaryColor">
                    {data}
                  </div>
                );
              },
            },

            {
              title: "Last Name",
              key: "lastName",
              dataIndex: "lastName",
              render(data: string) {
                return (
                  <div className="font-[500] text-sm text-primaryColor">
                    {data}
                  </div>
                );
              },
            },
            {
              title: "Citizenship No.",
              key: "citizenshipNo",
              dataIndex: "citizenshipNo",
              render(data: string) {
                return (
                  <div className="font-[500] text-sm text-primaryColor">
                    {data}
                  </div>
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
                  <div className="font-[500] text-sm text-primaryColor">
                    {data}
                  </div>
                );
              },
            },
            {
              title: "Grand Father Name",
              key: "grandFatherName",
              dataIndex: "grandFatherName",
              render(data: string) {
                return (
                  <div className="font-[500] text-sm text-primaryColor">
                    {data}
                  </div>
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
                        setActiveUserDetails((data: any) => {
                          if (data === record) {
                            return data;
                          }
                          return record;
                        });
                        setShowAllUserIndividualModal(true);
                      }}
                    >
                      View Details
                    </Button>
                  </div>
                );
              },
            },
          ]}
          dataSource={allDbData}
        />
        <Modal
          width={1200}
          open={showAllUserIndividualModal}
          footer={false}
          onCancel={() => setShowAllUserIndividualModal(false)}
        >
          <ClientReviewPage
            calledFrom="review"
            formData={activeUserDetails}
            setFormData={() => {}}
          />
        </Modal>
      </Modal>

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
              btnProps={{
                type: "primary",
                onClick: () => onRejectUserApplication("removed"),
              }}
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
      {spiData.length > 0 && (
        <div className="">
          <div className="text-xl text-red-500 font-bold mt-12 mb-4">
            Matched Users Info
          </div>
          <TableWrapper columns={spiTableColumn} dataSource={spiData} />
        </div>
      )}
    </>
  );
}
