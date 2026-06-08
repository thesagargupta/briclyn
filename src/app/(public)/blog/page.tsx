import { Button } from "@/components/ui/Button";

export default function BlogPage() {
  const articles = [
    {
      title: "Integrating Automation in Heavy Infrastructure Projects",
      category: "Innovation",
      icon: "lightbulb",
      date: "Oct 24, 2023",
      readTime: "8 min read",
      desc: "As project scales increase, relying solely on traditional manual labor introduces critical bottlenecks. We explore how leading firms are deploying autonomous heavy machinery and sensor-driven oversight to reduce margin-of-error by 40% while accelerating timeline delivery.",
      img: "https://picsum.photos/seed/bricklyn6/1600/900",
    },
    {
      title: "Next-Gen OSHA Compliance for On-Site Teams",
      category: "Safety First",
      icon: "health_and_safety",
      date: "Oct 18, 2023",
      desc: "Navigating the complex landscape of 2024 compliance regulations requires a proactive, digital-first approach to incident reporting.",
      img: "https://picsum.photos/seed/bricklyn7/1600/900",
    },
    {
      title: "Optimizing Resource Allocation Across Q4 Projects",
      category: "Strategy",
      icon: "analytics",
      date: "Oct 12, 2023",
      desc: "Strategic insights into managing specialized labor pools effectively when approaching end-of-year enterprise deliverables.",
      img: "https://picsum.photos/seed/bricklyn8/1600/900",
    },
  ];

  return (
    <main className="flex-1 w-full bg-surface-main">
      {/* Hero Section */}
      <section className="w-full pt-10 pb-12 px-6 md:px-12 max-w-container-max mx-auto">
        <div className="max-w-[768px]">
          <h1 className="font-display-lg text-display-lg text-primary mb-4 tracking-tight">
            Industry Insights &amp; Workforce Trends
          </h1>
          <p className="font-body-lg text-body-lg text-text-muted">
            Explore the latest strategies, safety protocols, and innovations
            shaping the future of industrial workforce management and enterprise
            infrastructure.
          </p>
        </div>
      </section>

      {/* Main Layout Grid */}
      <section className="w-full px-6 md:px-12 pb-10 max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (Articles) */}
        <div className="lg:col-span-8 flex flex-col gap-12">
          {/* Featured Article Card */}
          <article className="group bg-surface-main rounded-xl border border-border-subtle shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer flex flex-col">
            <div className="relative w-full aspect-video overflow-hidden bg-surface-alt">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={articles[0].img}
                alt="Featured article"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-[#eef2f6] text-primary px-3 py-1 rounded-full font-label-sm text-label-sm border border-border-subtle flex items-center gap-1 shadow-sm backdrop-blur-sm">
                  <span className="material-symbols-outlined text-[14px]">
                    {articles[0].icon}
                  </span>
                  {articles[0].category}
                </span>
              </div>
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <div className="flex items-center gap-3 font-label-sm text-label-sm text-text-muted mb-3">
                <span>{articles[0].date}</span>
                <span className="w-1 h-1 rounded-full bg-border-subtle"></span>
                <span>{articles[0].readTime}</span>
              </div>
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4 group-hover:text-surface-tint transition-colors">
                {articles[0].title}
              </h2>
              <p className="font-body-md text-body-md text-text-muted mb-6 flex-1 line-clamp-3">
                {articles[0].desc}
              </p>
              <div className="flex items-center gap-2 text-secondary-container font-label-md text-label-md group-hover:gap-3 transition-all">
                Read Full Report
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </div>
            </div>
          </article>

          {/* Divider */}
          <div className="w-full h-px bg-border-subtle"></div>

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.slice(1).map((article, idx) => (
              <article
                key={idx}
                className="group bg-surface-main rounded-xl border border-border-subtle shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer flex flex-col"
              >
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-alt">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={article.img}
                    alt={article.title}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#fff4eb] text-secondary-container px-2.5 py-0.5 rounded-full font-label-sm text-label-sm border border-[#ffd2b3] flex items-center gap-1 shadow-sm">
                      <span className="material-symbols-outlined text-[14px]">
                        {article.icon}
                      </span>
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-headline-md text-headline-md text-primary mb-3 group-hover:text-surface-tint transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="font-body-md text-body-md text-text-muted mb-4 flex-1 line-clamp-2 text-sm">
                    {article.desc}
                  </p>
                  <div className="mt-auto pt-4 border-t border-border-subtle flex items-center justify-between text-text-muted font-label-sm text-label-sm">
                    <span>{article.date}</span>
                    <span className="group-hover:text-secondary-container transition-colors font-medium">
                      Read More
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination/Load More */}
          <div className="w-full flex justify-center mt-6">
            <button className="font-label-md text-label-md text-primary bg-surface-main border border-border-subtle px-6 py-2.5 rounded-lg hover:bg-surface-alt transition-colors shadow-sm flex items-center gap-2">
              Load Older Insights
              <span className="material-symbols-outlined text-sm">
                expand_more
              </span>
            </button>
          </div>
        </div>

        {/* Right Column (Sidebar) */}
        <aside className="lg:col-span-4 flex flex-col gap-12 lg:sticky lg:top-[100px] h-fit">
          {/* Popular Categories Card */}
          <div className="bg-surface-main rounded-xl border border-border-subtle shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-border-subtle bg-surface-alt/50">
              <h3 className="font-headline-md text-[18px] text-primary font-bold">
                Popular Categories
              </h3>
            </div>
            <ul className="flex flex-col">
              {[
                { name: "Workforce Management", icon: "engineering", count: 24 },
                { name: "Safety & Compliance", icon: "verified_user", count: 18 },
                {
                  name: "Technology & Innovation",
                  icon: "precision_manufacturing",
                  count: 12,
                },
                { name: "Industry Trends", icon: "insights", count: 31 },
              ].map((cat, i) => (
                <li key={i}>
                  <a
                    className="flex items-center justify-between px-6 py-3.5 hover:bg-surface-alt transition-colors group border-b border-border-subtle/50 last:border-0"
                    href="#"
                  >
                    <span className="font-label-md text-label-md text-on-surface-variant group-hover:text-primary transition-colors flex items-center gap-2">
                      <span className="material-symbols-outlined text-text-muted text-[18px]">
                        {cat.icon}
                      </span>
                      {cat.name}
                    </span>
                    <span className="bg-surface-container text-text-muted font-label-sm text-[11px] px-2 py-0.5 rounded-full">
                      {cat.count}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup Card */}
          <div className="relative bg-primary-container rounded-xl overflow-hidden shadow-md p-6 md:p-8 isolate">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-[-1]"></div>
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-surface-tint rounded-full blur-3xl opacity-30 z-[-1]"></div>
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-surface-container-highest text-3xl">
                mark_email_unread
              </span>
            </div>
            <h3 className="font-headline-lg-mobile md:font-[Manrope] md:text-[22px] md:font-bold md:leading-tight text-surface-main mb-2">
              Subscribe to Editorial
            </h3>
            <p className="font-body-md text-[14px] text-surface-container-highest/80 mb-6">
              Get curated insights, compliance updates, and leadership
              strategies delivered directly to your inbox monthly.
            </p>
            <form className="flex flex-col gap-3">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-surface-container-highest/50">
                  <span className="material-symbols-outlined text-[18px]">
                    mail
                  </span>
                </span>
                <input
                  className="w-full bg-primary/40 border border-surface-tint/50 text-surface-main placeholder-surface-container-highest/40 font-body-md text-sm rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-secondary-container focus:border-transparent transition-all backdrop-blur-sm"
                  placeholder="Corporate email address"
                  type="email"
                />
              </div>
              <button
                className="w-full bg-secondary-container hover:bg-secondary text-surface-main font-label-md text-label-md py-2.5 rounded-lg transition-colors shadow-sm flex justify-center items-center gap-2"
                type="button"
              >
                Subscribe Now
              </button>
            </form>
            <p className="font-label-sm text-[11px] text-surface-container-highest/50 mt-4 text-center">
              By subscribing, you agree to our{" "}
              <a className="underline hover:text-surface-main transition-colors" href="/privacy-policy">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
