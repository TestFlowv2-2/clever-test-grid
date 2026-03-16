import { motion } from "framer-motion";

export function HeroIllustration() {
  return (
    <div className="relative w-full h-48 overflow-hidden rounded-xl mesh-bg">
      {/* Animated orbs */}
      <motion.div
        className="absolute w-32 h-32 rounded-full opacity-20"
        style={{ background: "var(--gradient-primary)", filter: "blur(40px)" }}
        animate={{ x: [0, 60, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-10 top-4 w-24 h-24 rounded-full opacity-15"
        style={{ background: "var(--gradient-accent)", filter: "blur(30px)" }}
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-1/3 bottom-2 w-20 h-20 rounded-full opacity-10"
        style={{ background: "var(--gradient-success)", filter: "blur(25px)" }}
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute left-[15%] top-[20%] animate-float"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="4" y="4" width="32" height="32" rx="8" stroke="hsl(252 100% 69%)" strokeWidth="1.5" opacity="0.5" />
          <rect x="10" y="10" width="20" height="20" rx="4" fill="hsl(252 100% 69%)" opacity="0.15" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute left-[45%] top-[15%] animate-float-delayed"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
      >
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="14" stroke="hsl(200 100% 60%)" strokeWidth="1.5" opacity="0.5" />
          <circle cx="18" cy="18" r="6" fill="hsl(200 100% 60%)" opacity="0.2" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute right-[20%] top-[30%] animate-float-slow"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <polygon points="16,2 30,26 2,26" stroke="hsl(153 64% 45%)" strokeWidth="1.5" opacity="0.5" fill="hsl(153 64% 45%)" fillOpacity="0.1" />
        </svg>
      </motion.div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-between px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-lg font-semibold text-foreground">Welcome back</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Your workspace is running smoothly — <span className="text-success font-medium">86.4% pass rate</span>
          </p>
        </motion.div>

        <motion.div
          className="flex gap-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Mini metric cards */}
          {[
            { label: "Tests Today", value: "34", color: "hsl(252 100% 69%)" },
            { label: "Resolved", value: "12", color: "hsl(153 64% 45%)" },
          ].map((m, i) => (
            <motion.div
              key={m.label}
              className="glass-card rounded-lg px-4 py-3 min-w-[100px]"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <p className="text-xs text-muted-foreground">{m.label}</p>
              <p className="text-xl font-bold mt-0.5" style={{ color: m.color }}>{m.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
