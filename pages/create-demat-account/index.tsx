import Head from "next/head";
import { ReactElement } from "react";
import PmsLayout from "../../components/Layout";
import NewClientAccSetupComponent from "../../components/pages/ClientAccountSetup/NewClientSetup";
import PageWrapper from "../../components/PageWrapper";

export default function NewClientSetup() {
  return (
    <>
      <Head>
        <title>Create Demat Account | SPI</title>
      </Head>
      <PageWrapper>
        <NewClientAccSetupComponent />
      </PageWrapper>
    </>
  );
}

NewClientSetup.getLayout = function getLayout(page: ReactElement) {
  return <PmsLayout>{page}</PmsLayout>;
};
