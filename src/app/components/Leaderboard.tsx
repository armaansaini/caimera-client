import { User } from "../types/user";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Leaderboard({ users }: { users: User[] }) {
  return (
    <div className="border h-full border-slate-300 bg-slate-300/20 p-6 text-xl w-1/4 flex flex-col items-center">
      <div className="text-3xl tracking-tight leading-5 mb-9">Leaderboard</div>
      <Table>
        <TableHeader>
          <TableRow className="text-xl">
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead className="text-right">Score</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.length > 0 &&
            users.map((user, index) => (
              <TableRow key={index} className="text-lg">
                <TableCell className="w-[100px]">{user?.name}</TableCell>
                <TableCell className="text-right">{user?.score}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
