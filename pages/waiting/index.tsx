import type { NextPage } from "next";
import { Button, Typography } from "@mui/material";
import { useSockets } from "../../hooks/useSocket";
import useUser from "../../hooks/useUser";
import { useRouter } from "next/router";
import useMember from "../../hooks/useMember";
import { API_URL } from "../../utils/constant";
import { useEffect, useState } from "react";

const Waiting: NextPage = () => {
  const { user } = useUser();
  const router = useRouter();
  const { members, joined, setJoined } = useMember(user);
  const [start, setStart] = useState(false);
  useEffect(() => {
    if (start) router.push("/playing");
  }, [router, start]);
  const { socket } = useSockets();
  if (!user) return <></>;
  const onClick = async () => {
    const res = await fetch(`${API_URL}/room/start-playng/${user.roomId}`, {headers:{'ngrok-skip-browser-warning':'*'}});
    router.push("/playing");
  };

  socket.on("joinMember", (_) => {
    setJoined(!joined);
  });
  socket.on("start", (_) => {
    setStart(true);
  });

  return (
    <>
      <Typography>部屋番号:{user?.roomId}</Typography>
      <Typography>待機中のメンバー</Typography>
      {members.map((m) => (
        <Typography key={m.name}>{m.name}</Typography>
      ))}
      {user.isOwner && <Button onClick={onClick}>ゲームを始める</Button>}
    </>
  );
};

export default Waiting;
