import type { NextPage } from "next";
import React from "react";
import Link from "next/link";
import { Button, Card } from "@mui/material";

const Home: NextPage = () => {
  return (
    <>
      <Link href="/room/create">
        <Button>部屋を作る</Button>
      </Link>
      <Link href="/room/join">
        <Button>部屋に入る</Button>
      </Link>
    </>
  );
};

export default Home;
