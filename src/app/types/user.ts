export type User = {
  name: string;
  score: number;
};

export type LogItemType = {
  user: string;
  answer: string;
  isCorrect: boolean;
  timestamp: string;
};
