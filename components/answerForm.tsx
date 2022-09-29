import { Button, Card, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { API_URL } from "../utils/constant";
import { Question, User } from "../pages/api/types";

type FormInput = {
  answer: string;
};

type Props = {
  user: User;
  question: Question;
  count :number;
};

const AnswerForm: FC<Props> = ({ user, question,count }) => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    const isReal = user?.role === "REAL";
    const newQuestion: Question = {
      ...question,
      realAnswerUserId: isReal ? user.id : undefined,
      realAnswer: isReal ? data.answer : undefined,
      fakeAnswerUserId: isReal ? undefined : user.id,
      fakeAnswer: isReal ? undefined : data.answer,
    };
    const res = await fetch(`${API_URL}/question`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "ngrok-skip-browser-warning":"*",
      },
      body: JSON.stringify(newQuestion),
    });
  };

  return (
    <>
      <Card>
        <Typography>{`質問${count}に答える`}</Typography>
        <TextField label="answer" {...register("answer")}></TextField>
        <Button onClick={handleSubmit(onSubmit)}>回答する</Button>
      </Card>
    </>
  );
};

export default AnswerForm;
