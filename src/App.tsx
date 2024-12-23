import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Category from "./pages/Category";
import Astrologer from "./pages/Astrologer";
import Users from "./pages/Users";
import Slider from "./pages/Slider";
import Wallet from "./pages/Wallet";
import CallHistory from "./pages/CallHistory";
import ChatHistory from "./pages/ChatHistory";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/category" element={<Category />} />
          <Route path="/astrologer" element={<Astrologer />} />
          <Route path="/users" element={<Users />} />
          <Route path="/slider" element={<Slider />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/call-history" element={<CallHistory />} />
          <Route path="/chat-history" element={<ChatHistory />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;