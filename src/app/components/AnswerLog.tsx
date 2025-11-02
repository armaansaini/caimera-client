import { LogItemType } from "../types/user";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export default function AnswerLog({ logs }: { logs: LogItemType[] }) {
  console.log(logs);
  return (
    <div className="h-64 bg-slate-200 w-full tracking-tight leading-5 overflow-y-scroll">
      <Table>
        <TableBody>
          {logs.length > 0 ? (
            <TableRow>
              {logs.map((log, index) => (
                <TableCell
                  className={`${
                    log.isCorrect ? "text-green-600" : ""
                  } text-xl flex py-2 tracking-tight font-sans items-center`}
                  key={index}
                >
                  <span className="text-sm font-mono">
                    [{new Date(log.timestamp).toLocaleTimeString()}]
                  </span>
                  &nbsp;&nbsp;
                  {log.user} has answered {log.answer}
                </TableCell>
              ))}
            </TableRow>
          ) : null}
        </TableBody>
      </Table>
    </div>
  );
}
