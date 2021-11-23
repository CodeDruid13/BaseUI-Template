import { BaseProvider, LightTheme } from "baseui";
import type { AppProps } from "next/app";
import { Provider as StyletronProvider } from "styletron-react";
import "../styles/globals.css";
import { styletron } from "../styletron";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={LightTheme}>
        <Component {...pageProps} />
      </BaseProvider>
    </StyletronProvider>
  );
}

export default MyApp;
