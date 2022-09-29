import type { NextPage } from "next";
import PlayingMember from "../../../components/members";
import useUser from "../../../hooks/useUser";
import Questions from "../../../components/questions";
import { Typography } from "@mui/material";
import useQuestion from "../../../hooks/useQuestion";
import AnswerForm from "../../../components/answerForm";
import useEndGame from "../../../hooks/useEndGame";

const Real: NextPage = () => {
  const { user } = useUser();
  const { question } = useQuestion(user?.roomId);
  useEndGame();

  return (
    <>
      <PlayingMember user={user} />
      <br />
      <Typography>質問</Typography>
      {user &&
        question.map((q) => <AnswerForm key={q.id} question={q} user={user} />)}
    </>
  );
};

export default Real;
