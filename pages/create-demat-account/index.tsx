import Head from "next/head";
import { ReactElement, useEffect } from "react";
import PmsLayout from "../../components/Layout";
import CreateDematAccount from "../../components/pages/CreateDematAccount";
import PageWrapper from "../../components/PageWrapper";
import store from "store";

export default function NewClientSetup() {
  useEffect(() => {
    if (!store.get("createDematAccount")) {
      store.set("createDematAccount", []);
    }
    if (!store.get("usersInfo")) {
      store.set("usersInfo", []);
    }
  }, []);
  return (
    <>
      <Head>
        <title>Create Demat Account | SPI</title>
      </Head>
      <PageWrapper>
        <CreateDematAccount />
      </PageWrapper>
    </>
  );
}

NewClientSetup.getLayout = function getLayout(page: ReactElement) {
  return <PmsLayout>{page}</PmsLayout>;
};
