import { Steps } from "antd";
import { useEffect, useState } from "react";
import ClientDetailsForm from "../../AccountSetupForm/ClientDetails";
import FormLabel from "../../FormLabel";
import ClientAddressForm from "../../AccountSetupForm/ClientAddress";
import ClientFamilyDetailsForm from "../../AccountSetupForm/ClientFamilyDetails";
import ClientOccupationForm from "../../AccountSetupForm/ClientOccupation";
import ClientBankAccForm from "../../AccountSetupForm/ClientBankAcc";
import ClientReviewPage from "../../AccountSetupForm/ClientReviewPage";
// import ClientNomineeForm from "../../AccountSetupForm/ClientNomineeDetails";
import ClientDocsForm from "../../AccountSetupForm/ClientDocs";

export default function CreateDematAccount() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  // const [detilsTabForm, setDeatilsTabForm] = useState({});
  // const [addressTabForm, setAddressTabForm] = useState({});
  // const [familyDetailsForm, setFamilyDetailsForm] = useState({});
  // const [occupationForm, setOccupationForm] = useState({});
  // const [bankAccountForm, setBankAccountForm] = useState({});

  useEffect(() => {
    // console.log(detilsTabForm, "details");
  });

  function next() {
    setCurrentStep((prev) => prev + 1);
  }
  function prev() {
    setCurrentStep((cur) => cur - 1);
  }
  const items = [
    {
      title: <FormLabel>Details</FormLabel>,
      component: (
        <ClientDetailsForm
          formData={formData}
          setFormData={setFormData}
          next={next}
        />
      ),
    },
    {
      title: <FormLabel>Address</FormLabel>,
      component: (
        <ClientAddressForm
          formData={formData}
          setFormData={setFormData}
          prev={prev}
          next={next}
        />
      ),
    },
    {
      title: <FormLabel>Family Details</FormLabel>,
      component: (
        <ClientFamilyDetailsForm
          formData={formData}
          setFormData={setFormData}
          prev={prev}
          next={next}
        />
      ),
    },
    {
      title: <FormLabel>Occupation</FormLabel>,
      component: (
        <ClientOccupationForm
          formData={formData}
          setFormData={setFormData}
          prev={prev}
          next={next}
        />
      ),
    },
    {
      title: <FormLabel>Bank Account</FormLabel>,
      component: (
        <ClientBankAccForm
          formData={formData}
          setFormData={setFormData}
          prev={prev}
          next={next}
        />
      ),
    },
    // {
    //   title: <FormLabel>Nominee</FormLabel>,
    //   component: <ClientNomineeForm prev={prev} next={next} />,
    // },
    {
      title: <FormLabel>Documents</FormLabel>,
      component: (
        <ClientDocsForm
          formData={formData}
          setFormData={setFormData}
          prev={prev}
          next={next}
        />
      ),
    },
    {
      title: <FormLabel>Review</FormLabel>,
      component: (
        <ClientReviewPage
          formData={formData}
          setFormData={setFormData}
          prev={prev}
        />
      ),
    },
  ];
  return (
    <>
      <Steps
        size="default"
        labelPlacement="vertical"
        current={currentStep}
        items={items}
        onChange={(step) => {
          setCurrentStep(step);
        }}
      />
      <div className="pt-6">{items[currentStep].component}</div>
    </>
  );
}
