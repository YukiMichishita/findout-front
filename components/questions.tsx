import { Card, Typography } from "@mui/material";
import { FC } from "react";
import { Question } from "../pages/api/types";

type Props = {
  question: Question[];
  real: "A" | "B" | undefined;
};

const Questions: FC<Props> = ({ question, real }) => {
  if (!real) return <></>;
  return (
    <>
      {question.map((q, i) => (
        <Card key={q.id}>
          <Typography>{`質問${i + 1}. ${q.content}`}</Typography>
          {real === "A"
            ? q.realAnswer && (
                <Typography>{`Aの回答 ${q.realAnswer}`}</Typography>
              )
            : q.fakeAnswer && (
                <Typography>{`Aの回答 ${q.fakeAnswer}`}</Typography>
              )}
          {real === "A"
            ? q.fakeAnswer && (
                <Typography>{`Bの回答 ${q.fakeAnswer}`}</Typography>
              )
            : q.realAnswer && (
                <Typography>{`Bの回答 ${q.realAnswer}`}</Typography>
              )}
          <br />
        </Card>
      ))}
    </>
  );
};
export default Questions;
