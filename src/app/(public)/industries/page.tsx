import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { industryCategories } from "@/lib/data/industries";

export default function IndustriesPage() {
  return (
    <div className="flex-grow bg-background">
      {/* Hero Section */}
      <section className="relative bg-surface-alt py-10 lg:py-14 overflow-hidden border-b border-border-subtle">
        <div className="absolute inset-0 bg-primary-container/5 z-0" aria-hidden="true" />
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="flex flex-col gap-5">
            <span className="bg-secondary-container/10 text-secondary-container font-label-sm text-label-sm px-3 py-1 rounded-full w-fit uppercase tracking-wider">
              Sector Expertise
            </span>
            <h1 className="font-display-lg text-[28px] sm:text-[36px] lg:text-display-lg leading-[1.2] tracking-tight text-primary">
              Empowering Industries with Precision Workforce Solutions
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              From monumental construction projects to seamless logistics networks, BrickLyn provides the skilled, reliable manpower necessary to drive enterprise infrastructure forward.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <Button href="/contact">Request a Quote</Button>
              <Button variant="outline" href="/services">View Our Services</Button>
            </div>
          </div>
          <div className="relative h-[280px] sm:h-[400px] rounded-xl overflow-hidden shadow-lg border border-border-subtle bg-surface-main">
            <img
              alt="Active construction site aerial view"
              className="w-full h-full object-cover"
              src="/industry-hero.webp"
            />
          </div>
        </div>
      </section>

      {/* Industry Cards Grid */}
      <section className="py-12 max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-headline-lg text-[22px] sm:text-headline-lg text-primary mb-3">
            Core Industries Served
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-[560px] mx-auto">
            Specialized teams deployed across vital sectors, ensuring compliance, safety, and unmatched productivity.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industryCategories.map((industry) => (
            <div
              key={industry.id}
              className="bg-surface-main rounded-xl border border-border-subtle p-6 flex flex-col gap-4 shadow-[0_4px_12px_rgba(11,53,83,0.05)] hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(11,53,83,0.08)] transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-surface-alt flex items-center justify-center text-primary-container border border-border-subtle group-hover:bg-[#D95B0D]/10 group-hover:text-[#D95B0D] group-hover:border-[#D95B0D]/20 transition-colors">
                <span
                  className="material-symbols-outlined text-[24px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                  aria-hidden="true"
                >
                  {industry.icon}
                </span>
              </div>
              <h3 className="font-headline-md text-[18px] leading-[26px] font-semibold text-primary group-hover:text-primary-container transition-colors">
                {industry.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant flex-grow text-sm leading-relaxed">
                {industry.desc}
              </p>
              <Link
                href={`/industries/${industry.id}`}
                className="font-label-md text-label-md text-secondary-container flex items-center gap-2 hover:text-secondary transition-colors mt-auto w-fit"
                aria-label={`Explore workforce solutions for the ${industry.title} industry`}
              >
                Explore Capabilities
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform" aria-hidden="true">
                  arrow_forward
                </span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-container text-on-primary py-12">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-headline-lg text-[20px] sm:text-headline-lg text-white mb-2">
              Ready to scale your workforce?
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary-container text-sm sm:text-body-lg">
              Contact our industry specialists for a tailored manpower consultation.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Button href="/contact" variant="secondary">
              Request a Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
