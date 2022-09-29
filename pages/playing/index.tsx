import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useUser from "../../hooks/useUser";

const Playing: NextPage = () => {
  const { user } = useUser();
  const router = useRouter();
  useEffect(() => {
    switch (user?.role) {
      case "REAL":
      case "FAKE":
        router.push("/playing/answer");
        break;
      case "Questioner":
        router.push("/playing/questioner");
        break;
      case "VOTER":
        router.push("/playing/voter");
    }
  }, [router, user]);
  return <></>;
};
export default Playing;
