import { useState, useEffect } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Sparkles,
  GitBranch,
  FolderKanban,
  Play,
  Bug,
  BarChart3,
  Puzzle,
  Settings,
  Plus,
} from "lucide-react";

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const pages = [
  { title: "Dashboard", icon: LayoutDashboard, path: "/" },
  { title: "AI Test Generator", icon: Sparkles, path: "/ai-generator" },
  { title: "Flow Builder", icon: GitBranch, path: "/flow-builder" },
  { title: "Test Suites", icon: FolderKanban, path: "/test-suites" },
  { title: "Test Runs", icon: Play, path: "/test-runs" },
  { title: "Defects", icon: Bug, path: "/defects" },
  { title: "Reports", icon: BarChart3, path: "/reports" },
  { title: "Integrations", icon: Puzzle, path: "/integrations" },
  { title: "Settings", icon: Settings, path: "/settings" },
];

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Pages">
          {pages.map((page) => (
            <CommandItem
              key={page.path}
              onSelect={() => {
                navigate(page.path);
                onOpenChange(false);
              }}
            >
              <page.icon className="mr-2 h-4 w-4" />
              {page.title}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Quick Actions">
          <CommandItem>
            <Plus className="mr-2 h-4 w-4" />
            Create Test Case
          </CommandItem>
          <CommandItem>
            <Plus className="mr-2 h-4 w-4" />
            Create Test Run
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
