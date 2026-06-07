import { Button } from "@/components/ui/Button";

export default function IndustriesPage() {
  const industries = [
    {
      icon: "architecture",
      title: "Construction",
      desc: "Heavy civil, commercial, and residential construction demands a resilient workforce. We supply certified operators, skilled trades, and general labor to keep sites moving safely and on schedule.",
    },
    {
      icon: "engineering",
      title: "Infrastructure",
      desc: "From highway systems to utility networks, infrastructure requires large-scale coordination. Our teams are experienced in complex, long-term public and private works projects.",
    },
    {
      icon: "precision_manufacturing",
      title: "Manufacturing",
      desc: "Precision and consistency define the factory floor. We provide trained assembly line workers, quality control specialists, and machinery operators to maintain high throughput and safety standards.",
    },
    {
      icon: "warehouse",
      title: "Warehousing",
      desc: "Efficient distribution centers rely on speed and accuracy. Our warehouse personnel, including forklift drivers and inventory clerks, are vetted for reliability in fast-paced environments.",
    },
    {
      icon: "local_shipping",
      title: "Logistics",
      desc: "Keeping supply chains intact requires a dedicated logistical workforce. We supply fleet managers, loaders, and coordinators to ensure materials reach their destination without delay.",
    },
    {
      icon: "local_hospital",
      title: "Healthcare Facilities",
      desc: "Supporting the operation of medical centers requires specialized facility management staff. We provide maintenance technicians, environmental service workers, and security personnel trained for sensitive environments.",
    },
  ];

  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <section className="relative bg-surface-alt py-10 overflow-hidden">
        <div className="absolute inset-0 bg-primary-container/5 z-0"></div>
        <div className="max-w-container-max mx-auto px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <span className="bg-secondary-container/10 text-secondary-container font-label-sm text-label-sm px-3 py-1 rounded-full w-fit uppercase tracking-wider">
              Sector Expertise
            </span>
            <h1 className="font-display-lg text-display-lg text-primary md:text-display-lg text-headline-lg-mobile">
              Empowering Industries with Precision Workforce Solutions
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              From monumental construction projects to seamless logistics
              networks, BrickLyn provides the skilled, reliable manpower necessary
              to drive enterprise infrastructure forward. We build the teams that
              build the future.
            </p>
            <div className="flex gap-4 mt-2">
              <Button>Explore Sectors</Button>
              <Button variant="outline">View Case Studies</Button>
            </div>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg border border-border-subtle bg-surface-main">
            <img
              alt="Construction Site"
              className="w-full h-full object-cover"
              src="https://picsum.photos/seed/bricklyn10/1600/900"
            />
          </div>
        </div>
      </section>

      {/* Industry Cards Grid */}
      <section className="py-10 max-w-container-max mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline-lg text-headline-lg text-primary md:text-headline-lg text-headline-lg-mobile">
            Core Industries Served
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-4 max-w-[672px] mx-auto">
            Specialized teams deployed across vital sectors, ensuring
            compliance, safety, and unmatched productivity for large-scale
            operations.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-surface-main rounded-xl border border-border-subtle p-6 flex flex-col gap-4 shadow-[0_10px_15px_-3px_rgba(11,53,83,0.05),0_4px_6px_-2px_rgba(11,53,83,0.03)] hover:-translate-y-1 hover:shadow-[0_20px_25px_-5px_rgba(11,53,83,0.1),0_10px_10px_-5px_rgba(11,53,83,0.04)] transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-surface-alt flex items-center justify-center text-primary-container mb-2 border border-border-subtle">
                <span
                  className="material-symbols-outlined text-[24px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {industry.icon}
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary">
                {industry.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
                {industry.desc}
              </p>
              <a
                className="font-label-md text-label-md text-secondary-container flex items-center gap-2 hover:text-secondary transition-colors mt-auto w-fit"
                href="#"
              >
                Learn More{" "}
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-container text-on-primary py-12">
        <div className="max-w-container-max mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <h2 className="font-headline-lg text-headline-lg mb-2">
              Ready to scale your workforce?
            </h2>
            <p className="font-body-lg text-body-lg text-surface-container-highest">
              Contact our industry specialists for a tailored manpower
              consultation.
            </p>
          </div>
          <div className="flex gap-4">
            <Button variant="secondary">Request a Quote</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
