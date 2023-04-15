import { Form, message } from "antd";
import AccSetupFormHeading from "../../AccSetupFormHeading";
import PageBottomButtons from "../../PageBottomButtons";
import ClientAddressForm from "../ClientAddress";
import ClientBankAccForm from "../ClientBankAcc";
import ClientDetailsForm from "../ClientDetails";
import ClientFamilyDetailsForm from "../ClientFamilyDetails";
// import ClientNomineeForm from "../ClientNomineeDetails"
import ClientOccupationForm from "../ClientOccupation";
import { useEffect, useState } from "react";
import store from "store";
import { useRouter } from "next/router";

interface ClientReviewPageArgs {
  prev?(): void;
  formData: any;
  setFormData: (data: any) => void;
  calledFrom?: "review" | "edit";
}

export default function ClientReviewPage({
  prev = () => {},
  formData,
  setFormData,
  calledFrom = "edit",
}: ClientReviewPageArgs) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  return (
    <>
      {/* <Form
        onFinish={() => {
          setLoading(true);
          if (Object.keys(formData).length > 10) {
            const createDematAccountStoreData = store.get("createDematAccount");
            createDematAccountStoreData.push({ ...formData });
            store.set("createDematAccount", createDematAccountStoreData);
            setTimeout(() => {
              router.push("/success-account-creation");
            }, 1000);
          } else {
            message.error("Please Fill more forms. Not Enough Data Collected.");
          }
          console.log(formData);
          setLoading(false);
        }}
      > */}
      <AccSetupFormHeading className="mb-4">
        {calledFrom === "edit"
          ? "Review Details and Submit Your Application"
          : "Client Details"}
      </AccSetupFormHeading>
      <div className="mt-6"></div>
      <ClientDetailsForm
        formData={formData}
        setFormData={setFormData}
        calledFrom="review"
      />
      <ClientAddressForm
        formData={formData}
        setFormData={setFormData}
        calledFrom="review"
      />
      <ClientFamilyDetailsForm
        formData={formData}
        setFormData={setFormData}
        calledFrom="review"
      />
      <ClientOccupationForm
        formData={formData}
        setFormData={setFormData}
        calledFrom="review"
      />
      <ClientBankAccForm
        formData={formData}
        setFormData={setFormData}
        calledFrom="review"
      />
      {/* <ClientNomineeForm formData={formData} setFormData={setFormData} calledFrom="review" /> */}
      {calledFrom === "edit" && (
        <div className="mt-6">
          <PageBottomButtons
            cancelBtnProps={{
              loading: false,
              onClick: () => {
                prev();
              },
            }}
            saveBtnProps={{
              loading: loading,
              htmlType: "submit",
              onClick: () => {
                setLoading(true);
                if (Object.keys(formData).length > 10) {
                  const createDematAccountStoreData =
                    store.get("createDematAccount");
                  createDematAccountStoreData.push({ ...formData });
                  store.set("createDematAccount", createDematAccountStoreData);
                  setTimeout(() => {
                    router.push("/success-account-creation");
                  }, 1000);
                } else {
                  message.error(
                    "Please Fill more forms. Not Enough Data Collected."
                  );
                }
                console.log(formData);
                setLoading(false);
              },
            }}
            saveTitle="Submit"
            cancelTitle="Previous"
          />
        </div>
      )}
      {/* </Form> */}
    </>
  );
}
