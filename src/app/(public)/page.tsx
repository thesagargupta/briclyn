import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-surface-main pt-16 pb-12 lg:pt-12 lg:pb-16 px-6 lg:px-8 border-b border-border-subtle overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5">
          {/* Decorative background pattern */}
          <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                height="40"
                id="grid"
                patternUnits="userSpaceOnUse"
                width="40"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                ></path>
              </pattern>
            </defs>
            <rect
              className="text-primary-container"
              fill="url(#grid)"
              height="100%"
              width="100%"
            ></rect>
          </svg>
        </div>
        <div className="max-w-[1280px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-[672px]">
            <h1 className="font-display-lg text-display-lg text-primary-container mb-6 leading-tight">
              Reliable Manpower Solutions for Construction, Infrastructure &amp;
              Industrial Projects
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-[576px]">
              Providing skilled, semi-skilled, and unskilled workforce across
              India with scalable solutions for global expansion. Brick by
              brick, line by line.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button>
                Get Workforce
                <span
                  className="material-symbols-outlined text-sm"
                  aria-hidden="true"
                >
                  arrow_forward
                </span>
              </Button>
              <Button variant="outline">Contact Us</Button>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(11,53,83,0.15)] border border-border-subtle bg-surface-alt group">
            <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 to-transparent z-10"></div>
            <img
              alt="Construction Professional"
              className="w-full h-full object-cover shadow-2xl"
              src="https://picsum.photos/seed/bricklyn11/1600/900"
            />
            <div className="absolute bottom-6 left-6 z-20 bg-surface-main/90 backdrop-blur-sm p-4 rounded-xl border border-white/20 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#D95B0D]/10 flex items-center justify-center text-[#D95B0D]">
                  <span className="material-symbols-outlined">
                    verified_user
                  </span>
                </div>
                <div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                    Quality Assured
                  </p>
                  <p className="font-label-md text-label-md text-primary-container">
                    100% Vetted Staff
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 bg-surface-alt border-b border-border-subtle">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-border-subtle">
            <div className="flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-[#D95B0D] text-3xl">
                how_to_reg
              </span>
              <span className="font-label-md text-label-md text-primary-container">
                Verified Workforce
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-[#D95B0D] text-3xl">
                map
              </span>
              <span className="font-label-md text-label-md text-primary-container">
                PAN India Services
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-[#D95B0D] text-3xl">
                gavel
              </span>
              <span className="font-label-md text-label-md text-primary-container">
                Compliance Managed
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-[#D95B0D] text-3xl">
                rocket_launch
              </span>
              <span className="font-label-md text-label-md text-primary-container">
                Quick Deployment
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-primary text-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg mb-4 text-white">
              Why Choose BrickLyn
            </h2>
            <p className="text-primary-fixed-dim max-w-[672px] mx-auto">
              Delivering excellence through precision and scale.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-display-lg text-display-lg text-secondary-fixed mb-2">
                5000+
              </div>
              <div className="font-label-md text-label-md uppercase tracking-wider text-primary-fixed">
                Workforce Deployed
              </div>
            </div>
            <div className="text-center">
              <div className="font-display-lg text-display-lg text-secondary-fixed mb-2">
                150+
              </div>
              <div className="font-label-md text-label-md uppercase tracking-wider text-primary-fixed">
                Active Clients
              </div>
            </div>
            <div className="text-center">
              <div className="font-display-lg text-display-lg text-secondary-fixed mb-2">
                25+
              </div>
              <div className="font-label-md text-label-md uppercase tracking-wider text-primary-fixed">
                Cities Covered
              </div>
            </div>
            <div className="text-center">
              <div className="font-display-lg text-display-lg text-secondary-fixed mb-2">
                95%
              </div>
              <div className="font-label-md text-label-md uppercase tracking-wider text-primary-fixed">
                Client Retention
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-10 px-6 lg:px-8 bg-surface-main">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary-container mb-4">
              Comprehensive Solutions
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-[672px] mx-auto">
              Tailored manpower deployment for every stage of your project
              lifecycle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service Cards */}
            {[
              {
                icon: "construction",
                title: "Construction Workforce",
                desc: "Skilled masons, carpenters, bar benders, and general helpers for large-scale building projects.",
              },
              {
                icon: "engineering",
                title: "Engineering Staff",
                desc: "Qualified site engineers, supervisors, and technical experts to oversee project execution.",
              },
              {
                icon: "security",
                title: "Security Services",
                desc: "Trained security personnel for site protection, asset guarding, and access control.",
              },
              {
                icon: "domain",
                title: "Facility Management",
                desc: "Comprehensive maintenance, cleaning, and operational support for commercial properties.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-surface-main border border-border-subtle rounded-xl p-6 shadow-[0_4px_20px_-10px_rgba(11,53,83,0.08)] hover:-translate-y-1 hover:shadow-[0_8px_30px_-10px_rgba(11,53,83,0.12)] transition-all duration-300 group"
              >
                <div className="h-12 w-12 rounded-lg bg-surface-alt flex items-center justify-center text-primary-container mb-6 group-hover:bg-[#D95B0D]/10 group-hover:text-[#D95B0D] transition-colors">
                  <span className="material-symbols-outlined text-2xl">
                    {service.icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-3 text-lg">
                  {service.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 text-sm">
                  {service.desc}
                </p>
                <Link
                  className="inline-flex items-center gap-1 font-label-md text-label-md text-[#D95B0D] hover:text-[#c4520b] transition-colors"
                  href="/services"
                >
                  Learn More{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-10 bg-surface-alt border-y border-border-subtle">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary-container mb-4">
              Industries We Serve
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-[672px] mx-auto">
              Specialized manpower expertise across diverse sectors.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "apartment", title: "Construction" },
              { icon: "foundation", title: "Infrastructure" },
              { icon: "factory", title: "Manufacturing" },
              { icon: "warehouse", title: "Warehousing" },
              { icon: "local_shipping", title: "Logistics" },
              { icon: "medical_services", title: "Healthcare" },
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-surface-main p-8 rounded-xl border border-border-subtle hover:border-secondary-container transition-colors group cursor-pointer text-center"
              >
                <span className="material-symbols-outlined text-4xl text-secondary mb-4">
                  {industry.icon}
                </span>
                <h3 className="font-headline-md text-lg">{industry.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-10 bg-surface-main">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary-container mb-4">
              Our Process
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-[672px] mx-auto">
              A streamlined approach to efficient workforce deployment.
            </p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border-subtle -translate-y-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              {[
                "Requirement Collection",
                "Workforce Screening",
                "Deployment",
                "Monitoring",
                "Reporting",
              ].map((step, index) => (
                <div
                  key={index}
                  className="bg-surface-main flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary-container text-white flex items-center justify-center mb-4 font-bold relative z-20 shadow-lg">
                    {index + 1}
                  </div>
                  <h4 className="font-label-md text-primary-container">
                    {step}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
