import { Box, Button, Card, TextField } from "@mui/material";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { API_URL } from "../../../utils/constant";
import { PostUser, Room, User } from "../../api/types";

type FormInput = {
  name: string;
  roomId: string;
};

const JoinRoom: NextPage = () => {
  const { register, handleSubmit } = useForm<FormInput>();
  const router = useRouter();
  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    const roomRes = await fetch(`${API_URL}/room`, {method:"GET", headers:{"ngrok-skip-browser-warning":"*"}})
    const rooms = (await roomRes.json()) as Room[];
    const roomIds = rooms.map(r=>r.id)
    if (!roomIds.includes(data.roomId) || !data.name)
      return
    
    const newUser: PostUser = {
      name: data.name,
      isOwner: false,
      roomId: data.roomId,
      role: "VOTER",
      turnOrder: 0,
    };
    const res = await fetch(`${API_URL}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "ngrok-skip-browser-warning":"*",
      },
      body: JSON.stringify(newUser),
    });
    const user = (await res.json()).user as User;
    sessionStorage.setItem("userId", String(user.id));
    router.push({
      pathname: "/waiting",
      query: { name: user.name, roomId: user.roomId },
    });
  };

  return (
    <Card sx={{ display: "flex" }}>
      <TextField label="部屋番号" {...register("roomId")}></TextField>
      <TextField label="名前" {...register("name")}></TextField>
      <Button onClick={handleSubmit(onSubmit)}>参加</Button>
    </Card>
  );
};

export default JoinRoom;
