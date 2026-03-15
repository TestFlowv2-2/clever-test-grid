import { motion } from "framer-motion";
import { Puzzle, ExternalLink, Check, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const integrations = [
  { name: "Jira", desc: "Sync defects and test cases with Jira issues", connected: true, icon: "🔷" },
  { name: "Slack", desc: "Get notifications on test run results", connected: true, icon: "💬" },
  { name: "GitHub", desc: "Link test cases to pull requests and commits", connected: false, icon: "🐙" },
  { name: "Jenkins", desc: "Trigger test runs from CI/CD pipelines", connected: false, icon: "🔧" },
  { name: "Confluence", desc: "Export reports to Confluence pages", connected: true, icon: "📄" },
  { name: "Selenium Grid", desc: "Run automated tests on remote browsers", connected: false, icon: "🌐" },
];

export default function Integrations() {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-foreground">Integrations</h1>
        <p className="text-sm text-muted-foreground mt-0.5">Connect your testing tools</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {integrations.map((i) => (
          <div key={i.name} className="card-glow rounded-lg bg-card p-5 flex flex-col">
            <div className="flex items-start justify-between mb-3">
              <span className="text-2xl">{i.icon}</span>
              {i.connected && (
                <span className="flex items-center gap-1 text-xs text-success">
                  <Check className="h-3 w-3" /> Connected
                </span>
              )}
            </div>
            <h3 className="text-sm font-medium text-foreground">{i.name}</h3>
            <p className="text-xs text-muted-foreground mt-1 flex-1">{i.desc}</p>
            <Button
              variant={i.connected ? "outline" : "default"}
              size="sm"
              className={`mt-4 gap-1.5 ${i.connected ? "border-border text-muted-foreground" : "bg-primary text-primary-foreground"}`}
            >
              {i.connected ? (
                <>
                  <ExternalLink className="h-3.5 w-3.5" /> Configure
                </>
              ) : (
                <>
                  <Plus className="h-3.5 w-3.5" /> Connect
                </>
              )}
            </Button>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
