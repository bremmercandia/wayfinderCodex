import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CharacterProvider } from "@/context/CharacterProvider";
import { routers } from "./router";

const queryClient = new QueryClient();

const App = () => {
  const router = createBrowserRouter(routers, {
    basename: import.meta.env.BASE_URL,
  });
  return (
    <QueryClientProvider client={queryClient}>
      <CharacterProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <RouterProvider router={router} />
        </TooltipProvider>
      </CharacterProvider>
    </QueryClientProvider>
  );
};

export default App;