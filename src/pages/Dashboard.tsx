import { motion } from "framer-motion";
import {
  Play,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  TrendingUp,
  Users,
  Bug,
  Zap,
} from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { StatusChip, TestStatus } from "@/components/StatusChip";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

const pieData = [
  { name: "Pass", value: 142, color: "#2EB872" },
  { name: "Fail", value: 23, color: "#E24848" },
  { name: "Blocked", value: 8, color: "#F59E0B" },
  { name: "Untested", value: 47, color: "#64748B" },
];

const trendData = [
  { day: "Mon", defects: 3, resolved: 5 },
  { day: "Tue", defects: 7, resolved: 4 },
  { day: "Wed", defects: 2, resolved: 6 },
  { day: "Thu", defects: 5, resolved: 8 },
  { day: "Fri", defects: 4, resolved: 7 },
  { day: "Sat", defects: 1, resolved: 3 },
  { day: "Sun", defects: 2, resolved: 2 },
];

const teamData = [
  { name: "Alice Chen", cases: 45, pass: 38, fail: 5, blocked: 2 },
  { name: "Bob Martinez", cases: 32, pass: 28, fail: 3, blocked: 1 },
  { name: "Charlie Kim", cases: 51, pass: 42, fail: 7, blocked: 2 },
  { name: "Diana Park", cases: 28, pass: 25, fail: 2, blocked: 1 },
];

const recentActivity = [
  { action: "Test run completed", detail: "Sprint 24 Regression", status: "pass" as TestStatus, time: "2m ago" },
  { action: "Defect reported", detail: "Login flow - timeout error", status: "fail" as TestStatus, time: "15m ago" },
  { action: "Test case generated", detail: "AI: Payment checkout flow", status: "untested" as TestStatus, time: "1h ago" },
  { action: "Test blocked", detail: "API endpoint unavailable", status: "blocked" as TestStatus, time: "2h ago" },
  { action: "Test run completed", detail: "Smoke Tests v3.2", status: "pass" as TestStatus, time: "3h ago" },
];

const productivityData = [
  { week: "W1", created: 45, executed: 38 },
  { week: "W2", created: 52, executed: 48 },
  { week: "W3", created: 38, executed: 42 },
  { week: "W4", created: 61, executed: 55 },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

export default function Dashboard() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold text-foreground">Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-0.5">Overview of your testing workspace</p>
      </div>

      {/* Stats Row */}
      <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Test Cases"
          value="220"
          icon={<Zap className="h-5 w-5" />}
          trend={{ value: 12, positive: true }}
        />
        <StatCard
          title="Pass Rate"
          value="86.4%"
          icon={<CheckCircle2 className="h-5 w-5" />}
          trend={{ value: 3.2, positive: true }}
        />
        <StatCard
          title="Open Defects"
          value="17"
          icon={<Bug className="h-5 w-5" />}
          trend={{ value: 8, positive: false }}
        />
        <StatCard
          title="Active Testers"
          value="4"
          subtitle="2 currently online"
          icon={<Users className="h-5 w-5" />}
        />
      </motion.div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Pie Chart */}
        <motion.div variants={item} className="card-glow rounded-lg bg-card p-5">
          <h3 className="text-sm font-medium text-foreground mb-4">Test Execution Status</h3>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  innerRadius={55}
                  outerRadius={80}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {pieData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap gap-3 mt-2">
            {pieData.map((d) => (
              <div key={d.name} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="h-2 w-2 rounded-full" style={{ background: d.color }} />
                {d.name}: {d.value}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Defect Trends */}
        <motion.div variants={item} className="card-glow rounded-lg bg-card p-5">
          <h3 className="text-sm font-medium text-foreground mb-4">Defect Trends</h3>
          <div className="h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 12% 20%)" />
                <XAxis dataKey="day" tick={{ fill: "#94A3B8", fontSize: 11 }} axisLine={false} />
                <YAxis tick={{ fill: "#94A3B8", fontSize: 11 }} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    background: "#1B1D23",
                    border: "1px solid hsl(220 12% 20%)",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
                <Area type="monotone" dataKey="defects" stroke="#E24848" fill="#E24848" fillOpacity={0.1} />
                <Area type="monotone" dataKey="resolved" stroke="#2EB872" fill="#2EB872" fillOpacity={0.1} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Productivity */}
        <motion.div variants={item} className="card-glow rounded-lg bg-card p-5">
          <h3 className="text-sm font-medium text-foreground mb-4">QA Productivity</h3>
          <div className="h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={productivityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 12% 20%)" />
                <XAxis dataKey="week" tick={{ fill: "#94A3B8", fontSize: 11 }} axisLine={false} />
                <YAxis tick={{ fill: "#94A3B8", fontSize: 11 }} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    background: "#1B1D23",
                    border: "1px solid hsl(220 12% 20%)",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
                <Bar dataKey="created" fill="#7B61FF" radius={[4, 4, 0, 0]} />
                <Bar dataKey="executed" fill="#7B61FF" fillOpacity={0.4} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Recent Activity */}
        <motion.div variants={item} className="card-glow rounded-lg bg-card p-5">
          <h3 className="text-sm font-medium text-foreground mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivity.map((a, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <div>
                  <p className="text-sm text-foreground">{a.action}</p>
                  <p className="text-xs text-muted-foreground">{a.detail}</p>
                </div>
                <div className="flex items-center gap-3">
                  <StatusChip status={a.status} />
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{a.time}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Team Workload */}
        <motion.div variants={item} className="card-glow rounded-lg bg-card p-5">
          <h3 className="text-sm font-medium text-foreground mb-4">Team Workload</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-muted-foreground border-b border-border">
                  <th className="text-left py-2 font-medium">Tester</th>
                  <th className="text-center py-2 font-medium">Cases</th>
                  <th className="text-center py-2 font-medium">Pass</th>
                  <th className="text-center py-2 font-medium">Fail</th>
                  <th className="text-center py-2 font-medium">Blocked</th>
                </tr>
              </thead>
              <tbody>
                {teamData.map((t) => (
                  <tr key={t.name} className="border-b border-border last:border-0">
                    <td className="py-2.5 text-foreground">{t.name}</td>
                    <td className="py-2.5 text-center text-muted-foreground">{t.cases}</td>
                    <td className="py-2.5 text-center text-success">{t.pass}</td>
                    <td className="py-2.5 text-center text-destructive">{t.fail}</td>
                    <td className="py-2.5 text-center text-warning">{t.blocked}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
