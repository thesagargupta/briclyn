import { Button } from "@/components/ui/Button";

export default function AboutPage() {
  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12 scroll-smooth bg-background">
      <div className="max-w-container-max mx-auto flex flex-col gap-xl">
        {/* Section 1: Company Story (Hero) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-6 flex flex-col gap-6 pr-0 lg:pr-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-alt rounded-full border border-border-subtle w-fit">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="font-label-sm text-label-sm text-text-muted uppercase tracking-wider">
                About BrickLyn
              </span>
            </div>
            <h2 className="font-display-lg text-display-lg text-primary">
              Building Infrastructure for a Resilient Tomorrow.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Since our inception, BrickLyn Infra Solutions has operated at the
              intersection of heavy engineering and digital precision. We
              specialize in macro-scale civil projects, deploying advanced
              methodologies to ensure structural integrity and operational
              efficiency across every site we manage.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <Button>View Our Portfolio</Button>
              <Button variant="outline">Executive Summary</Button>
            </div>
          </div>
          <div className="lg:col-span-6 relative group mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-primary-container opacity-5 rounded-xl transform translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
            <img
              alt="BrickLyn operations team"
              className="w-full h-full object-cover"
              src="https://picsum.photos/seed/bricklyn2/1600/900"
            />
          </div>
        </section>

        {/* Section 2: Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-gutter mt-10">
          <div className="bg-surface-main border border-border-subtle rounded-xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col gap-4 group">
            <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center mb-2 group-hover:bg-primary-container transition-colors">
              <span className="material-symbols-outlined text-secondary group-hover:text-on-primary-container transition-colors">
                flag
              </span>
            </div>
            <h3 className="font-headline-lg text-headline-lg text-primary">
              Our Mission
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              To engineer and execute critical infrastructure projects with
              unyielding standards of quality, safety, and efficiency. We are
              dedicated to providing robust structural solutions that form the
              backbone of modern urban development, leveraging data-driven
              oversight at every phase.
            </p>
          </div>
          <div className="bg-primary-container border border-primary-container rounded-xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col gap-4 group relative overflow-hidden">
            <div className="absolute -right-12 -top-12 opacity-10">
              <span className="material-symbols-outlined text-[120px] text-on-primary-container">
                explore
              </span>
            </div>
            <div className="w-12 h-12 rounded-lg bg-surface-main/10 flex items-center justify-center mb-2 relative z-10">
              <span className="material-symbols-outlined text-inverse-primary">
                visibility
              </span>
            </div>
            <h3 className="font-headline-lg text-headline-lg text-on-primary relative z-10">
              Our Vision
            </h3>
            <p className="font-body-md text-body-md text-on-primary-container relative z-10">
              To be the premier partner for enterprise-grade civil engineering
              globally, recognized for integrating legacy craftsmanship with
              next-generation operational technology. We envision a landscape
              where infrastructure is not merely built, but intelligently
              optimized for generational longevity.
            </p>
          </div>
        </section>

        {/* Section 3: Leadership Team */}
        <section className="flex flex-col gap-8 mt-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-border-subtle pb-4">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-primary">
                Executive Leadership
              </h2>
              <p className="font-body-md text-body-md text-text-muted mt-2">
                The strategic minds guiding our structural integrity.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-gutter">
            {[
              {
                name: "Marcus Thorne",
                role: "Chief Executive Officer",
                img: "https://picsum.photos/seed/bricklyn3/1600/900",
              },
              {
                name: "Sarah Jenkins",
                role: "Head of Operations",
                img: "https://picsum.photos/seed/bricklyn4/1600/900",
              },
              {
                name: "David Chen",
                role: "VP of Safety & Compliance",
                img: "https://picsum.photos/seed/bricklyn5/1600/900",
              },
            ].map((leader, i) => (
              <div key={i} className="flex flex-col gap-3 group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl border border-border-subtle aspect-square">
                  <img
                    alt={`${leader.role} Portrait`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={leader.img}
                  />
                </div>
                <div>
                  <h4 className="font-headline-md text-[20px] leading-[28px] font-bold text-primary group-hover:text-secondary transition-colors">
                    {leader.name}
                  </h4>
                  <p className="font-label-md text-label-md text-text-muted">
                    {leader.role}
                  </p>
                </div>
              </div>
            ))}
            {/* Join Team Card */}
            <div className="flex flex-col gap-3 group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl border border-border-subtle aspect-square bg-surface-alt flex items-center justify-center">
                <span className="material-symbols-outlined text-[64px] text-border-subtle group-hover:text-primary transition-colors">
                  person_add
                </span>
              </div>
              <div>
                <h4 className="font-headline-md text-[20px] leading-[28px] font-bold text-primary">
                  Join the Team
                </h4>
                <p className="font-label-md text-label-md text-secondary hover:underline cursor-pointer">
                  View Open Positions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Certifications & Standards */}
        <section className="bg-surface-alt rounded-xl p-8 border border-border-subtle mt-10 mb-10">
          <div className="mb-6">
            <h2 className="font-headline-md text-headline-md text-primary">
              Industry Certifications &amp; Compliance
            </h2>
            <p className="font-body-md text-body-md text-text-muted mt-1">
              Validated frameworks ensuring operational excellence.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
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
                  className={`material-symbols-outlined ${
                    cert.icon === "shield" ? "text-secondary" : "text-primary"
                  }`}
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
    </div>
  );
}
