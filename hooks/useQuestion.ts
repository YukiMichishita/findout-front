import { useEffect, useState } from "react";
import { Question } from "../pages/api/types";
import { API_URL } from "../utils/constant";
import { useSockets } from "./useSocket";

const useQuestion = (roomId: string | undefined) => {
  const [question, setQuestion] = useState<Question[]>([]);
  const { socket } = useSockets();
  const [updated, setUpdated] = useState(false);
  socket.on("questionUpdated", (_) => {
    setUpdated(!updated);
  });
  useEffect(() => {
    const set = async () => {
      const res = await fetch(`${API_URL}/question/room/${roomId}`);
      const questions = (await res.json()) as Question[];
      setQuestion(questions);
    };
    set().catch((e) => {
      throw e;
    });
  }, [roomId, updated]);

  return { question };
};
export default useQuestion;
