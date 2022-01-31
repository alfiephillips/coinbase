import "../styles/global.css";
import type { AppProps } from "next/app";

import { ThirdwebWeb3Provider as WebProvider } from "@3rdweb/hooks";
import { NextPage } from "next";

const supportedChainIds = [4];
const connectors = {
  injected: {},
};

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <WebProvider supportedChainIds={supportedChainIds} connectors={connectors}>
      <Component {...pageProps} />
    </WebProvider>
  );
};

export default App;
