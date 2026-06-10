import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { FadeIn } from "@/components/ui/FadeIn";

export default function HomePage() {
  return (
    <>
      {/* ─── Hero Section ─── */}
      <section className="relative bg-surface-main pt-10 pb-12 lg:pt-12 lg:pb-16 px-6 lg:px-8 border-b border-border-subtle overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5" aria-hidden="true">
          <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect className="text-primary-container" fill="url(#grid)" height="100%" width="100%" />
          </svg>
        </div>

        <div className="max-w-[1280px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Hero Copy — staggered CSS animations (plays on mount, not scroll) */}
          <div className="max-w-[672px]">
            <h1 className="hero-1 font-display-lg text-[28px] sm:text-[36px] lg:text-display-lg leading-[1.2] lg:leading-[56px] tracking-tight text-primary-container mb-5">
              Reliable Manpower Solutions for Construction, Infrastructure &amp; Industrial Projects
            </h1>
            <p className="hero-2 font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-[576px]">
              Providing skilled, semi-skilled, and unskilled workforce across India with scalable solutions for global expansion. Brick by brick, line by line.
            </p>
            <div className="hero-3 flex flex-col sm:flex-row gap-3">
              <Button href="/contact">
                Get Workforce
                <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
              </Button>
              <Button variant="outline" href="/contact">
                Contact Us
              </Button>
            </div>
          </div>

          {/* Hero Image — fades in last */}
          <div className="hero-4 relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(11,53,83,0.15)] border border-border-subtle bg-surface-alt group">
            <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 to-transparent z-10" aria-hidden="true" />
            <img
              alt="Construction professional on site"
              className="w-full h-full object-cover"
              src="/hero-section.webp"
            />
            <div className="absolute bottom-5 left-5 z-20 bg-surface-main/90 backdrop-blur-sm p-4 rounded-xl border border-white/20 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#D95B0D]/10 flex items-center justify-center text-[#D95B0D] shrink-0">
                  <span className="material-symbols-outlined" aria-hidden="true">verified_user</span>
                </div>
                <div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Quality Assured</p>
                  <p className="font-label-md text-label-md text-primary-container font-semibold">100% Vetted Staff</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Trust Indicators ─── */}
      <section className="py-8 bg-surface-alt border-b border-border-subtle" aria-label="Trust indicators">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { icon: "how_to_reg", label: "Verified Workforce" },
                { icon: "map", label: "PAN India Services" },
                { icon: "gavel", label: "Compliance Managed" },
                { icon: "rocket_launch", label: "Quick Deployment" },
              ].map((item, i) => (
                <div key={i} className={`flex flex-col items-center gap-2 py-2 ${i < 3 ? "md:border-r md:border-border-subtle" : ""}`}>
                  <span className="material-symbols-outlined text-[#D95B0D] text-3xl" aria-hidden="true">{item.icon}</span>
                  <span className="font-label-md text-label-md text-primary-container">{item.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="py-12 bg-primary text-white" aria-label="Company statistics">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-10">
              <h2 className="font-headline-lg text-[22px] sm:text-headline-lg mb-3 text-white">Why Choose BrickLyn</h2>
              <p className="text-primary-fixed-dim max-w-[560px] mx-auto text-sm sm:text-base">Delivering excellence through precision and scale.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { end: 5000, suffix: "+", label: "Workforce Deployed" },
              { end: 150,  suffix: "+", label: "Active Clients" },
              { end: 25,   suffix: "+", label: "Cities Covered" },
              { end: 95,   suffix: "%", label: "Client Retention" },
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 80} className="text-center">
                <div className="font-display-lg text-[32px] sm:text-display-lg text-secondary-fixed mb-1 font-bold">
                  <CountUp end={stat.end} suffix={stat.suffix} />
                </div>
                <div className="font-label-md text-label-md uppercase tracking-wider text-primary-fixed text-xs sm:text-label-md">
                  {stat.label}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Services Overview ─── */}
      <section className="py-12 px-6 lg:px-8 bg-surface-main">
        <div className="max-w-[1280px] mx-auto">
          <FadeIn className="text-center mb-10">
            <h2 className="font-headline-lg text-[22px] sm:text-headline-lg text-primary-container mb-3">Comprehensive Solutions</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-[560px] mx-auto">
              Tailored manpower deployment for every stage of your project lifecycle.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                id: "construction",
                icon: "construction",
                title: "Construction Workforce",
                desc: "Skilled masons, carpenters, bar benders, and general helpers for large-scale building projects.",
              },
              {
                id: "engineering",
                icon: "engineering",
                title: "Engineering Staff",
                desc: "Qualified site engineers, supervisors, and technical experts to oversee project execution.",
              },
              {
                id: "security",
                icon: "security",
                title: "Security Services",
                desc: "Trained security personnel for site protection, asset guarding, and access control.",
              },
              {
                id: "facility",
                icon: "domain",
                title: "Facility Management",
                desc: "Comprehensive maintenance, cleaning, and operational support for commercial properties.",
              },
            ].map((service, index) => (
              <FadeIn key={index} delay={index * 90}>
                <div className="h-full bg-surface-main border border-border-subtle rounded-xl p-6 shadow-[0_4px_20px_-10px_rgba(11,53,83,0.08)] hover:-translate-y-1 hover:shadow-[0_8px_30px_-10px_rgba(11,53,83,0.12)] transition-all duration-300 group flex flex-col">
                  <div className="h-12 w-12 rounded-lg bg-surface-alt flex items-center justify-center text-primary-container mb-5 group-hover:bg-[#D95B0D]/10 group-hover:text-[#D95B0D] transition-colors">
                    <span className="material-symbols-outlined text-2xl" aria-hidden="true">{service.icon}</span>
                  </div>
                  <h3 className="font-headline-md text-[17px] leading-[26px] font-semibold text-on-surface mb-2">{service.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-5 text-sm leading-relaxed flex-1">{service.desc}</p>
                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center gap-1 font-label-md text-label-md text-[#D95B0D] hover:text-[#c4520b] transition-colors group/link"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn More
                    <span className="material-symbols-outlined text-sm group-hover/link:translate-x-0.5 transition-transform" aria-hidden="true">arrow_forward</span>
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="text-center mt-8">
            <Button href="/services" variant="outline">
              View All Services
              <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* ─── Industries We Serve ─── */}
      <section className="py-12 bg-surface-alt border-y border-border-subtle">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeIn className="text-center mb-10">
            <h2 className="font-headline-lg text-[22px] sm:text-headline-lg text-primary-container mb-3">Industries We Serve</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-[560px] mx-auto">
              Specialized manpower expertise across diverse sectors.
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { id: "construction", icon: "apartment",        title: "Construction" },
              { id: "infrastructure", icon: "foundation",       title: "Infrastructure" },
              { id: "manufacturing", icon: "factory",          title: "Manufacturing" },
              { id: "warehousing", icon: "warehouse",        title: "Warehousing" },
              { id: "logistics", icon: "local_shipping",   title: "Logistics" },
              { id: "healthcare", icon: "medical_services", title: "Healthcare" },
            ].map((industry, index) => (
              <FadeIn key={index} delay={index * 70}>
                <Link
                  href={`/industries/${industry.id}`}
                  className="block h-full bg-surface-main p-5 rounded-xl border border-border-subtle hover:bg-surface-alt hover:shadow-sm hover:-translate-y-1 transition-all group cursor-pointer text-center"
                  aria-label={`${industry.title} industry`}
                >
                  <span className="material-symbols-outlined text-3xl text-secondary mb-3 block group-hover:scale-110 transition-transform" aria-hidden="true">{industry.icon}</span>
                  <h3 className="font-label-md text-label-md text-on-surface group-hover:text-primary-container transition-colors">{industry.title}</h3>
                </Link>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="text-center mt-8">
            <Button href="/industries" variant="outline">
              Explore All Industries
              <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* ─── Our Process ─── */}
      <section className="py-12 bg-surface-main">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeIn className="text-center mb-10">
            <h2 className="font-headline-lg text-[22px] sm:text-headline-lg text-primary-container mb-3">Our Process</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-[560px] mx-auto">
              A streamlined approach to efficient workforce deployment.
            </p>
          </FadeIn>
          <div className="relative">
            <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-0.5 bg-border-subtle" aria-hidden="true" />
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6 relative z-10">
              {[
                { step: "Requirement Collection", icon: "assignment" },
                { step: "Workforce Screening",    icon: "person_search" },
                { step: "Deployment",             icon: "groups" },
                { step: "Monitoring",             icon: "monitoring" },
                { step: "Reporting",              icon: "analytics" },
              ].map((item, index) => (
                <FadeIn key={index} delay={index * 100} className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary-container text-white flex items-center justify-center font-bold relative z-20 shadow-md text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <span className="material-symbols-outlined text-[20px] text-on-surface-variant mb-1 block" aria-hidden="true">{item.icon}</span>
                    <h4 className="font-label-md text-label-md text-primary-container">{item.step}</h4>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="py-12 px-6 lg:px-8 bg-primary-container text-on-primary">
        <FadeIn>
          <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="font-headline-lg text-[22px] sm:text-headline-lg text-white mb-2">Ready to scale your workforce?</h2>
              <p className="text-on-primary-container text-sm sm:text-base max-w-[480px]">
                Talk to our team to build a customized manpower solution for your project.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button href="/contact" variant="secondary">Request a Quote</Button>
              <Button href="/services" className="border border-white/20 bg-white/10 hover:bg-white/20 text-white shadow-none">
                Our Services
              </Button>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
