import { motion } from "framer-motion";
import { Plus, Play, Trash2, MousePointer2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const nodes = [
  { id: 1, label: "Open Browser", x: 80, y: 60, type: "action" },
  { id: 2, label: "Navigate to Login", x: 300, y: 60, type: "action" },
  { id: 3, label: "Enter Credentials", x: 520, y: 60, type: "action" },
  { id: 4, label: "Valid?", x: 400, y: 180, type: "condition" },
  { id: 5, label: "Dashboard Loaded", x: 250, y: 300, type: "assertion" },
  { id: 6, label: "Show Error", x: 550, y: 300, type: "action" },
];

const nodeColors: Record<string, string> = {
  action: "border-primary/50 bg-primary/5",
  condition: "border-warning/50 bg-warning/5",
  assertion: "border-success/50 bg-success/5",
};

export default function FlowBuilder() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-foreground">Visual Test Flow Builder</h1>
          <p className="text-sm text-muted-foreground mt-0.5">Design test workflows with drag-and-drop nodes</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1.5 border-border text-muted-foreground hover:text-foreground">
            <Plus className="h-3.5 w-3.5" />
            Add Node
          </Button>
          <Button size="sm" className="gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90">
            <Play className="h-3.5 w-3.5" />
            Run Flow
          </Button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="card-glow rounded-lg bg-card p-3 flex items-center gap-2">
        <Button variant="ghost" size="sm" className="gap-1.5 text-muted-foreground hover:text-foreground">
          <MousePointer2 className="h-3.5 w-3.5" /> Select
        </Button>
        <div className="h-4 w-px bg-border" />
        <Button variant="ghost" size="sm" className="gap-1.5 text-muted-foreground hover:text-foreground">
          <Plus className="h-3.5 w-3.5" /> Action
        </Button>
        <Button variant="ghost" size="sm" className="gap-1.5 text-warning hover:text-warning">
          <Plus className="h-3.5 w-3.5" /> Condition
        </Button>
        <Button variant="ghost" size="sm" className="gap-1.5 text-success hover:text-success">
          <Plus className="h-3.5 w-3.5" /> Assertion
        </Button>
        <div className="flex-1" />
        <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
          <Trash2 className="h-3.5 w-3.5" />
        </Button>
      </div>

      {/* Canvas */}
      <div className="card-glow rounded-lg bg-card min-h-[500px] relative overflow-hidden dotted-grid">
        {/* SVG Connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <line x1="180" y1="85" x2="300" y2="85" stroke="hsl(220 12% 30%)" strokeWidth="2" />
          <line x1="400" y1="85" x2="520" y2="85" stroke="hsl(220 12% 30%)" strokeWidth="2" />
          <line x1="430" y1="105" x2="430" y2="180" stroke="hsl(220 12% 30%)" strokeWidth="2" />
          <line x1="380" y1="220" x2="300" y2="300" stroke="hsl(220 12% 30%)" strokeWidth="2" />
          <line x1="480" y1="220" x2="580" y2="300" stroke="hsl(220 12% 30%)" strokeWidth="2" />
        </svg>

        {/* Nodes */}
        {nodes.map((node) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: node.id * 0.05 }}
            className={`absolute cursor-grab active:cursor-grabbing rounded-lg border-2 px-4 py-2.5 text-xs font-medium text-foreground shadow-lg ${nodeColors[node.type]}`}
            style={{ left: node.x, top: node.y }}
          >
            {node.label}
            {/* Input/Output ports */}
            <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full border-2 border-border bg-card" />
            <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full border-2 border-border bg-card" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
