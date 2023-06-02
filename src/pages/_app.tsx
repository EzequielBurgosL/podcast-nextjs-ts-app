import type { AppProps } from "next/app";
import "../styles/base.css";
import "../styles/globals.css";
import "../styles/reset.css";
import "../styles/variables.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
export default MyApp;
