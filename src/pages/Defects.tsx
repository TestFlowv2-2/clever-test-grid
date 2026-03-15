import { motion } from "framer-motion";
import { Bug, Plus, Search, Filter, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const defects = [
  { id: "DEF-001", title: "Login timeout on slow connections", severity: "Critical", status: "Open", assignee: "Alice Chen", reported: "1d ago", module: "Auth" },
  { id: "DEF-002", title: "Payment form doesn't validate CVV", severity: "High", status: "Open", assignee: "Bob Martinez", reported: "2d ago", module: "Billing" },
  { id: "DEF-003", title: "Profile image upload fails > 5MB", severity: "Medium", status: "In Progress", assignee: "Charlie Kim", reported: "3d ago", module: "Profile" },
  { id: "DEF-004", title: "Search results duplicated on pagination", severity: "Low", status: "Resolved", assignee: "Diana Park", reported: "5d ago", module: "Search" },
  { id: "DEF-005", title: "Notification bell count not updating", severity: "Medium", status: "Open", assignee: "Alice Chen", reported: "1d ago", module: "UI" },
  { id: "DEF-006", title: "API rate limit error not handled", severity: "High", status: "In Progress", assignee: "Bob Martinez", reported: "4d ago", module: "API" },
];

const severityColors: Record<string, string> = {
  Critical: "text-destructive bg-destructive/10",
  High: "text-warning bg-warning/10",
  Medium: "text-primary bg-primary/10",
  Low: "text-muted-foreground bg-muted",
};

const statusColors: Record<string, string> = {
  Open: "text-destructive",
  "In Progress": "text-warning",
  Resolved: "text-success",
};

export default function Defects() {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-foreground">Defects</h1>
          <p className="text-sm text-muted-foreground mt-0.5">{defects.filter(d => d.status !== "Resolved").length} open defects</p>
        </div>
        <Button size="sm" className="gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="h-3.5 w-3.5" /> Report Defect
        </Button>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
          <Input placeholder="Search defects..." className="pl-9 bg-secondary border-border h-8 text-sm" />
        </div>
        <Button variant="outline" size="sm" className="gap-1.5 border-border text-muted-foreground"><Filter className="h-3.5 w-3.5" /> Filter</Button>
        <Button variant="outline" size="sm" className="gap-1.5 border-border text-muted-foreground"><ArrowUpDown className="h-3.5 w-3.5" /> Sort</Button>
      </div>

      <div className="card-glow rounded-lg bg-card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-xs text-muted-foreground border-b border-border bg-accent/30">
              <th className="text-left py-2.5 px-4 font-medium">ID</th>
              <th className="text-left py-2.5 px-4 font-medium">Title</th>
              <th className="text-left py-2.5 px-4 font-medium">Severity</th>
              <th className="text-left py-2.5 px-4 font-medium">Status</th>
              <th className="text-left py-2.5 px-4 font-medium">Assignee</th>
              <th className="text-left py-2.5 px-4 font-medium">Module</th>
              <th className="text-left py-2.5 px-4 font-medium">Reported</th>
            </tr>
          </thead>
          <tbody>
            {defects.map((d) => (
              <tr key={d.id} className="border-b border-border last:border-0 hover:bg-accent/30 transition-colors cursor-pointer">
                <td className="py-3 px-4 font-mono text-xs text-muted-foreground">{d.id}</td>
                <td className="py-3 px-4 text-foreground font-medium">{d.title}</td>
                <td className="py-3 px-4">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${severityColors[d.severity]}`}>{d.severity}</span>
                </td>
                <td className={`py-3 px-4 text-xs font-medium ${statusColors[d.status]}`}>{d.status}</td>
                <td className="py-3 px-4 text-muted-foreground">{d.assignee}</td>
                <td className="py-3 px-4"><span className="text-xs px-2 py-0.5 rounded-full bg-accent text-muted-foreground">{d.module}</span></td>
                <td className="py-3 px-4 text-muted-foreground text-xs">{d.reported}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
