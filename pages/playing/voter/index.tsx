import type { NextPage } from "next";
import PlayingMember from "../../../components/members";
import useUser from "../../../hooks/useUser";
import Questions from "../../../components/questions";
import { Typography } from "@mui/material";
import useQuestion from "../../../hooks/useQuestion";
import VoteForm from "../../../components/voteForm";
import useRoom from "../../../hooks/useRoom";
import useEndGame from "../../../hooks/useEndGame";

const Voter: NextPage = () => {
  const { user } = useUser();
  console.log(user);
  const { question } = useQuestion(user?.roomId);
  const { room } = useRoom(user?.roomId);
  useEndGame();

  return (
    <>
      <PlayingMember user={user} />
      <br />
      <Questions question={question} real={room?.Real} />
      <VoteForm user={user} real={room?.Real} />
    </>
  );
};

export default Voter;
