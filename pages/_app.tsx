import "../styles/globals.scss";
import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";
import * as colors from "../variables/themes";

import { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colors.primaryColor,
          wireframe: false,
        },
      }}
    >
      <StyleProvider hashPriority="high">
        <Component {...pageProps} />
      </StyleProvider>
    </ConfigProvider>
  );
}
