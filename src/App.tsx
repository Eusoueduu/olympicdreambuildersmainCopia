import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import CartaConvite from "./pages/CartaConvite";
import Fotos from "./pages/Fotos";
import Objetivos from "./pages/Objetivos";
import Contatos from "./pages/Contatos";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/carta-convite" element={<CartaConvite />} />
          <Route path="/fotos" element={<Fotos />} />
          <Route path="/objetivos" element={<Objetivos />} />
          <Route path="/contatos" element={<Contatos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
