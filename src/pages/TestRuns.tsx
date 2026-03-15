import { useState } from "react";
import { motion } from "framer-motion";
import { Filter, ArrowUpDown, MoreHorizontal, Play, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StatusChip, TestStatus } from "@/components/StatusChip";

interface TestRun {
  id: string;
  title: string;
  suite: string;
  status: TestStatus;
  assignee: string;
  executed: string;
  duration: string;
  environment: string;
}

const testRuns: TestRun[] = [
  { id: "TR-001", title: "Sprint 24 Regression", suite: "Core Features", status: "pass", assignee: "Alice Chen", executed: "2h ago", duration: "12m 34s", environment: "Staging" },
  { id: "TR-002", title: "Login Flow Smoke Test", suite: "Authentication", status: "fail", assignee: "Bob Martinez", executed: "3h ago", duration: "4m 12s", environment: "Production" },
  { id: "TR-003", title: "Payment Integration", suite: "Billing", status: "blocked", assignee: "Charlie Kim", executed: "5h ago", duration: "—", environment: "Dev" },
  { id: "TR-004", title: "User Profile CRUD", suite: "User Management", status: "pass", assignee: "Diana Park", executed: "1d ago", duration: "8m 45s", environment: "Staging" },
  { id: "TR-005", title: "Search & Filters", suite: "Discovery", status: "untested", assignee: "Alice Chen", executed: "—", duration: "—", environment: "Dev" },
  { id: "TR-006", title: "Notification System", suite: "Core Features", status: "pass", assignee: "Bob Martinez", executed: "1d ago", duration: "6m 22s", environment: "Staging" },
  { id: "TR-007", title: "File Upload E2E", suite: "Media", status: "fail", assignee: "Charlie Kim", executed: "2d ago", duration: "15m 03s", environment: "Dev" },
  { id: "TR-008", title: "Dashboard Widgets", suite: "Analytics", status: "pass", assignee: "Diana Park", executed: "2d ago", duration: "3m 18s", environment: "Production" },
];

export default function TestRuns() {
  const [search, setSearch] = useState("");

  const filtered = testRuns.filter(
    (r) =>
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-foreground">Test Runs</h1>
          <p className="text-sm text-muted-foreground mt-0.5">{testRuns.length} total runs</p>
        </div>
        <Button size="sm" className="gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90">
          <Play className="h-3.5 w-3.5" />
          New Run
        </Button>
      </div>

      {/* Filters Bar */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search test runs..."
            className="pl-9 bg-secondary border-border h-8 text-sm"
          />
        </div>
        <Button variant="outline" size="sm" className="gap-1.5 border-border text-muted-foreground hover:text-foreground">
          <Filter className="h-3.5 w-3.5" />
          Filter
        </Button>
        <Button variant="outline" size="sm" className="gap-1.5 border-border text-muted-foreground hover:text-foreground">
          <ArrowUpDown className="h-3.5 w-3.5" />
          Sort
        </Button>
      </div>

      {/* Table */}
      <div className="card-glow rounded-lg bg-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-muted-foreground border-b border-border bg-accent/30">
                <th className="text-left py-2.5 px-4 font-medium">ID</th>
                <th className="text-left py-2.5 px-4 font-medium">Title</th>
                <th className="text-left py-2.5 px-4 font-medium">Suite</th>
                <th className="text-left py-2.5 px-4 font-medium">Status</th>
                <th className="text-left py-2.5 px-4 font-medium">Assignee</th>
                <th className="text-left py-2.5 px-4 font-medium">Executed</th>
                <th className="text-left py-2.5 px-4 font-medium">Duration</th>
                <th className="text-left py-2.5 px-4 font-medium">Env</th>
                <th className="w-8"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((run) => (
                <tr
                  key={run.id}
                  className="border-b border-border last:border-0 hover:bg-accent/30 transition-colors cursor-pointer"
                >
                  <td className="py-3 px-4 font-mono text-xs text-muted-foreground">{run.id}</td>
                  <td className="py-3 px-4 text-foreground font-medium">{run.title}</td>
                  <td className="py-3 px-4 text-muted-foreground">{run.suite}</td>
                  <td className="py-3 px-4">
                    <StatusChip status={run.status} />
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">{run.assignee}</td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">{run.executed}</td>
                  <td className="py-3 px-4 text-muted-foreground font-mono text-xs">{run.duration}</td>
                  <td className="py-3 px-4">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-accent text-muted-foreground">{run.environment}</span>
                  </td>
                  <td className="py-3 px-2">
                    <button className="text-muted-foreground hover:text-foreground">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
