import { Home, Users, Calendar, MessageSquare, Wallet, History, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const items = [
  { title: "Dashboard", icon: Home, url: "/" },
  { title: "Manage Category", icon: Menu, url: "#" },
  { title: "Manage Astrologer", icon: Users, url: "#" },
  { title: "Manage Users", icon: Users, url: "#" },
  { title: "Manage Slider", icon: Calendar, url: "#" },
  { title: "Manage Wallet", icon: Wallet, url: "#" },
  { title: "View Call History", icon: History, url: "#" },
  { title: "View Chat History", icon: MessageSquare, url: "#" },
];

export function DashboardSidebar() {
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
                        "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900",
                        item.title === "Dashboard" && "bg-gray-100 text-gray-900"
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