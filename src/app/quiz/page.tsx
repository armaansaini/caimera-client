"use client";
import { useEffect, useState } from "react";
import { socketIO } from "../utils/socket";
import { LogItemType, User } from "../types/user";
import Question from "../components/Question";
import Leaderboard from "../components/Leaderboard";
import AnswerBox from "../components/AnswerBox";
import { useSearchParams } from "next/navigation";
import AnswerLog from "../components/AnswerLog";
import { toast } from "sonner";

export default function Room() {
  const [question, setQuestion] = useState<string>("");
  const [users, setUsers] = useState<User[]>([]);
  const [logs, setLogs] = useState<LogItemType[]>([]);

  const searchParams = useSearchParams();
  const user = searchParams.get("user")!;

  const socket = socketIO.emit("connection", { user });

  useEffect(() => {
    socket.emit("join:room", { user });

    socket.on("question:current", (data) => {
      setQuestion(data.question);
    });

    socket.on("users:list", (data) => {
      setUsers(data.users);
    });

    socket.on("user:answer", (data) => {
      const updatedLogs = [data, ...logs].splice(0, 50);
      setLogs(updatedLogs);
      if (data.isCorrect)
        if (data.user === user) {
          toast.success("Correct Answer!", {
            id: "winner-toast",
          });
        } else
          toast.success(`${data.user} has answered correctly!`, {
            id: "winner-toast",
          });
    });

    socket.on("room:status", (data) => {
      console.log("updated...");
      setQuestion(data.question);
      setUsers([data.scores]);
    });
  }, [socket, user, logs]);

  return (
    <div className="h-screen flex justify-between items-center">
      <div />
      <div className="flex w-full h-full flex-col justify-between gap-y-6">
        <div className="flex items-center justify-center gap-y-6 flex-col h-full">
          <Question question={question} />
          <AnswerBox user={user} socket={socket} />
        </div>
        <AnswerLog logs={logs} />
      </div>
      <Leaderboard users={users} />
    </div>
  );
}
