import { motion } from "framer-motion";
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
  LineChart,
  Line,
} from "recharts";

const passRateData = [
  { sprint: "S20", rate: 78 },
  { sprint: "S21", rate: 82 },
  { sprint: "S22", rate: 79 },
  { sprint: "S23", rate: 88 },
  { sprint: "S24", rate: 86 },
];

const coverageData = [
  { module: "Auth", coverage: 92 },
  { module: "Billing", coverage: 74 },
  { module: "Profile", coverage: 88 },
  { module: "Search", coverage: 65 },
  { module: "Admin", coverage: 81 },
];

const defectDensity = [
  { sprint: "S20", density: 4.2 },
  { sprint: "S21", density: 3.8 },
  { sprint: "S22", density: 5.1 },
  { sprint: "S23", density: 2.9 },
  { sprint: "S24", density: 2.4 },
];

const testerPerf = [
  { name: "Alice", passRate: 94, avgTime: "6m", cases: 45 },
  { name: "Bob", passRate: 87, avgTime: "8m", cases: 32 },
  { name: "Charlie", passRate: 82, avgTime: "10m", cases: 51 },
  { name: "Diana", passRate: 91, avgTime: "5m", cases: 28 },
];

const tooltipStyle = {
  background: "#1B1D23",
  border: "1px solid hsl(220 12% 20%)",
  borderRadius: "8px",
  fontSize: "12px",
};

export default function Reports() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-xl font-semibold text-foreground">Reports & Analytics</h1>
        <p className="text-sm text-muted-foreground mt-0.5">Testing metrics and insights</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Pass Rate Trend */}
        <div className="card-glow rounded-lg bg-card p-5">
          <h3 className="text-sm font-medium text-foreground mb-4">Pass Rate Trend</h3>
          <div className="h-[240px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={passRateData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 12% 20%)" />
                <XAxis dataKey="sprint" tick={{ fill: "#94A3B8", fontSize: 11 }} axisLine={false} />
                <YAxis tick={{ fill: "#94A3B8", fontSize: 11 }} axisLine={false} domain={[60, 100]} />
                <Tooltip contentStyle={tooltipStyle} />
                <Line type="monotone" dataKey="rate" stroke="#7B61FF" strokeWidth={2} dot={{ fill: "#7B61FF", r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Test Coverage */}
        <div className="card-glow rounded-lg bg-card p-5">
          <h3 className="text-sm font-medium text-foreground mb-4">Test Coverage by Module</h3>
          <div className="h-[240px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={coverageData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 12% 20%)" />
                <XAxis type="number" tick={{ fill: "#94A3B8", fontSize: 11 }} axisLine={false} domain={[0, 100]} />
                <YAxis dataKey="module" type="category" tick={{ fill: "#94A3B8", fontSize: 11 }} axisLine={false} width={60} />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar dataKey="coverage" fill="#2EB872" radius={[0, 4, 4, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Defect Density */}
        <div className="card-glow rounded-lg bg-card p-5">
          <h3 className="text-sm font-medium text-foreground mb-4">Defect Density (per 100 LOC)</h3>
          <div className="h-[240px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={defectDensity}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 12% 20%)" />
                <XAxis dataKey="sprint" tick={{ fill: "#94A3B8", fontSize: 11 }} axisLine={false} />
                <YAxis tick={{ fill: "#94A3B8", fontSize: 11 }} axisLine={false} />
                <Tooltip contentStyle={tooltipStyle} />
                <Area type="monotone" dataKey="density" stroke="#E24848" fill="#E24848" fillOpacity={0.1} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Tester Performance */}
        <div className="card-glow rounded-lg bg-card p-5">
          <h3 className="text-sm font-medium text-foreground mb-4">Tester Performance</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-muted-foreground border-b border-border">
                <th className="text-left py-2 font-medium">Tester</th>
                <th className="text-center py-2 font-medium">Pass Rate</th>
                <th className="text-center py-2 font-medium">Avg Time</th>
                <th className="text-center py-2 font-medium">Cases</th>
              </tr>
            </thead>
            <tbody>
              {testerPerf.map((t) => (
                <tr key={t.name} className="border-b border-border last:border-0">
                  <td className="py-2.5 text-foreground">{t.name}</td>
                  <td className="py-2.5 text-center">
                    <span className={t.passRate >= 90 ? "text-success" : t.passRate >= 80 ? "text-warning" : "text-destructive"}>
                      {t.passRate}%
                    </span>
                  </td>
                  <td className="py-2.5 text-center text-muted-foreground font-mono text-xs">{t.avgTime}</td>
                  <td className="py-2.5 text-center text-muted-foreground">{t.cases}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
