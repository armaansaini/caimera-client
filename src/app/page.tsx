"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import { socketIO } from "./utils/socket";

export default function Home() {
  const [username, setUsername] = useState("");

  socketIO.emit("connnection");

  const isDisabled = !username.trim().length;

  return (
    <div className="flex min-h-screen items-center justify-center ">
      <main>
        <Input
          className="mb-7"
          placeholder="Enter Your Name"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Link href={`/quiz?user=${username}`}>
          <Button disabled={isDisabled}>Join Room</Button>
        </Link>
      </main>
    </div>
  );
}
