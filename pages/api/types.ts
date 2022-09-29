export type Room = {
  id: string;
  isPlaying: boolean;
  Round: number;
  Real?: "A" | "B";
};

export type User = {
  id: number;
  name: string;
  isOwner: Boolean;
  roomId: string;
  role: UserRole;
  turnOrder: number;
  isCorrectVote?: boolean;
};

export type PostUser = Omit<User, "id">;

export const nullUser: User = {
  id: 0,
  name: "",
  roomId: "",
  isOwner: false,
  role: "VOTER",
  turnOrder: 0,
};

export type UserRole = "VOTER" | "REAL" | "FAKE" | "Questioner";

export type Question = {
  id: number;
  Round: number;
  askUserId: number;
  realAnswerUserId?: number;
  fakeAnswerUserId?: number;
  content: String;
  realAnswer?: String;
  fakeAnswer?: String;
};

export type PostQuestion = Omit<Question, "id">;
