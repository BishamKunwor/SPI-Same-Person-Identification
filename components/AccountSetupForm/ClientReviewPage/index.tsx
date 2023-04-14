import AccSetupFormHeading from "../../AccSetupFormHeading"
import PageBottomButtons from "../../PageBottomButtons"
import ClientAddressForm from "../ClientAddress"
import ClientBankAccForm from "../ClientBankAcc"
import ClientDetailsForm from "../ClientDetails"
import ClientFamilyDetailsForm from "../ClientFamilyDetails"
// import ClientNomineeForm from "../ClientNomineeDetails"
import ClientOccupationForm from "../ClientOccupation"

interface ClientReviewPageArgs {
    prev(): void
}

export default function ClientReviewPage({ prev }: ClientReviewPageArgs) {
    return <>
        <AccSetupFormHeading className="mb-4">Review Details and Submit Your Application</AccSetupFormHeading>
        <div className="mt-6"></div>
        <ClientDetailsForm calledFrom="review" />
        <ClientAddressForm calledFrom="review" />
        <ClientFamilyDetailsForm calledFrom="review" />
        <ClientOccupationForm calledFrom="review" />
        <ClientBankAccForm calledFrom="review" />
        {/* <ClientNomineeForm calledFrom="review" /> */}
        <div className="mt-6">
            <PageBottomButtons
                cancelBtnProps={{ loading: false, onClick: () => { prev() } }}
                saveBtnProps={{
                    loading: false,
                    htmlType: "submit",
                }}
                saveTitle="Submit"
                cancelTitle="Previous"
            />
        </div>
    </>
}