import "../styles/globals.css";
import type { AppProps } from "next/app";

import { ThirdwebWeb3Provider as WebProvider } from "@3rdweb/hooks";

const supportedChainIds = [4];
const connectors = {
  injected: {},
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WebProvider supportedChainIds={supportedChainIds} connectors={connectors}>
      <Component {...pageProps} />
    </WebProvider>
  );
}

export default MyApp;
