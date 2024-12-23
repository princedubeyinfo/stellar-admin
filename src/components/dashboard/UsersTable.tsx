import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const users = [
  { id: 1, phone: "7300104812", name: "", dob: "", gender: "null", address: "null", city: "" },
  { id: 2, phone: "9795746307", name: "", dob: "", gender: "null", address: "null", city: "" },
  { id: 3, phone: "9817534923", name: "Yashpreet", dob: "25/2/2003", gender: "female", address: "Nissing", city: "Nissing" },
  { id: 4, phone: "9553151719", name: "Yashpreet", dob: "25/2/2003", gender: "female", address: "Nissing", city: "Nissing" },
  { id: 5, phone: "9048312162", name: "Yashpreet", dob: "25/2/2003", gender: "female", address: "Nissing", city: "Nissing" },
];

export function UsersTable() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm">Show</span>
          <Select defaultValue="10">
            <SelectTrigger className="w-[70px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
          <span className="text-sm">entries</span>
        </div>
        <Input
          placeholder="Search..."
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>S.NO</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Mobile</TableHead>
              <TableHead>DOB</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>City</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name || "-"}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.dob || "-"}</TableCell>
                <TableCell>{user.gender === "null" ? "-" : user.gender}</TableCell>
                <TableCell>{user.address === "null" ? "-" : user.address}</TableCell>
                <TableCell>{user.city || "-"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing 1 to 5 of 5 entries
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 rounded border hover:bg-muted" disabled>
            Previous
          </button>
          <button className="px-3 py-1 rounded border bg-primary text-white">
            1
          </button>
          <button className="px-3 py-1 rounded border hover:bg-muted" disabled>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}