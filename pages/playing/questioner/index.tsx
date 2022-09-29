import type { NextPage } from "next";
import PlayingMember from "../../../components/members";
import useUser from "../../../hooks/useUser";
import QuestionForm from "../../../components/questionForm";
import Questions from "../../../components/questions";
import { Typography } from "@mui/material";
import useQuestion from "../../../hooks/useQuestion";
import useRoom from "../../../hooks/useRoom";
import useEndGame from "../../../hooks/useEndGame";

const Questioner: NextPage = () => {
  const { user } = useUser();
  const { question } = useQuestion(user?.roomId);
  const { room } = useRoom(user?.roomId);
  useEndGame();

  if (!room) return <></>;

  return (
    <>
      <PlayingMember user={user} />
      <br />
      <Questions question={question} real={room?.Real} />
      {user && <QuestionForm user={user} room={room} />}
    </>
  );
};

export default Questioner;
