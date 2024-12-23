import { Home, Users, Calendar, MessageSquare, Wallet, History, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
  { title: "Dashboard", icon: Home, url: "/" },
  { title: "Manage Category", icon: Menu, url: "/category" },
  { title: "Manage Astrologer", icon: Users, url: "/astrologer" },
  { title: "Manage Users", icon: Users, url: "/users" },
  { title: "Manage Slider", icon: Calendar, url: "/slider" },
  { title: "Manage Wallet", icon: Wallet, url: "/wallet" },
  { title: "View Call History", icon: History, url: "/call-history" },
  { title: "View Chat History", icon: MessageSquare, url: "/chat-history" },
];

export function DashboardSidebar() {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarHeader className="border-b px-6 py-4">
        <h2 className="text-2xl font-bold text-primary">Astropunj</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 hover:bg-gray-100",
                        location.pathname === item.url && "bg-gray-100 text-gray-900"
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}