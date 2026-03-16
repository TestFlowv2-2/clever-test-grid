import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type TestStatus = "pass" | "fail" | "blocked" | "untested";

const statusConfig: Record<TestStatus, { label: string; className: string; dot: string }> = {
  pass: { label: "Pass", className: "status-pass", dot: "bg-success" },
  fail: { label: "Fail", className: "status-fail", dot: "bg-destructive" },
  blocked: { label: "Blocked", className: "status-blocked", dot: "bg-warning" },
  untested: { label: "Untested", className: "status-untested", dot: "bg-muted-foreground" },
};

interface StatusChipProps {
  status: TestStatus;
  className?: string;
  animate?: boolean;
}

export function StatusChip({ status, className, animate = true }: StatusChipProps) {
  const config = statusConfig[status];
  const Wrapper = animate ? motion.span : "span";

  return (
    <Wrapper
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium transition-all duration-200",
        config.className,
        className
      )}
      {...(animate ? {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        whileHover: { scale: 1.05 },
        transition: { type: "spring", stiffness: 400, damping: 20 }
      } : {})}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", config.dot, status === "pass" && "pulse-ring")} />
      {config.label}
    </Wrapper>
  );
}
