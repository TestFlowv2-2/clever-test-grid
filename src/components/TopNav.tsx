import { useState } from "react";
import {
  Search,
  Bell,
  Plus,
  ChevronDown,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface TopNavProps {
  onOpenCommandPalette: () => void;
}

export function TopNav({ onOpenCommandPalette }: TopNavProps) {
  return (
    <header className="glass-header sticky top-0 z-40 h-14 flex items-center justify-between px-6">
      {/* Left: Workspace + Search */}
      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors">
              <div className="h-6 w-6 rounded-md bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                T
              </div>
              <span>TestFlow</span>
              <ChevronDown className="h-3 w-3 text-muted-foreground" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="bg-card border-border">
            <DropdownMenuItem>TestFlow Workspace</DropdownMenuItem>
            <DropdownMenuItem>Personal Workspace</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <button
          onClick={onOpenCommandPalette}
          className="flex items-center gap-2 h-8 px-3 rounded-md bg-secondary border border-border text-muted-foreground text-sm hover:border-primary/40 transition-colors min-w-[240px]"
        >
          <Search className="h-3.5 w-3.5" />
          <span>Search or jump to...</span>
          <kbd className="ml-auto text-xs bg-accent px-1.5 py-0.5 rounded text-muted-foreground">⌘K</kbd>
        </button>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-1.5 h-8">
              <Plus className="h-3.5 w-3.5" />
              Create
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-card border-border">
            <DropdownMenuItem>New Test Case</DropdownMenuItem>
            <DropdownMenuItem>New Test Run</DropdownMenuItem>
            <DropdownMenuItem>New Test Suite</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <button className="h-8 w-8 rounded-md flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors relative">
          <Bell className="h-4 w-4" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary" />
        </button>

        <button className="h-8 w-8 rounded-md flex items-center justify-center bg-accent text-muted-foreground hover:text-foreground transition-colors">
          <User className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}
