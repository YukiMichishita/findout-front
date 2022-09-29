import { Typography } from "@mui/material";
import { FC } from "react";
import useMember from "../../hooks/useMember";
import { User } from "../api/types";

type Props = {
  user: User | undefined;
};

const PlayingMember: FC<Props> = ({ user }) => {
  const { members } = useMember(user);
  return (
    <>
      <Typography>本物</Typography>
      {members
        .filter((m) => m.role === "REAL")
        .map((m) => (
          <Typography key={m.name}>{m.name}</Typography>
        ))}
      <br />
      <Typography>偽物</Typography>
      {members
        .filter((m) => m.role === "FAKE")
        .map((m) => (
          <Typography key={m.name}>{m.name}</Typography>
        ))}
      <br />
      <Typography>質問者</Typography>
      {members
        .filter((m) => m.role === "Questioner")
        .map((m, i) => (
          <Typography key={m.name}>{`${i + 1}. ${m.name}`}</Typography>
        ))}
      <br />
      <Typography>投票者</Typography>
      {members
        .filter((m) => m.role === "VOTER")
        .map((m) => (
          <Typography key={m.name}>{m.name}</Typography>
        ))}
    </>
  );
};
export default PlayingMember;
