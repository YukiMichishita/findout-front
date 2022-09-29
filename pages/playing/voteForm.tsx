import { Button, Card } from "@mui/material";
import { FC } from "react";
import { API_URL } from "../../utils/constant";
import { User } from "../api/types";

type Props = {
  user: User | undefined;
  real: "A" | "B" | undefined;
};

const VoteForm: FC<Props> = ({ user, real }) => {
  if (!user) return <></>;
  const onClick = async (ans: "A" | "B") => {
    const newUser: User = { ...user, isCorrectVote: real === ans };
    const res = await fetch(`${API_URL}/user/vote`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(newUser),
    });
  };
  return (
    <>
      <Card>
        <Button onClick={() => onClick("A")}>Aが本物</Button>
      </Card>
      <Card>
        <Button onClick={() => onClick("B")}>Bが本物</Button>
      </Card>
    </>
  );
};
export default VoteForm;
