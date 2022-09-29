import { useEffect, useState } from "react";
import { nullUser, User } from "../pages/api/types";
import { API_URL } from "../utils/constant";

const useUser = () => {
  const [user, setUser] = useState<User | undefined>(undefined);
  useEffect(() => {
    const set = async () => {
      const userId = sessionStorage.getItem("userId");
      if (!userId) throw new Error("user doesn't exist");
      const res = await fetch(`${API_URL}/user/${userId}`);
      const user = (await res.json()) as User;
      setUser(user);
    };
    set().catch((e) => {
      throw e;
    });
  }, []);

  return { user };
};
export default useUser;
