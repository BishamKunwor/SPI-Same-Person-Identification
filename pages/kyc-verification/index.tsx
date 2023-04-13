import PageWrapper from "../../components/PageWrapper";
import PmsLayout from "../../components/Layout";
import { ReactElement } from "react";
import KycVerification from "../../components/pages/KycVerification";
import Head from "next/head";

export default function PmsRelatedCharges() {
  return (
    <>
      <Head>
        <title>KYC Verification | SPI</title>
      </Head>
      <PageWrapper>
        <KycVerification />
      </PageWrapper>
    </>
  );
}

PmsRelatedCharges.getLayout = function getLayout(page: ReactElement) {
  return <PmsLayout>{page}</PmsLayout>;
};
