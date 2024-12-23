import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/Sidebar";
import { ChatHistoryTable } from "@/components/dashboard/ChatHistoryTable";

const ChatHistory = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <DashboardSidebar />
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold tracking-tight">Chat History</h2>
            </div>
            <ChatHistoryTable />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default ChatHistory;