import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppLayout } from "@/components/AppLayout";
import Dashboard from "@/pages/Dashboard";
import AIGenerator from "@/pages/AIGenerator";
import FlowBuilder from "@/pages/FlowBuilder";
import TestSuites from "@/pages/TestSuites";
import TestRuns from "@/pages/TestRuns";
import Defects from "@/pages/Defects";
import Reports from "@/pages/Reports";
import Integrations from "@/pages/Integrations";
import SettingsPage from "@/pages/SettingsPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/ai-generator" element={<AIGenerator />} />
            <Route path="/flow-builder" element={<FlowBuilder />} />
            <Route path="/test-suites" element={<TestSuites />} />
            <Route path="/test-runs" element={<TestRuns />} />
            <Route path="/defects" element={<Defects />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
