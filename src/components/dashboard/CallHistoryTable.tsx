import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";

const calls = [
  { 
    id: 1, 
    user: "John Doe", 
    astrologer: "Dr. Smith",
    duration: "10:30",
    date: "2024-02-20",
    status: "completed"
  },
  { 
    id: 2, 
    user: "Jane Smith", 
    astrologer: "Dr. Johnson",
    duration: "15:45",
    date: "2024-02-19",
    status: "missed"
  },
];

export function CallHistoryTable() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Input
          placeholder="Search calls..."
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Astrologer</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {calls.map((call) => (
              <TableRow key={call.id}>
                <TableCell>{call.id}</TableCell>
                <TableCell className="font-medium">{call.user}</TableCell>
                <TableCell>{call.astrologer}</TableCell>
                <TableCell>{call.duration}</TableCell>
                <TableCell>{call.date}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    call.status === 'completed' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {call.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}