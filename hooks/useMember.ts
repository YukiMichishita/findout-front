import { useEffect, useState } from "react";
import { User } from "../pages/api/types";
import { API_URL } from "../utils/constant";

const useMember = (user: User | undefined) => {
  const [members, setMembers] = useState<User[]>([]);
  const [real, setReal] = useState<"A" | "B" | undefined>(undefined);
  const [joined, setJoined] = useState(false);
  useEffect(() => {
    if (!user?.roomId) return;
    const set = async () => {
      const res = await fetch(`${API_URL}/user/room/${user.roomId}`);
      const users = (await res.json()) as User[];
      setMembers(users);
    };
    set().catch((e) => {
      throw e;
    });
  }, [user, joined]);

  return { members, real, joined, setJoined };
};

export default useMember;
