import { ReactElement, useEffect, useState } from "react";
import PmsLayout from "../../components/Layout";
import Head from "next/head";
import PageWrapper from "../../components/PageWrapper";
import { Button } from "antd";
import Link from "next/link";

export default function AccountSuccess() {
  const [referenceNo, setReferenceNo] = useState(0);
  useEffect(() => {
    if (referenceNo === 0) {
      setReferenceNo(parseInt((Math.random() * 10000).toString()));
    }
  });
  return (
    <>
      <Head>
        <title>Success Account Creation | SPI</title>
      </Head>
      <PageWrapper>
        <div className="text-base font-bold text-black/80">
          Your Account Was Successfully Created.
        </div>
        <h1 className="text-2xl font-bold text-blue-500">Your Reference No:</h1>
        <div className="text-4xl font-bold text-green-500">{referenceNo}</div>
        <div className="mt-12">
          <Link href={"/"}>
            <Button type="primary">Return to Dashboard</Button>
          </Link>
        </div>
      </PageWrapper>
    </>
  );
}

AccountSuccess.getLayout = function getLayout(page: ReactElement) {
  return <PmsLayout>{page}</PmsLayout>;
};
