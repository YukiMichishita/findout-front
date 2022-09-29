import type { NextPage } from "next";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Button, Card, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { PostUser, User } from "../../api/types";
import { API_URL } from "../../../utils/constant";

type FormInput = {
  name: string;
};

const CreateRoom: NextPage = () => {
  const { register, handleSubmit } = useForm<FormInput>();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    const newUser: PostUser = {
      name: data.name,
      isOwner: true,
      roomId: "",
      role: "VOTER",
      turnOrder: 0,
    };
    const res = await fetch(`${API_URL}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(newUser),
    });
    const user = (await res.json()).user as User;
    sessionStorage.setItem("userId", String(user.id));
    router.push("/waiting");
  };

  return (
    <Card>
      <TextField label="name" {...register("name")}></TextField>
      <Button onClick={handleSubmit(onSubmit)}>Start</Button>
    </Card>
  );
};

export default CreateRoom;
