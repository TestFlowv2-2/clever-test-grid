import { motion } from "framer-motion";
import { FolderKanban, Plus, MoreHorizontal, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusChip, TestStatus } from "@/components/StatusChip";

const suites = [
  { name: "Authentication Suite", cases: 24, pass: 20, fail: 3, blocked: 1, lastRun: "2h ago" },
  { name: "Core Features", cases: 45, pass: 38, fail: 5, blocked: 2, lastRun: "5h ago" },
  { name: "Billing & Payments", cases: 18, pass: 12, fail: 4, blocked: 2, lastRun: "1d ago" },
  { name: "User Management", cases: 32, pass: 30, fail: 1, blocked: 1, lastRun: "1d ago" },
  { name: "API Integration Tests", cases: 56, pass: 48, fail: 6, blocked: 2, lastRun: "3h ago" },
  { name: "Mobile Responsive", cases: 15, pass: 11, fail: 3, blocked: 1, lastRun: "2d ago" },
];

export default function TestSuites() {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-foreground">Test Suites</h1>
          <p className="text-sm text-muted-foreground mt-0.5">{suites.length} suites</p>
        </div>
        <Button size="sm" className="gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="h-3.5 w-3.5" /> New Suite
        </Button>
      </div>

      <div className="grid gap-3">
        {suites.map((s) => {
          const total = s.cases;
          const passPercent = Math.round((s.pass / total) * 100);
          return (
            <div key={s.name} className="card-glow rounded-lg bg-card p-4 flex items-center justify-between cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <FolderKanban className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{s.name}</p>
                  <p className="text-xs text-muted-foreground">{s.cases} cases · Last run {s.lastRun}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3 text-xs">
                  <span className="text-success">{s.pass} pass</span>
                  <span className="text-destructive">{s.fail} fail</span>
                  <span className="text-warning">{s.blocked} blocked</span>
                </div>
                <div className="w-24 h-1.5 rounded-full bg-accent overflow-hidden">
                  <div className="h-full rounded-full bg-success" style={{ width: `${passPercent}%` }} />
                </div>
                <span className="text-xs text-muted-foreground w-10 text-right">{passPercent}%</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
