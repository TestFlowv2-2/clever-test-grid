import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard, Sparkles, GitBranch, FolderKanban, Play,
  Bug, BarChart3, Puzzle, Settings, ChevronRight, Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
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

interface AppSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function AppSidebar({ collapsed, onToggle }: AppSidebarProps) {
  const location = useLocation();

  return (
    <motion.aside
      animate={{ width: collapsed ? 64 : 240 }}
      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      className="fixed left-0 top-0 h-screen bg-sidebar border-r border-sidebar-border z-50 flex flex-col"
    >
      {/* Logo */}
      <div className="h-14 flex items-center px-4 border-b border-sidebar-border">
        <motion.div whileHover={{ rotate: 15, scale: 1.1 }} transition={{ type: "spring", stiffness: 400 }}>
          <Zap className="h-6 w-6 text-primary shrink-0" />
        </motion.div>
        <AnimatePresence>
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.15 }}
              className="ml-2 font-semibold text-foreground text-sm tracking-tight"
            >
              TestFlow AI
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-3 px-2 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => {
          const active = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "relative flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors duration-150",
                "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                active ? "text-foreground font-medium" : "text-sidebar-foreground"
              )}
              title={collapsed ? item.title : undefined}
            >
              {active && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute inset-0 rounded-md bg-sidebar-accent"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <motion.div
                className="relative z-10 flex items-center gap-3"
                whileHover={{ x: collapsed ? 0 : 2 }}
                transition={{ duration: 0.15 }}
              >
                <item.icon className="h-4 w-4 shrink-0" />
                <AnimatePresence>
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.1 }}
                    >
                      {item.title}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          );
        })}
      </nav>

      {/* Collapse */}
      <motion.button
        onClick={onToggle}
        className="h-10 flex items-center justify-center border-t border-sidebar-border text-sidebar-foreground hover:text-foreground transition-colors"
        whileHover={{ backgroundColor: "hsl(225 11% 15%)" }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div animate={{ rotate: collapsed ? 0 : 180 }} transition={{ duration: 0.2 }}>
          <ChevronRight className="h-4 w-4" />
        </motion.div>
      </motion.button>
    </motion.aside>
  );
}
