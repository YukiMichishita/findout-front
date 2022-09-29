import { Button, Card, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { API_URL } from "../utils/constant";
import { PostQuestion, Room, User } from "../pages/api/types";

type FormInput = {
  question: string;
};

type Props = {
  user: User;
  room: Room;
};

const QuestionForm: FC<Props> = ({ user, room }) => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    const newQuestion: PostQuestion = {
      askUserId: user.id,
      content: data.question,
      Round: room.Round,
    };
    const res = await fetch(`${API_URL}/question`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "ngrok-skip-browser-warning":"*",
      },
      body: JSON.stringify(newQuestion),
    });
    router.push("/playing/voter");
  };

  return (
    <>
      <Card>
        <TextField label="question" {...register("question")}></TextField>
        <Button onClick={handleSubmit(onSubmit)}>質問する</Button>
      </Card>
    </>
  );
};

export default QuestionForm;
