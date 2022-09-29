import "../styles/globals.css";
import type { AppProps } from "next/app";
import SocketsProvier from "../hooks/useSocket";
import { Card, CardActionArea } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SocketsProvier>
      <Component {...pageProps} />
    </SocketsProvier>
  );
}

export default MyApp;
