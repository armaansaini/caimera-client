import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";
import { Socket } from "socket.io-client";

export default function AnswerBox({
  user,
  socket,
}: {
  user: string;
  socket: Socket;
}) {
  const [answer, setAnswer] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef && inputRef.current) inputRef.current.focus();
  }, []);

  const handleSubmit = (key: string) => {
    if (key === "Enter") {
      socket.emit("answer", {
        user,
        answer,
      });
      setAnswer("");
    }
  };

  return (
    <Input
      ref={inputRef}
      value={answer}
      onChange={(e) => setAnswer(e.target.value)}
      onKeyDown={(e) => handleSubmit(e.key)}
      className="!text-2xl h-15 py-4 font-sans tracking-tight leading-5 w-[400px]"
    />
  );
}
