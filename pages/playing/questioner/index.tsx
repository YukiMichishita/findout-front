import type { NextPage } from "next";
import PlayingMember from "../members";
import useUser from "../../../hooks/useUser";
import QuestionForm from "./questionForm";
import Questions from "../questions";
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
      <Typography>質問</Typography>
      <Questions question={question} real={room?.Real} />
      {user && <QuestionForm user={user} room={room} />}
    </>
  );
};

export default Questioner;
