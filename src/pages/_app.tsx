import type { AppProps } from "next/app";
import "../styles/app.css";
import "../styles/base.css";
import "../styles/fonts.css";
import "../styles/variables.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
export default MyApp;
