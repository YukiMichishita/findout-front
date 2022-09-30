import "../styles/globals.css";
import type { AppProps } from "next/app";
import SocketsProvier from "../hooks/useSocket";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardActionArea,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              なりすましクイズ
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Card sx={{ textAlign: "center", marginTop: "50px" }}>
        <SocketsProvier>
          <Component {...pageProps} />
        </SocketsProvier>
      </Card>
    </>
  );
}

export default MyApp;
