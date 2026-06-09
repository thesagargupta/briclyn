import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex-1 w-full bg-background">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10 lg:py-14 flex flex-col gap-14">

        {/* Section 1: Company Story */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-alt rounded-full border border-border-subtle w-fit">
              <span className="w-2 h-2 rounded-full bg-secondary" aria-hidden="true" />
              <span className="font-label-sm text-label-sm text-text-muted uppercase tracking-wider">
                About BrickLyn
              </span>
            </div>
            <h1 className="font-display-lg text-[28px] sm:text-[36px] lg:text-display-lg leading-[1.2] tracking-tight text-primary">
              Building Infrastructure for a Resilient Tomorrow.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Since our inception, BrickLyn Infra Solutions has operated at the intersection of heavy engineering and digital precision. We specialize in macro-scale civil projects, deploying advanced methodologies to ensure structural integrity and operational efficiency across every site we manage.
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-2">
              <Button href="/projects">View Our Portfolio</Button>
              <Button variant="outline" href="/contact">Get in Touch</Button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-primary-container opacity-5 rounded-xl transform translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6" aria-hidden="true" />
            <img
              alt="BrickLyn operations team on site"
              className="w-full h-auto rounded-xl object-cover aspect-video"
              src="/about-hero.webp"
            />
          </div>
        </section>

        {/* Section 2: Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface-main border border-border-subtle rounded-xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col gap-4 group">
            <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center mb-2 group-hover:bg-primary-container transition-colors">
              <span className="material-symbols-outlined text-secondary group-hover:text-on-primary-container transition-colors" aria-hidden="true">
                flag
              </span>
            </div>
            <h2 className="font-headline-lg text-[20px] sm:text-headline-lg text-primary">
              Our Mission
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              To engineer and execute critical infrastructure projects with unyielding standards of quality, safety, and efficiency. We are dedicated to providing robust structural solutions that form the backbone of modern urban development, leveraging data-driven oversight at every phase.
            </p>
          </div>
          <div className="bg-primary-container border border-primary-container rounded-xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col gap-4 group relative overflow-hidden">
            <div className="absolute -right-12 -top-12 opacity-10" aria-hidden="true">
              <span className="material-symbols-outlined text-[120px] text-on-primary-container">explore</span>
            </div>
            <div className="w-12 h-12 rounded-lg bg-surface-main/10 flex items-center justify-center mb-2 relative z-10">
              <span className="material-symbols-outlined text-inverse-primary" aria-hidden="true">visibility</span>
            </div>
            <h2 className="font-headline-lg text-[20px] sm:text-headline-lg text-on-primary relative z-10">
              Our Vision
            </h2>
            <p className="font-body-md text-body-md text-on-primary-container relative z-10">
              To be the premier partner for enterprise-grade civil engineering globally, recognized for integrating legacy craftsmanship with next-generation operational technology. We envision a landscape where infrastructure is not merely built, but intelligently optimized for generational longevity.
            </p>
          </div>
        </section>

        {/* Section 3: Key Stats */}
        <section className="bg-surface-alt rounded-xl border border-border-subtle p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { end: 12,   suffix: "+", label: "Years of Experience" },
              { end: 5000, suffix: "+", label: "Workforce Deployed" },
              { end: 150,  suffix: "+", label: "Enterprise Clients" },
              { end: 25,   suffix: "+", label: "Cities Covered" },
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 80} className="flex flex-col gap-1">
                <div className="text-[28px] sm:text-[36px] font-extrabold text-primary-container leading-none font-display-lg">
                  <CountUp end={stat.end} suffix={stat.suffix} />
                </div>
                <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  {stat.label}
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Section 4: Leadership Team */}
        <section className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-border-subtle pb-4">
            <div>
              <h2 className="font-headline-lg text-[20px] sm:text-headline-lg text-primary">
                Executive Leadership
              </h2>
              <p className="font-body-md text-body-md text-text-muted mt-1">
                The strategic minds guiding our structural integrity.
              </p>
            </div>
            <Link
              href="/careers"
              className="font-label-md text-label-md text-[#D95B0D] hover:text-[#c4520b] transition-colors inline-flex items-center gap-1 shrink-0"
            >
              Join the team
              <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "Marcus Thorne",
                role: "Chief Executive Officer",
                img: "https://picsum.photos/seed/bricklyn3/800/800",
              },
              {
                name: "Sarah Jenkins",
                role: "Head of Operations",
                img: "https://picsum.photos/seed/bricklyn4/800/800",
              },
              {
                name: "David Chen",
                role: "VP of Safety & Compliance",
                img: "https://picsum.photos/seed/bricklyn5/800/800",
              },
            ].map((leader, i) => (
              <div key={i} className="flex flex-col gap-3 group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl border border-border-subtle aspect-square bg-surface-alt">
                  <img
                    alt={`${leader.name}, ${leader.role}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={leader.img}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[16px] leading-[24px] text-primary group-hover:text-secondary transition-colors">
                    {leader.name}
                  </h3>
                  <p className="font-label-md text-label-md text-text-muted">
                    {leader.role}
                  </p>
                </div>
              </div>
            ))}
            {/* Join Team Card */}
            <Link href="/careers" className="flex flex-col gap-3 group">
              <div className="relative overflow-hidden rounded-xl border border-dashed border-border-subtle aspect-square bg-surface-alt flex items-center justify-center hover:border-primary-container transition-colors">
                <span className="material-symbols-outlined text-[48px] text-border-subtle group-hover:text-primary transition-colors" aria-hidden="true">
                  person_add
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-[16px] leading-[24px] text-primary">
                  Join the Team
                </h3>
                <p className="font-label-md text-label-md text-[#D95B0D] group-hover:underline">
                  View Open Positions
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Section 5: Certifications */}
        <section className="bg-surface-alt rounded-xl p-8 border border-border-subtle mb-4">
          <div className="mb-6">
            <h2 className="font-headline-md text-[18px] sm:text-headline-md text-primary">
              Industry Certifications &amp; Compliance
            </h2>
            <p className="font-body-md text-body-md text-text-muted mt-1">
              Validated frameworks ensuring operational excellence.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              { icon: "verified", text: "ISO 9001:2015" },
              { icon: "shield", text: "OSHA VPP Star Site" },
              { icon: "eco", text: "LEED Platinum Certified" },
              { icon: "gavel", text: "Federal Contract Compliant" },
            ].map((cert, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-surface-main px-4 py-3 rounded-lg border border-border-subtle shadow-sm hover:border-primary transition-colors"
              >
                <span
                  className={`material-symbols-outlined ${cert.icon === "shield" ? "text-secondary" : "text-primary"}`}
                  aria-hidden="true"
                >
                  {cert.icon}
                </span>
                <span className="font-label-md text-label-md text-on-surface">
                  {cert.text}
                </span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
