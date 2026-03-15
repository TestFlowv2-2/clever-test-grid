import { useState } from "react";
import { Outlet } from "react-router-dom";
import { AppSidebar } from "@/components/AppSidebar";
import { TopNav } from "@/components/TopNav";
import { CommandPalette } from "@/components/CommandPalette";

export function AppLayout() {
  const [commandOpen, setCommandOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <AppSidebar />
      <div className="ml-[240px] transition-all duration-200">
        <TopNav onOpenCommandPalette={() => setCommandOpen(true)} />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
      <CommandPalette open={commandOpen} onOpenChange={setCommandOpen} />
    </div>
  );
}
