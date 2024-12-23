import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Edit, Trash2, Eye } from "lucide-react";

const astrologers = [
  { 
    id: 1, 
    name: "John Doe", 
    expertise: "Vedic Astrology",
    experience: "10 years",
    rating: 4.5,
    status: "active"
  },
  { 
    id: 2, 
    name: "Jane Smith", 
    expertise: "Tarot Reading",
    experience: "5 years",
    rating: 4.8,
    status: "active"
  },
  { 
    id: 3, 
    name: "Mike Johnson", 
    expertise: "Numerology",
    experience: "8 years",
    rating: 4.2,
    status: "inactive"
  },
];

export function AstrologerTable() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Input
          placeholder="Search astrologers..."
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Expertise</TableHead>
              <TableHead>Experience</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {astrologers.map((astrologer) => (
              <TableRow key={astrologer.id}>
                <TableCell>{astrologer.id}</TableCell>
                <TableCell className="font-medium">{astrologer.name}</TableCell>
                <TableCell>{astrologer.expertise}</TableCell>
                <TableCell>{astrologer.experience}</TableCell>
                <TableCell>{astrologer.rating}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    astrologer.status === 'active' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {astrologer.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="destructive" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}