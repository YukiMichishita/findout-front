import "../styles/globals.css";
import type { AppProps } from "next/app";
import SocketsProvier from "../hooks/useSocket";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SocketsProvier>
      <Component {...pageProps} />
    </SocketsProvier>
  );
}

export default MyApp;
