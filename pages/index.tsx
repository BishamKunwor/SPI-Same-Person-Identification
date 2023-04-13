import { ReactElement, useEffect, useRef } from "react";
import PmsLayout from "../components/Layout";
import PageWrapper from "../components/PageWrapper";
import Head from "next/head";
import Link from "next/link";
import store from "store";

export default function Home() {
  useEffect(() => {
    if (!store.get("createDematAccount")) {
      store.set("createDematAccount", []);
    }
    if (!store.get("usersInfo")) {
      store.set("usersInfo", []);
    }
  }, []);

  const kycVerificationLinkRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    let style = document.getElementById("afterKycVerification");
    if (style) {
      style.innerText = `.after-content::after{content: '${
        store.get("createDematAccount")?.length ?? 0
      }'}`;
      return;
    }
    style = document.createElement("style");
    style.id = "afterKycVerification";
    style.innerText = `.after-content::after{content: '${
      store.get("createDematAccount")?.length ?? 0
    }'}`;

    document.body.append(style);
  });

  return (
    <>
      <Head>
        <title>Dashboard | SPI</title>
      </Head>
      <PageWrapper>
        <div className="py-6 gap-12 flex flex-wrap">
          <Link
            href={"/create-demat-account"}
            className="bg-white rounded-md w-fit flex flex-col justify-between gap-2 p-2 px-6 max-w-xs"
          >
            <div className="flex justify-end">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_719_847)">
                  <path
                    d="M7.5 13.75C10.9518 13.75 13.75 10.9518 13.75 7.5C13.75 4.04822 10.9518 1.25 7.5 1.25C4.04822 1.25 1.25 4.04822 1.25 7.5C1.25 10.9518 4.04822 13.75 7.5 13.75Z"
                    stroke="#E94363"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.625 7.5H4.375M10.625 7.5L8.125 5M10.625 7.5L8.125 10"
                    stroke="#E94363"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_719_847">
                    <rect width="15" height="15" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p>{"Create Demat Account"}</p>
          </Link>
          <Link
            ref={kycVerificationLinkRef}
            href={"/kyc-verification"}
            className="bg-white relative rounded-md w-fit flex flex-col justify-between gap-2 p-2 px-6 max-w-xs after-content after:absolute after:-top-2 after:-right-2 after:py-[2px] after:rounded-full after:bg-red-500 after:px-2 after:text-white"
          >
            <div className="flex justify-end">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_719_847)">
                  <path
                    d="M7.5 13.75C10.9518 13.75 13.75 10.9518 13.75 7.5C13.75 4.04822 10.9518 1.25 7.5 1.25C4.04822 1.25 1.25 4.04822 1.25 7.5C1.25 10.9518 4.04822 13.75 7.5 13.75Z"
                    stroke="#E94363"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.625 7.5H4.375M10.625 7.5L8.125 5M10.625 7.5L8.125 10"
                    stroke="#E94363"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_719_847">
                    <rect width="15" height="15" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p>{"KYC Verification"}</p>
          </Link>
        </div>
      </PageWrapper>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <PmsLayout>{page}</PmsLayout>;
};
