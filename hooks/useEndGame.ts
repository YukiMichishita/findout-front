import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSockets } from "./useSocket";

const useEndGame = () => {
  const router = useRouter();
  const [end, setEnd] = useState(false);
  const { socket } = useSockets();
  socket.on("allVote", (_) => {
    setEnd(true);
  });
  useEffect(() => {
    if (end) router.push("/result");
  }, [router, end]);
};
export default useEndGame;
