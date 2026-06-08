import Link from "next/link";
import { Button } from "@/components/ui/Button";

const services = [
  {
    icon: "construction",
    title: "Construction Workforce",
    desc: "Deploy certified, specialized construction personnel for infrastructure projects. From master builders to heavy machinery operators, we provide the backbone of your site execution.",
    href: "/services#construction",
  },
  {
    icon: "engineering",
    title: "Engineering Staff",
    desc: "Access top-tier structural, civil, and mechanical engineers. We embed technical experts directly into your workflow to ensure architectural integrity and regulatory compliance.",
    href: "/services#engineering",
  },
  {
    icon: "security",
    title: "Security Services",
    desc: "Robust perimeter control and asset protection for active sites. Our protocol-driven security teams minimize risk and maintain operational continuity 24/7.",
    href: "/services#security",
  },
  {
    icon: "business",
    title: "Facility Management",
    desc: "End-to-end lifecycle management of physical assets. We handle maintenance, compliance, and spatial optimization to maximize the longevity of your real estate investments.",
    href: "/services#facility",
  },
  {
    icon: "support_agent",
    title: "HR Outsourcing",
    desc: "Streamline industrial human resources. We manage payroll, complex compliance matrices, and workforce relations, allowing your leadership to focus on core operational output.",
    href: "/services#hr",
  },
  {
    icon: "precision_manufacturing",
    title: "Industrial Workforce",
    desc: "Scalable labor solutions for manufacturing and heavy industrial environments. We source and deploy rapid-response teams calibrated for high-efficiency production lines.",
    href: "/services#industrial",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex-1 w-full bg-background">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10 lg:py-14">
        {/* Header Section */}
        <div className="mb-10 max-w-[768px]">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-highest text-primary font-label-sm text-label-sm rounded-full mb-4 border border-border-subtle">
            <span className="w-2 h-2 rounded-full bg-secondary-container" aria-hidden="true" />
            Enterprise Capabilities
          </div>
          <h1 className="font-display-lg text-[28px] sm:text-[36px] lg:text-display-lg leading-[1.2] tracking-tight text-on-surface mb-4">
            Industrial &amp; Infrastructure Services
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Comprehensive workforce and engineering solutions designed for high-stakes, large-scale structural projects. Precision deployed, reliably managed.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service, index) => (
            <div
              key={index}
              id={service.href.split("#")[1]}
              className="bg-surface-main rounded-xl border border-border-subtle p-6 shadow-[0_4px_24px_-4px_rgba(11,53,83,0.05)] hover:shadow-[0_12px_32px_-4px_rgba(11,53,83,0.08)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500" aria-hidden="true" />
              <div className="w-12 h-12 bg-surface-container-highest text-primary-container rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[24px]" aria-hidden="true">
                  {service.icon}
                </span>
              </div>
              <h2 className="font-headline-md text-[18px] leading-[26px] font-semibold text-on-surface mb-3">
                {service.title}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant flex-1 mb-6 text-sm leading-relaxed">
                {service.desc}
              </p>
              <div className="mt-auto pt-4 border-t border-border-subtle">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-label-md text-label-md text-primary group-hover:text-secondary-container transition-colors"
                  aria-label={`Request ${service.title} consultation`}
                >
                  Explore Capabilities
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform" aria-hidden="true">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="bg-primary-container rounded-xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
          <div
            className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 100% 0%, #ffffff 0%, transparent 50%), radial-gradient(circle at 0% 100%, #ffffff 0%, transparent 50%)",
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-[576px] text-center md:text-left">
            <h2 className="font-headline-lg text-[20px] sm:text-headline-lg text-on-primary mb-2">
              Require a specialized deployment?
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary-container text-sm sm:text-body-lg">
              Speak with our enterprise infrastructure architects to structure a custom workforce solution tailored to your project timeline.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <Button href="/contact" variant="secondary">
              Request Consultation
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">arrow_outward</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
