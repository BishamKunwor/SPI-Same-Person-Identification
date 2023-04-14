import { Form, message } from "antd";
import AccSetupFormHeading from "../../AccSetupFormHeading";
import PageBottomButtons from "../../PageBottomButtons";
import ClientAddressForm from "../ClientAddress";
import ClientBankAccForm from "../ClientBankAcc";
import ClientDetailsForm from "../ClientDetails";
import ClientFamilyDetailsForm from "../ClientFamilyDetails";
// import ClientNomineeForm from "../ClientNomineeDetails"
import ClientOccupationForm from "../ClientOccupation";
import { useState } from "react";
import store from "store";
import { useRouter } from "next/router";

interface ClientReviewPageArgs {
  prev(): void;
}

export default function ClientReviewPage({
  prev,
  detilsTabForm,
  addressTabForm,
  familyDetailsForm,
  occupationForm,
  bankAccountForm,
}: ClientReviewPageArgs) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  return (
    <>
      <Form
        onFinish={() => {
          setLoading(true);
          const newElement = {
            ...detilsTabForm,
            ...addressTabForm,
            ...familyDetailsForm,
            ...occupationForm,
            ...bankAccountForm,
          };
          if (Object.keys(newElement).length > 10) {
            const createDematAccountStoreData = store.get("createDematAccount");
            createDematAccountStoreData.push(newElement);
            store.set("createDematAccount", createDematAccountStoreData);
            setTimeout(() => {
              router.push("/success-account-creation");
            }, 1000);
          } else {
            message.error("Please Fill more forms. Not Enough Data Collected.");
          }
          console.log(newElement);
          setLoading(false);
        }}
      >
        <AccSetupFormHeading className="mb-4">
          Review Details and Submit Your Application
        </AccSetupFormHeading>
        <div className="mt-6"></div>
        <ClientDetailsForm calledFrom="review" />
        <ClientAddressForm calledFrom="review" />
        <ClientFamilyDetailsForm calledFrom="review" />
        <ClientOccupationForm calledFrom="review" />
        <ClientBankAccForm calledFrom="review" />
        {/* <ClientNomineeForm calledFrom="review" /> */}
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
            }}
            saveTitle="Submit"
            cancelTitle="Previous"
          />
        </div>
      </Form>
    </>
  );
}
