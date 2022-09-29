import { useEffect, useState } from "react";
import { Room } from "../pages/api/types";
import { API_URL } from "../utils/constant";

const useRoom = (roomId: string | undefined) => {
  const [room, setRoom] = useState<Room | undefined>(undefined);
  useEffect(() => {
    if (!roomId) return;
    const set = async () => {
      const res = await fetch(`${API_URL}/room/${roomId}`);
      const room = (await res.json()) as Room;
      setRoom(room);
    };
    set().catch((e) => {
      throw e;
    });
  }, [roomId]);
  return { room };
};

export default useRoom;
