import { motion } from "framer-motion";
import { Settings as SettingsIcon, User, Bell, Shield, Palette } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export default function SettingsPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-xl font-semibold text-foreground">Settings</h1>
        <p className="text-sm text-muted-foreground mt-0.5">Manage your workspace preferences</p>
      </div>

      {/* Profile */}
      <div className="card-glow rounded-lg bg-card p-6 space-y-4">
        <div className="flex items-center gap-2 text-foreground mb-2">
          <User className="h-4 w-4" />
          <h3 className="text-sm font-medium">Profile</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-muted-foreground mb-1 block">Full Name</label>
            <Input defaultValue="QA Engineer" className="bg-secondary border-border" />
          </div>
          <div>
            <label className="text-xs text-muted-foreground mb-1 block">Email</label>
            <Input defaultValue="qa@testflow.ai" className="bg-secondary border-border" />
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="card-glow rounded-lg bg-card p-6 space-y-4">
        <div className="flex items-center gap-2 text-foreground mb-2">
          <Bell className="h-4 w-4" />
          <h3 className="text-sm font-medium">Notifications</h3>
        </div>
        <div className="space-y-3">
          {[
            "Test run completed",
            "New defect reported",
            "AI generation finished",
            "Weekly digest",
          ].map((label) => (
            <div key={label} className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{label}</span>
              <Switch defaultChecked />
            </div>
          ))}
        </div>
      </div>

      {/* Save */}
      <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Save Changes</Button>
    </motion.div>
  );
}
