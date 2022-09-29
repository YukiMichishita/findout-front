import type { NextPage } from "next";
import PlayingMember from "../../../components/members";
import useUser from "../../../hooks/useUser";
import Questions from "../../../components/questions";
import { Typography } from "@mui/material";
import useQuestion from "../../../hooks/useQuestion";
import AnswerForm from "../../../components/answerForm";
import useEndGame from "../../../hooks/useEndGame";
import useRoom from "../../../hooks/useRoom";

const Real: NextPage = () => {
  const { user } = useUser();
  const { question } = useQuestion(user?.roomId);
  const { room } = useRoom(user?.roomId);
  useEndGame();

  return (
    <>
      <PlayingMember user={user} />
      <br />
      <Questions question={question} real={room?.Real} />
      <br />
      {user &&
        question.map((q,i) => <AnswerForm key={q.id} question={q} user={user} count={i+1} />)}
    </>
  );
};

export default Real;
