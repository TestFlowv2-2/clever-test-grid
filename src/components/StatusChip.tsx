import { cn } from "@/lib/utils";

export type TestStatus = "pass" | "fail" | "blocked" | "untested";

const statusConfig: Record<TestStatus, { label: string; className: string }> = {
  pass: { label: "Pass", className: "status-pass" },
  fail: { label: "Fail", className: "status-fail" },
  blocked: { label: "Blocked", className: "status-blocked" },
  untested: { label: "Untested", className: "status-untested" },
};

interface StatusChipProps {
  status: TestStatus;
  className?: string;
}

export function StatusChip({ status, className }: StatusChipProps) {
  const config = statusConfig[status];
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
}
