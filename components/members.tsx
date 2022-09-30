import { Typography } from "@mui/material";
import { FC } from "react";
import useMember from "../hooks/useMember";
import { User } from "../pages/api/types";

type Props = {
  user: User | undefined;
};

const PlayingMember: FC<Props> = ({ user }) => {
  const { members } = useMember(user);
  const real = members.find((m) => m.role === "REAL");
  const fake = members.find((m) => m.role === "FAKE");
  return (
    <>
      <Typography variant="h4">{`${fake?.name}さんが${real?.name}さんのフリをして質問に答えます。`}</Typography>
      <Typography variant="h4">{`AとBのどちらが本物の${real?.name}さんか当ててください！`}</Typography>
      <br />
      <Typography variant="h6">
        以下の人は質問者です。1人につき1つ質問できます。
      </Typography>
      {members
        .filter((m) => m.role === "Questioner")
        .map((m, i) => (
          <Typography key={m.name}>{`${i + 1}. ${m.name}`}</Typography>
        ))}
      <br />
      {/* <Typography>投票者</Typography>
      {members
        .filter((m) => m.role === "VOTER")
        .map((m) => (
          <Typography key={m.name}>{m.name}</Typography>
        ))} */}
    </>
  );
};
export default PlayingMember;
