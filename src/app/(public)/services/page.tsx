import { Button } from "@/components/ui/Button";

export default function ServicesPage() {
  const services = [
    {
      icon: "construction",
      title: "Construction Workforce",
      desc: "Deploy certified, specialized construction personnel for infrastructure projects. From master builders to heavy machinery operators, we provide the backbone of your site execution.",
    },
    {
      icon: "engineering",
      title: "Engineering Staff",
      desc: "Access top-tier structural, civil, and mechanical engineers. We embed technical experts directly into your workflow to ensure architectural integrity and regulatory compliance.",
    },
    {
      icon: "security",
      title: "Security Services",
      desc: "Robust perimeter control and asset protection for active sites. Our protocol-driven security teams minimize risk and maintain operational continuity 24/7.",
    },
    {
      icon: "business",
      title: "Facility Management",
      desc: "End-to-end lifecycle management of physical assets. We handle maintenance, compliance, and spatial optimization to maximize the longevity of your real estate investments.",
    },
    {
      icon: "support_agent",
      title: "HR Outsourcing",
      desc: "Streamline industrial human resources. We manage payroll, complex compliance matrices, and workforce relations, allowing your leadership to focus on core operational output.",
    },
    {
      icon: "precision_manufacturing",
      title: "Industrial Workforce",
      desc: "Scalable labor solutions for manufacturing and heavy industrial environments. We source and deploy rapid-response teams calibrated for high-efficiency production lines.",
    },
  ];

  return (
    <div className="flex-1 w-full max-w-container-max mx-auto px-6 lg:px-8 py-10 bg-background">
      {/* Header Section */}
      <div className="mb-10 max-w-[768px]">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-highest text-primary font-label-sm text-label-sm rounded-full mb-4 border border-border-subtle">
          <span className="w-2 h-2 rounded-full bg-secondary-container"></span>
          Enterprise Capabilities
        </div>
        <h2 className="font-display-lg text-display-lg text-on-surface mb-4">
          Industrial &amp; Infrastructure Services
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Comprehensive workforce and engineering solutions designed for
          high-stakes, large-scale structural projects. Precision deployed,
          reliably managed.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-surface-main rounded-xl border border-border-subtle p-6 shadow-[0_4px_24px_-4px_rgba(11,53,83,0.05)] hover:shadow-[0_12px_32px_-4px_rgba(11,53,83,0.08)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500"></div>
            <div className="w-12 h-12 bg-surface-container-highest text-primary-container rounded-lg flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[24px]">
                {service.icon}
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3">
              {service.title}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant flex-1 mb-6">
              {service.desc}
            </p>
            <div className="mt-auto pt-4 border-t border-border-subtle">
              <button className="inline-flex items-center gap-2 font-label-md text-label-md text-primary group-hover:text-secondary-container transition-colors">
                Explore Capabilities{" "}
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Call to Action */}
      <div className="mt-10 bg-primary-container rounded-xl p-12 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 100% 0%, #ffffff 0%, transparent 50%), radial-gradient(circle at 0% 100%, #ffffff 0%, transparent 50%)",
          }}
        ></div>
        <div className="relative z-10 max-w-[576px]">
          <h3 className="font-headline-lg text-headline-lg text-on-primary mb-2">
            Require a specialized deployment?
          </h3>
          <p className="font-body-lg text-body-lg text-on-primary-container">
            Speak with our enterprise infrastructure architects to structure a
            custom workforce solution tailored to your project timeline.
          </p>
        </div>
        <div className="relative z-10 whitespace-nowrap">
          <button className="bg-secondary-container hover:bg-secondary text-on-primary font-label-md text-label-md px-8 py-4 rounded-lg transition-colors shadow-sm inline-flex items-center gap-2">
            Request Consultation{" "}
            <span className="material-symbols-outlined text-[20px]">
              arrow_outward
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
