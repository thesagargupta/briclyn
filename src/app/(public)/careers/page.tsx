import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function CareersPage() {
  const jobs = [
    {
      title: "Senior Civil Engineer",
      type: "Full-time",
      desc: "Lead structural integrity assessments and oversee large-scale infrastructure projects from blueprint to execution.",
      location: "New York, NY",
      department: "Engineering",
    },
    {
      title: "Site Safety Officer",
      type: "Full-time",
      desc: "Enforce strict compliance with OSHA standards and internal safety protocols to ensure a zero-incident work environment.",
      location: "Chicago, IL",
      department: "Safety & Compliance",
    },
    {
      title: "Site Supervisor",
      type: "Contract",
      desc: "Coordinate daily on-site operations, manage verified workforce crews, and ensure project milestones are met on schedule.",
      location: "Austin, TX",
      department: "Site Management",
    },
  ];

  return (
    <main className="flex-1 px-6 md:px-12 py-10 flex flex-col gap-10 max-w-container-max mx-auto w-full">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full w-max border border-border-subtle">
            <span
              className="material-symbols-outlined text-[16px] text-primary"
              data-icon="rocket_launch"
            >
              rocket_launch
            </span>
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
              Career Opportunities
            </span>
          </div>
          <h1 className="font-display-lg text-display-lg text-primary leading-tight">
            Join the Workforce of Tomorrow
          </h1>
          <p className="font-body-lg text-body-lg text-text-muted max-w-[576px]">
            Build the infrastructure of the future with BrickLyn. We are looking
            for dedicated professionals to drive innovation in civil engineering,
            site management, and rigorous safety protocols.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Button href="#open-positions">View Open Roles</Button>
          </div>
        </div>
          <div className="relative h-[300px] md:h-auto rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(11,53,83,0.05)] border border-border-subtle group">
            <img
              alt="Construction Worker"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="/career-hero.webp"
            />
        </div>
      </section>

      {/* Search & Filters */}
      <section className="bg-surface-main border border-border-subtle rounded-xl p-6 shadow-[0_4px_12px_rgba(11,53,83,0.05)] flex flex-col lg:flex-row gap-4 items-end">
        <div className="flex-1 w-full flex flex-col gap-2">
          <label className="font-label-sm text-label-sm text-on-surface-variant">
            Search Roles
          </label>
          <div className="relative">
            <span
              className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
              data-icon="search"
            >
              search
            </span>
            <input
              className="w-full pl-10 pr-4 py-2 bg-surface-alt border border-border-subtle rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 font-body-md text-on-surface transition-all"
              placeholder="e.g. Civil Engineer"
              type="text"
            />
          </div>
        </div>
        <div className="flex-1 w-full flex flex-col gap-2">
          <label className="font-label-sm text-label-sm text-on-surface-variant">
            Department
          </label>
          <div className="relative">
            <span
              className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
              data-icon="domain"
            >
              domain
            </span>
            <select className="w-full pl-10 pr-8 py-2 bg-surface-alt border border-border-subtle rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 font-body-md text-on-surface appearance-none transition-all">
              <option>All Departments</option>
              <option>Engineering</option>
              <option>Safety &amp; Compliance</option>
              <option>Site Management</option>
            </select>
            <span
              className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
              data-icon="expand_more"
            >
              expand_more
            </span>
          </div>
        </div>
        <div className="flex-1 w-full flex flex-col gap-2">
          <label className="font-label-sm text-label-sm text-on-surface-variant">
            Location
          </label>
          <div className="relative">
            <span
              className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
              data-icon="location_on"
            >
              location_on
            </span>
            <select className="w-full pl-10 pr-8 py-2 bg-surface-alt border border-border-subtle rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 font-body-md text-on-surface appearance-none transition-all">
              <option>All Locations</option>
              <option>New York, NY</option>
              <option>Chicago, IL</option>
              <option>Remote</option>
            </select>
            <span
              className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
              data-icon="expand_more"
            >
              expand_more
            </span>
          </div>
        </div>
      </section>

      {/* Open Positions List */}
      <section id="open-positions" className="flex flex-col gap-6">
        <div className="flex justify-between items-end border-b border-border-subtle pb-4">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
            Open Positions
          </h2>
          <span className="font-label-md text-label-md text-text-muted">
            12 Roles Available
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="bg-surface-main border border-border-subtle rounded-xl p-6 shadow-[0_4px_12px_rgba(11,53,83,0.05)] hover:shadow-[0_8px_24px_rgba(11,53,83,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                    {job.title}
                  </h3>
                  <span className="bg-surface-container text-primary font-label-sm text-label-sm px-3 py-1 rounded-full whitespace-nowrap border border-border-subtle">
                    {job.type}
                  </span>
                </div>
                <p className="font-body-md text-body-md text-text-muted mb-6">
                  {job.desc}
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-1.5 text-text-muted">
                    <span className="material-symbols-outlined text-[18px]">
                      location_on
                    </span>
                    <span className="font-label-sm text-label-sm">
                      {job.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-text-muted">
                    <span className="material-symbols-outlined text-[18px]">
                      domain
                    </span>
                    <span className="font-label-sm text-label-sm">
                      {job.department}
                    </span>
                  </div>
                </div>
              </div>
              <Link
                href="/contact"
                className="w-full bg-surface-main border-2 border-primary text-primary font-label-md text-label-md px-4 py-2.5 rounded-lg hover:bg-primary hover:text-white transition-colors flex justify-center items-center gap-2"
              >
                Apply Now
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  arrow_forward
                </span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits / Bento Grid */}
      <section className="flex flex-col gap-6">
        <div className="text-center max-w-[672px] mx-auto mb-4">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-2">
            Why Build With Us?
          </h2>
          <p className="font-body-md text-body-md text-text-muted">
            We provide an environment where technical excellence meets robust
            operational support.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          {/* Large Feature Card */}
          <div className="md:col-span-2 bg-primary-container text-on-primary-container rounded-xl p-8 border border-border-subtle shadow-[0_4px_12px_rgba(11,53,83,0.05)] relative overflow-hidden group">
            <div className="absolute -right-12 -top-12 opacity-10">
              <span className="material-symbols-outlined text-[200px]">
                verified
              </span>
            </div>
            <div className="relative z-10 h-full flex flex-col justify-center">
              <span className="material-symbols-outlined text-[32px] text-white mb-4">
                verified_user
              </span>
              <h3 className="font-headline-md text-headline-md text-white mb-2">
                Verified Workforce
              </h3>
              <p className="font-body-md text-body-md text-inverse-primary max-w-[448px]">
                Join a team of pre-vetted, elite professionals. We ensure that
                every member on site meets our rigorous standards for skill and
                reliability.
              </p>
            </div>
          </div>
          {/* Standard Feature Cards */}
          <div className="bg-surface-main border border-border-subtle rounded-xl p-6 shadow-[0_4px_12px_rgba(11,53,83,0.05)] flex flex-col justify-center">
            <span className="material-symbols-outlined text-[32px] text-secondary-container mb-4">
              trending_up
            </span>
            <h3 className="font-label-md text-label-md text-on-surface mb-2 text-lg">
              Growth Opportunities
            </h3>
            <p className="font-body-md text-body-md text-text-muted text-sm">
              Clear career progression paths and continuous training on the latest
              engineering technologies.
            </p>
          </div>
          <div className="bg-surface-main border border-border-subtle rounded-xl p-6 shadow-[0_4px_12px_rgba(11,53,83,0.05)] flex flex-col justify-center">
            <span className="material-symbols-outlined text-[32px] text-primary mb-4">
              health_and_safety
            </span>
            <h3 className="font-label-md text-label-md text-on-surface mb-2 text-lg">
              Uncompromising Safety
            </h3>
            <p className="font-body-md text-body-md text-text-muted text-sm">
              Industry-leading safety protocols and premium gear provided for all
              operational staff.
            </p>
          </div>
          <div className="md:col-span-2 bg-surface-main border border-border-subtle rounded-xl p-6 shadow-[0_4px_12px_rgba(11,53,83,0.05)] flex items-center gap-6">
            <div className="h-16 w-16 rounded-full bg-surface-container flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[32px] text-primary">
                precision_manufacturing
              </span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2 text-xl">
                Top-Tier Infrastructure Tools
              </h3>
              <p className="font-body-md text-body-md text-text-muted">
                Access to enterprise-grade software and modern physical equipment
                to execute complex projects efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* General CTA Section */}
      <section className="bg-surface-alt border border-border-subtle rounded-2xl p-8 md:p-12 text-center flex flex-col items-center shadow-[0_4px_12px_rgba(11,53,83,0.05)] relative overflow-hidden">
        <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-primary to-secondary-container opacity-50"></div>
        <span className="material-symbols-outlined text-[48px] text-primary mb-4">
          upload_file
        </span>
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4">
          Don't see a perfect fit?
        </h2>
        <p className="font-body-lg text-body-lg text-text-muted max-w-[672px] mb-8">
          We are always looking for exceptional talent to join our expanding
          infrastructure network. Submit your resume, and our recruitment team
          will match you with future opportunities.
        </p>
        <Link
          href="/contact"
          className="bg-secondary text-white font-label-md text-label-md px-8 py-4 rounded-lg hover:bg-secondary-container transition-colors shadow-sm flex items-center gap-2 uppercase tracking-wide"
        >
          Upload Resume
          <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
            cloud_upload
          </span>
        </Link>
      </section>
    </main>
  );
}
