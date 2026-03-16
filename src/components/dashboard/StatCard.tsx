import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AnimatedCounter } from "./AnimatedCounter";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: ReactNode;
  trend?: { value: number; positive: boolean };
  index?: number;
}

export function StatCard({ title, value, subtitle, icon, trend, index = 0 }: StatCardProps) {
  const numericValue = typeof value === "string" ? parseFloat(value.replace(/[^0-9.]/g, "")) : value;
  const suffix = typeof value === "string" ? value.replace(/[0-9.]/g, "") : "";

  return (
    <motion.div
      className="card-glow gradient-border rounded-lg bg-card p-5 group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -2 }}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-2xl font-semibold text-foreground mt-1">
            {!isNaN(numericValue) ? (
              <AnimatedCounter value={numericValue} suffix={suffix} />
            ) : (
              value
            )}
          </p>
          {subtitle && (
            <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
          )}
          {trend && (
            <motion.p
              className={cn(
                "text-xs mt-1 font-medium",
                trend.positive ? "text-success" : "text-destructive"
              )}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.08 }}
            >
              {trend.positive ? "↑" : "↓"} {Math.abs(trend.value)}% from last week
            </motion.p>
          )}
        </div>
        <motion.div
          className="h-10 w-10 rounded-lg flex items-center justify-center text-primary"
          style={{ background: "hsl(252 100% 69% / 0.1)" }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {icon}
        </motion.div>
      </div>
    </motion.div>
  );
}
