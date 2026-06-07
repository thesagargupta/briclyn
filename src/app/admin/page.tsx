import { Button } from "@/components/ui/Button";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="font-display-lg text-display-lg text-primary tracking-tight">
            Dashboard Overview
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
            Welcome back. Here is the operational status for today.
          </p>
        </div>
        <Button variant="secondary" className="flex items-center gap-2 shadow-[0_4px_12px_rgba(11,53,83,0.05)]">
          <span className="material-symbols-outlined text-sm">download</span>
          Export Report
        </Button>
      </div>

      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="bg-surface-main rounded-xl border border-border-subtle p-6 shadow-[0_4px_24px_rgba(11,53,83,0.05)] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="flex justify-between items-start mb-4">
            <div className="h-10 w-10 rounded-lg bg-surface-container flex items-center justify-center text-primary-container">
              <span className="material-symbols-outlined">group</span>
            </div>
            <span className="text-secondary-container text-xs font-bold bg-secondary-fixed-dim px-2 py-1 rounded-full flex items-center gap-1">
              <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>
                trending_up
              </span>{" "}
              12%
            </span>
          </div>
          <p className="font-label-sm text-label-sm text-text-muted uppercase tracking-wider">
            Total Visitors
          </p>
          <h3 className="font-headline-lg text-headline-lg text-primary mt-1">
            24,592
          </h3>
        </div>

        <div className="bg-surface-main rounded-xl border border-border-subtle p-6 shadow-[0_4px_24px_rgba(11,53,83,0.05)] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="flex justify-between items-start mb-4">
            <div className="h-10 w-10 rounded-lg bg-surface-container flex items-center justify-center text-primary-container">
              <span className="material-symbols-outlined">contact_mail</span>
            </div>
            <span className="text-secondary-container text-xs font-bold bg-secondary-fixed-dim px-2 py-1 rounded-full flex items-center gap-1">
              <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>
                trending_up
              </span>{" "}
              8%
            </span>
          </div>
          <p className="font-label-sm text-label-sm text-text-muted uppercase tracking-wider">
            Leads Received
          </p>
          <h3 className="font-headline-lg text-headline-lg text-primary mt-1">
            1,204
          </h3>
        </div>

        <div className="bg-surface-main rounded-xl border border-border-subtle p-6 shadow-[0_4px_24px_rgba(11,53,83,0.05)] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="flex justify-between items-start mb-4">
            <div className="h-10 w-10 rounded-lg bg-surface-container flex items-center justify-center text-primary-container">
              <span className="material-symbols-outlined">architecture</span>
            </div>
            <span className="text-outline text-xs font-bold bg-surface-alt px-2 py-1 rounded-full flex items-center gap-1">
              <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>
                horizontal_rule
              </span>{" "}
              0%
            </span>
          </div>
          <p className="font-label-sm text-label-sm text-text-muted uppercase tracking-wider">
            Active Projects
          </p>
          <h3 className="font-headline-lg text-headline-lg text-primary mt-1">
            34
          </h3>
        </div>

        <div className="bg-surface-main rounded-xl border border-border-subtle p-6 shadow-[0_4px_24px_rgba(11,53,83,0.05)] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="flex justify-between items-start mb-4">
            <div className="h-10 w-10 rounded-lg bg-surface-container flex items-center justify-center text-primary-container">
              <span className="material-symbols-outlined">work_history</span>
            </div>
            <span className="text-secondary-container text-xs font-bold bg-secondary-fixed-dim px-2 py-1 rounded-full flex items-center gap-1">
              <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>
                trending_up
              </span>{" "}
              24%
            </span>
          </div>
          <p className="font-label-sm text-label-sm text-text-muted uppercase tracking-wider">
            Job Applications
          </p>
          <h3 className="font-headline-lg text-headline-lg text-primary mt-1">
            458
          </h3>
        </div>

        <div className="bg-primary-container rounded-xl border border-primary p-6 shadow-[0_4px_24px_rgba(11,53,83,0.05)] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "16px 16px",
            }}
          ></div>
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center text-on-primary">
              <span className="material-symbols-outlined">engineering</span>
            </div>
            <span className="bg-surface-main text-primary text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
              Action Req.
            </span>
          </div>
          <p className="font-label-sm text-label-sm text-on-primary-container uppercase tracking-wider relative z-10">
            Workforce Requests
          </p>
          <h3 className="font-headline-lg text-headline-lg text-on-primary mt-1 relative z-10">
            12
          </h3>
        </div>
      </div>

      {/* Analytics Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Lead Analytics Bar Chart */}
        <div className="lg:col-span-7 bg-surface-main rounded-xl border border-border-subtle p-6 shadow-[0_4px_24px_rgba(11,53,83,0.05)]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-headline-md text-headline-md text-primary">
              Lead Analytics
            </h3>
            <select className="bg-surface-alt border-none text-sm rounded-md text-on-surface-variant focus:ring-primary-container cursor-pointer font-label-md text-label-md py-1 px-2">
              <option>Last 6 Months</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="h-64 w-full flex items-end gap-4 px-2">
            {[
              { month: "Jan", v1: "40%", v2: "65%" },
              { month: "Feb", v1: "50%", v2: "80%" },
              { month: "Mar", v1: "30%", v2: "45%" },
              { month: "Apr", v1: "60%", v2: "90%" },
              { month: "May", v1: "75%", v2: "100%", active: true },
              { month: "Jun", v1: "40%", v2: "55%" },
            ].map((m, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                <div className="w-full flex items-end gap-1 h-48 justify-center relative">
                  <div
                    className={`w-1/2 rounded-t-sm transition-colors ${
                      m.active
                        ? "bg-secondary-fixed-dim"
                        : "bg-surface-container-highest group-hover:bg-surface-dim"
                    }`}
                    style={{ height: m.v1 }}
                  ></div>
                  <div
                    className={`w-1/2 rounded-t-sm transition-colors ${
                      m.active
                        ? "bg-secondary-container"
                        : "bg-primary-container group-hover:bg-primary"
                    }`}
                    style={{ height: m.v2 }}
                  ></div>
                </div>
                <span
                  className={`font-label-sm text-label-sm ${
                    m.active
                      ? "text-secondary-container font-bold"
                      : "text-text-muted"
                  }`}
                >
                  {m.month}
                </span>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-6 mt-4 pt-4 border-t border-border-subtle">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-surface-container-highest"></div>
              <span className="font-label-sm text-label-sm text-text-muted">
                Inbound Leads
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary-container"></div>
              <span className="font-label-sm text-label-sm text-text-muted">
                Qualified Contacts
              </span>
            </div>
          </div>
        </div>

        {/* Recruitment Status Breakdown */}
        <div className="lg:col-span-5 bg-surface-main rounded-xl border border-border-subtle p-6 shadow-[0_4px_24px_rgba(11,53,83,0.05)]">
          <h3 className="font-headline-md text-headline-md text-primary mb-6">
            Recruitment Status
          </h3>
          <div className="space-y-6">
            {[
              {
                label: "New Applicants",
                val: "214 (45%)",
                pct: "45%",
                color: "bg-primary-container",
              },
              {
                label: "Shortlisted",
                val: "120 (25%)",
                pct: "25%",
                color: "bg-surface-tint",
              },
              {
                label: "In Interview",
                val: "84 (18%)",
                pct: "18%",
                color: "bg-secondary-fixed-dim",
              },
              {
                label: "Selected / Offer",
                val: "40 (12%)",
                pct: "12%",
                color: "bg-secondary-container",
                active: true,
              },
            ].map((stat, i) => (
              <div key={i}>
                <div className="flex justify-between items-end mb-2">
                  <span
                    className={`font-label-md text-label-md ${
                      stat.active
                        ? "text-secondary-container"
                        : "text-on-surface"
                    }`}
                  >
                    {stat.label}
                  </span>
                  <span className="font-label-sm text-label-sm text-text-muted">
                    {stat.val}
                  </span>
                </div>
                <div className="w-full h-2 bg-surface-alt rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${stat.color}`}
                    style={{ width: stat.pct }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-surface-alt rounded-lg p-4 flex items-start gap-4 border border-border-subtle">
            <div className="text-secondary-container mt-1">
              <span className="material-symbols-outlined">lightbulb</span>
            </div>
            <div>
              <h4 className="font-label-md text-label-md text-primary">
                Hiring Velocity is up
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1">
                Time to hire has decreased by 4 days compared to last quarter,
                driven by structured technical evaluations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-surface-main rounded-xl border border-border-subtle p-6 shadow-[0_4px_24px_rgba(11,53,83,0.05)]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-headline-md text-headline-md text-primary">
              Recent Activities
            </h3>
            <button className="text-primary-container font-label-md text-label-md hover:underline">
              View All
            </button>
          </div>
          <div className="relative border-l-2 border-border-subtle ml-3 space-y-8 pb-4">
            <div className="relative pl-6">
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-secondary-container border-4 border-surface-main"></div>
              <p className="font-label-sm text-label-sm text-text-muted mb-1">
                10 mins ago
              </p>
              <h4 className="font-label-md text-label-md text-on-surface">
                New Project Mobilization
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1">
                Workforce request approved for 'Downtown Metro Extension' site.
                24 personnel assigned.
              </p>
            </div>
            <div className="relative pl-6">
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-surface-tint border-4 border-surface-main"></div>
              <p className="font-label-sm text-label-sm text-text-muted mb-1">
                2 hours ago
              </p>
              <h4 className="font-label-md text-label-md text-on-surface">
                Lead Assigned: Corporate Facility
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1">
                High-value lead from TechCorp Inc. assigned to Engineering Sales
                Team A.
              </p>
            </div>
            <div className="relative pl-6">
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary-container border-4 border-surface-main"></div>
              <p className="font-label-sm text-label-sm text-text-muted mb-1">
                Yesterday, 14:30
              </p>
              <h4 className="font-label-md text-label-md text-on-surface">
                Recruitment Drive Completed
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1">
                Initial screening completed for Heavy Machinery Operators. 15
                candidates shortlisted.
              </p>
            </div>
          </div>
        </div>

        {/* Analytics Card Placeholder */}
        <div className="bg-surface-main rounded-xl border border-border-subtle p-6 shadow-[0_4px_24px_rgba(11,53,83,0.05)] flex flex-col justify-center items-center text-center">
          <div className="w-20 h-20 bg-surface-alt rounded-full flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-4xl text-outline">
              query_stats
            </span>
          </div>
          <h3 className="font-headline-md text-headline-md text-primary mb-2">
            Deep Dive Analytics
          </h3>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[384px] mb-6">
            Generate comprehensive structural reports and workforce optimization
            models directly from the data warehouse.
          </p>
          <button className="border border-border-subtle text-primary-container px-6 py-2 rounded-lg font-label-md text-label-md hover:bg-surface-alt transition-colors">
            Open Data Studio
          </button>
        </div>
      </div>
    </div>
  );
}
