import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export function AnimatedCounter({ value, duration = 1.2, suffix = "", prefix = "" }: AnimatedCounterProps) {
  const spring = useSpring(0, { duration: duration * 1000, bounce: 0 });
  const display = useTransform(spring, (v) => `${prefix}${Math.round(v)}${suffix}`);
  const [text, setText] = useState(`${prefix}0${suffix}`);

  useEffect(() => {
    spring.set(value);
    const unsub = display.on("change", (v) => setText(v));
    return unsub;
  }, [value, spring, display]);

  return (
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {text}
    </motion.span>
  );
}
