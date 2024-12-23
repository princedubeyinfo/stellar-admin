import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/Sidebar";
import { UsersTable } from "@/components/dashboard/UsersTable";

const Users = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <DashboardSidebar />
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold tracking-tight">Manage Users</h2>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Add User
              </Button>
            </div>
            <UsersTable />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Users;