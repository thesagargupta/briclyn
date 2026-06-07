import { Button } from "@/components/ui/Button";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Metropolitan Rail Expansion",
      category: "Infrastructure",
      desc: "Phase II structural deployment requiring specialized heavy-lift operators and structural engineers for immediate mobilization.",
      location: "Berlin, GER",
      workforce: "450 Personnel",
      img: "https://picsum.photos/seed/bricklyn12/1600/900",
      stats: { workers: 120, duration: "18 Months" },
      featured: true,
    },
    {
      title: "Nexus Auto Plant",
      category: "Manufacturing",
      icon: "factory",
      desc: "Assembly line retrofitting and automation integration requiring mechanical specialists.",
      progress: "65%",
      phase: "Phase 3: Integration",
      location: "Detroit, MI",
      workforce: "120 Techs",
    },
    {
      title: "Meridian Towers",
      category: "Construction",
      icon: "apartment",
      desc: "Commercial high-rise foundation laying and structural steel framework assembly.",
      progress: "85%",
      phase: "Phase 1: Foundation",
      location: "Toronto, CAN",
      workforce: "280 Personnel",
    },
    {
      title: "Offshore Wind Farm Alpha",
      category: "Critical Alert",
      icon: "wind_power",
      desc: "Turbine installation requiring urgent specialized marine crane operators due to weather window.",
      progress: "40%",
      phase: "Phase 2: Installation",
      location: "North Sea, UK",
      workforce: "85 Specs",
      isAlert: true,
    },
  ];

  return (
    <main className="flex-1 max-w-container-max mx-auto px-6 lg:px-8 py-10 bg-background min-h-screen">
      {/* Header Section */}
      <div className="mb-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
          <div>
            <h1 className="font-display-lg text-display-lg text-primary mb-2 hidden md:block">
              Featured Projects
            </h1>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-2 md:hidden">
              Featured Projects
            </h1>
            <p className="font-body-lg text-body-lg text-text-muted max-w-[672px]">
              Explore our active infrastructure and industrial deployments. Track
              workforce allocation and site status across our global operations.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-surface-main rounded-xl border border-border-subtle p-6 shadow-[0_4px_24px_rgba(11,53,83,0.05)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <span className="font-label-sm text-label-sm text-text-muted uppercase tracking-wider mr-2">
                Filter by Industry:
              </span>
              <button className="px-4 py-2 bg-primary text-on-primary rounded-full font-label-sm text-label-sm transition-colors border border-primary">
                All Projects
              </button>
              <button className="px-4 py-2 bg-surface-alt text-on-surface-variant hover:bg-surface-container-highest rounded-full font-label-sm text-label-sm transition-colors border border-border-subtle">
                Construction
              </button>
              <button className="px-4 py-2 bg-surface-alt text-on-surface-variant hover:bg-surface-container-highest rounded-full font-label-sm text-label-sm transition-colors border border-border-subtle">
                Infrastructure
              </button>
              <button className="px-4 py-2 bg-surface-alt text-on-surface-variant hover:bg-surface-container-highest rounded-full font-label-sm text-label-sm transition-colors border border-border-subtle">
                Manufacturing
              </button>
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto ml-auto">
              <div className="relative flex-grow md:flex-grow-0">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-sm">
                  sort
                </span>
                <select className="w-full pl-10 pr-8 py-2 border border-border-subtle rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 appearance-none bg-surface-main font-label-sm text-label-sm text-on-surface cursor-pointer">
                  <option>Sort by: Newest</option>
                  <option>Sort by: Workforce Size</option>
                  <option>Sort by: Status</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Layout for Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Featured Project */}
        <div className="xl:col-span-2 bg-surface-main rounded-xl border border-border-subtle overflow-hidden shadow-[0_4px_24px_rgba(11,53,83,0.05)] hover:shadow-[0_8px_32px_rgba(11,53,83,0.08)] transition-all duration-300 group hover:-translate-y-[2px] flex flex-col md:flex-row">
          <div className="w-full md:w-2/5 h-48 md:h-auto bg-surface-container-highest relative overflow-hidden">
            <img
              alt="Construction Site"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              src={projects[0].img}
            />
            <div className="absolute top-4 left-4 bg-surface-main/90 backdrop-blur-sm px-3 py-1 rounded-full border border-border-subtle flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-secondary-container"></div>
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
                Active Deploy
              </span>
            </div>
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-between w-full md:w-3/5">
            <div>
              <div className="flex justify-between items-start mb-2">
                <span className="px-3 py-1 bg-surface-alt text-primary font-label-sm text-label-sm rounded-md border border-border-subtle">
                  {projects[0].category}
                </span>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-primary mb-2 hidden md:block">
                {projects[0].title}
              </h3>
              <h3 className="font-headline-md text-headline-md text-primary mb-2 md:hidden">
                {projects[0].title}
              </h3>
              <p className="font-body-md text-body-md text-text-muted mb-6">
                {projects[0].desc}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border-subtle">
              <div>
                <p className="font-label-sm text-label-sm text-text-muted mb-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">
                    location_on
                  </span>
                  Location
                </p>
                <p className="font-label-md text-label-md text-on-surface">
                  {projects[0].location}
                </p>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-text-muted mb-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">
                    groups
                  </span>
                  Active Workforce
                </p>
                <p className="font-label-md text-label-md text-on-surface font-semibold">
                  {projects[0].workforce}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Regular Projects */}
        {projects.slice(1).map((project, index) => (
          <div
            key={index}
            className="bg-surface-main rounded-xl border border-border-subtle overflow-hidden shadow-[0_4px_24px_rgba(11,53,83,0.05)] hover:shadow-[0_8px_32px_rgba(11,53,83,0.08)] transition-all duration-300 group hover:-translate-y-[2px] flex flex-col"
          >
            <div className="p-6 flex-grow">
              <div className="flex justify-between items-start mb-4">
                <span
                  className={`px-3 py-1 font-label-sm text-label-sm rounded-md border ${
                    project.isAlert
                      ? "bg-[#ffecd6] text-[#b34700] border-[#ffdbcc]"
                      : "bg-surface-alt text-primary border-border-subtle"
                  }`}
                >
                  {project.category}
                </span>
                <div className="bg-surface-alt px-2 py-1 rounded border border-border-subtle">
                  <span className="material-symbols-outlined text-text-muted text-sm">
                    {project.icon}
                  </span>
                </div>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">
                {project.title}
              </h3>
              <p className="font-body-md text-body-md text-text-muted mb-6 line-clamp-2">
                {project.desc}
              </p>
              <div className="mb-6">
                <div className="flex justify-between font-label-sm text-label-sm text-text-muted mb-2">
                  <span>{project.phase}</span>
                  <span className={project.isAlert ? "text-secondary" : ""}>
                    {project.isAlert ? "Action Required" : project.progress}
                  </span>
                </div>
                <div className="h-1.5 w-full bg-surface-alt rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      project.isAlert
                        ? "bg-secondary-container"
                        : "bg-primary-container"
                    }`}
                    style={{ width: project.progress }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="bg-surface-alt p-4 border-t border-border-subtle grid grid-cols-2 gap-4">
              <div>
                <p className="font-label-sm text-label-sm text-text-muted mb-0.5">
                  Location
                </p>
                <p className="font-label-md text-label-md text-on-surface">
                  {project.location}
                </p>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-text-muted mb-0.5">
                  Workforce
                </p>
                <p className="font-label-md text-label-md text-on-surface">
                  {project.workforce}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Stats/Summary Card */}
        <div className="bg-primary-container text-on-primary-container rounded-xl p-8 flex flex-col justify-between shadow-[0_4px_24px_rgba(11,53,83,0.05)] relative overflow-hidden group">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          ></div>
          <div className="relative z-10">
            <span className="material-symbols-outlined text-4xl mb-4 text-surface-main/80">
              monitoring
            </span>
            <h3 className="font-headline-md text-headline-md text-surface-main mb-2">
              Global Deployment Overview
            </h3>
            <p className="font-body-md text-body-md text-on-primary-container/80 mb-8">
              Current active workforce distribution across all tracked
              industrial and infrastructure sectors.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-y-6 gap-x-4 relative z-10">
            <div>
              <p className="font-display-lg text-display-lg text-surface-main mb-1">
                12
              </p>
              <p className="font-label-sm text-label-sm uppercase tracking-wider text-on-primary-container/70 border-t border-surface-main/20 pt-2">
                Active Sites
              </p>
            </div>
            <div>
              <p className="font-display-lg text-display-lg text-surface-main mb-1">
                1.2k
              </p>
              <p className="font-label-sm text-label-sm uppercase tracking-wider text-on-primary-container/70 border-t border-surface-main/20 pt-2">
                Total Personnel
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <button className="px-8 py-3 bg-surface-main border border-border-subtle text-primary font-label-md text-label-md rounded-lg hover:bg-surface-alt transition-colors shadow-[0_4px_24px_rgba(11,53,83,0.05)] flex items-center gap-2">
          Load More Projects
          <span className="material-symbols-outlined text-sm">expand_more</span>
        </button>
      </div>
    </main>
  );
}
