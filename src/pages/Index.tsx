import { Users, Phone, MessageSquare, Wallet } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/Sidebar";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { UsersChart } from "@/components/dashboard/UsersChart";
import { UsersTable } from "@/components/dashboard/UsersTable";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <DashboardSidebar />
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <StatsCard
                title="Total Astrologer"
                value="1"
                icon={<Users className="h-4 w-4" />}
              />
              <StatsCard
                title="Total Users"
                value="38"
                icon={<Users className="h-4 w-4" />}
              />
              <StatsCard
                title="Total Chats"
                value="37"
                icon={<MessageSquare className="h-4 w-4" />}
              />
              <StatsCard
                title="Total Calls"
                value="0"
                icon={<Phone className="h-4 w-4" />}
              />
              <StatsCard
                title="Total Money Added"
                value="₹0"
                icon={<Wallet className="h-4 w-4" />}
              />
            </div>

            <UsersChart />

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">New Users</h3>
              <UsersTable />
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;