import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";

const chats = [
  { 
    id: 1, 
    user: "John Doe", 
    astrologer: "Dr. Smith",
    messages: 15,
    date: "2024-02-20",
    status: "completed"
  },
  { 
    id: 2, 
    user: "Jane Smith", 
    astrologer: "Dr. Johnson",
    messages: 8,
    date: "2024-02-19",
    status: "ongoing"
  },
];

export function ChatHistoryTable() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Input
          placeholder="Search chats..."
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
              <TableHead>Messages</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {chats.map((chat) => (
              <TableRow key={chat.id}>
                <TableCell>{chat.id}</TableCell>
                <TableCell className="font-medium">{chat.user}</TableCell>
                <TableCell>{chat.astrologer}</TableCell>
                <TableCell>{chat.messages}</TableCell>
                <TableCell>{chat.date}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    chat.status === 'completed' 
                      ? 'bg-green-100 text-green-700' 
                      : chat.status === 'ongoing'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {chat.status}
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