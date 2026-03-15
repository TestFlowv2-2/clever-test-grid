import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Download, FolderPlus, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { StatusChip, TestStatus } from "@/components/StatusChip";

interface GeneratedStep {
  id: number;
  step: string;
  expectedResult: string;
  priority: "High" | "Medium" | "Low";
  type: "Functional" | "Regression" | "Edge Case";
}

const mockSteps: GeneratedStep[] = [
  { id: 1, step: "Navigate to login page", expectedResult: "Login form is displayed with email and password fields", priority: "High", type: "Functional" },
  { id: 2, step: "Enter valid email and password", expectedResult: "Credentials are accepted, fields show no errors", priority: "High", type: "Functional" },
  { id: 3, step: "Click 'Sign In' button", expectedResult: "User is redirected to dashboard", priority: "High", type: "Functional" },
  { id: 4, step: "Enter invalid email format", expectedResult: "Validation error: 'Please enter a valid email'", priority: "Medium", type: "Edge Case" },
  { id: 5, step: "Submit form with empty fields", expectedResult: "Both fields show required validation errors", priority: "Medium", type: "Edge Case" },
  { id: 6, step: "Enter correct email with wrong password 5 times", expectedResult: "Account is locked after 5 failed attempts", priority: "High", type: "Regression" },
];

const priorityColors: Record<string, string> = {
  High: "text-destructive",
  Medium: "text-warning",
  Low: "text-muted-foreground",
};

export default function AIGenerator() {
  const [requirement, setRequirement] = useState("");
  const [userStory, setUserStory] = useState("");
  const [criteria, setCriteria] = useState("");
  const [generating, setGenerating] = useState(false);
  const [steps, setSteps] = useState<GeneratedStep[]>([]);

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => {
      setSteps(mockSteps);
      setGenerating(false);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-xl font-semibold text-foreground">AI Test Case Generator</h1>
        <p className="text-sm text-muted-foreground mt-0.5">Generate comprehensive test cases from requirements</p>
      </div>

      {/* Input Section */}
      <div className="card-glow rounded-lg bg-card p-6 space-y-4">
        <div>
          <label className="text-sm font-medium text-foreground mb-1.5 block">Requirement</label>
          <Input
            value={requirement}
            onChange={(e) => setRequirement(e.target.value)}
            placeholder="e.g., User authentication with email and password"
            className="bg-secondary border-border"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-1.5 block">User Story</label>
          <Textarea
            value={userStory}
            onChange={(e) => setUserStory(e.target.value)}
            placeholder="As a user, I want to log in so that I can access my dashboard..."
            className="bg-secondary border-border min-h-[80px]"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-1.5 block">Acceptance Criteria</label>
          <Textarea
            value={criteria}
            onChange={(e) => setCriteria(e.target.value)}
            placeholder="- User can log in with valid credentials&#10;- Invalid credentials show error message&#10;- Account locks after 5 failed attempts"
            className="bg-secondary border-border min-h-[80px]"
          />
        </div>
        <Button
          onClick={handleGenerate}
          disabled={generating}
          className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
        >
          {generating ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Sparkles className="h-4 w-4" />
          )}
          {generating ? "Generating..." : "Generate Test Cases"}
        </Button>
      </div>

      {/* Output */}
      {steps.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="card-glow rounded-lg bg-card p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-foreground">Generated Test Cases ({steps.length})</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-1.5 border-border text-muted-foreground hover:text-foreground">
                <Download className="h-3.5 w-3.5" />
                Export CSV
              </Button>
              <Button variant="outline" size="sm" className="gap-1.5 border-border text-muted-foreground hover:text-foreground">
                <FolderPlus className="h-3.5 w-3.5" />
                Add to Suite
              </Button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-muted-foreground border-b border-border">
                  <th className="text-left py-2 font-medium w-8">#</th>
                  <th className="text-left py-2 font-medium">Step</th>
                  <th className="text-left py-2 font-medium">Expected Result</th>
                  <th className="text-left py-2 font-medium">Priority</th>
                  <th className="text-left py-2 font-medium">Type</th>
                </tr>
              </thead>
              <tbody>
                {steps.map((s) => (
                  <tr key={s.id} className="border-b border-border last:border-0 hover:bg-accent/50 transition-colors">
                    <td className="py-3 text-muted-foreground font-mono text-xs">{s.id}</td>
                    <td className="py-3 text-foreground font-mono text-xs">{s.step}</td>
                    <td className="py-3 text-muted-foreground text-xs">{s.expectedResult}</td>
                    <td className={`py-3 text-xs font-medium ${priorityColors[s.priority]}`}>{s.priority}</td>
                    <td className="py-3">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-accent text-muted-foreground">{s.type}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
