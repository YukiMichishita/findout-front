import { Button, Typography } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useRoom from "../../hooks/useRoom";
import { useSockets } from "../../hooks/useSocket";
import useUser from "../../hooks/useUser";
import { API_URL } from "../../utils/constant";

const Result: NextPage = () => {
  const { user } = useUser();
  const { room } = useRoom(user?.roomId);
  const { socket } = useSockets();
  const router = useRouter();
  const [next, setNext] = useState(false);
  socket.on("next", (_) => {
    setNext(true);
  });
  useEffect(() => {
    if (next) router.push("/playing");
  }, [next, router]);
  const onClick = async () => {
    await fetch(`${API_URL}/next-game/${user?.roomId}`);
  };
  return (
    <>
      <Typography>{`正解は${room?.Real}`}</Typography>
      {user?.role === "REAL" || user?.role === "FAKE" ? (
        <Typography></Typography>
      ) : (
        <Typography>{`あなたは${
          user?.isCorrectVote ? "正解" : "不正解"
        }でした`}</Typography>
      )}
      {user?.isOwner && <Button onClick={() => onClick()}>次のゲームへ</Button>}
    </>
  );
};

export default Result;
