import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { serviceCategories } from "@/lib/data/services";

export default function ServicesOverviewPage() {
  return (
    <div className="flex-1 w-full bg-background">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10 lg:py-14">
        {/* Header Section */}
        <div className="mb-14 max-w-[768px]">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-highest text-primary font-label-sm text-label-sm rounded-full mb-4 border border-border-subtle">
            <span className="w-2 h-2 rounded-full bg-secondary-container" aria-hidden="true" />
            Enterprise Capabilities
          </div>
          <h1 className="font-display-lg text-[28px] sm:text-[36px] lg:text-display-lg leading-[1.2] tracking-tight text-on-surface mb-4">
            Industrial &amp; Infrastructure Services
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Comprehensive workforce and engineering solutions designed for high-stakes, large-scale structural projects. Explore our categories to see the specific roles we deploy.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {serviceCategories.map((category) => (
            <div
              key={category.id}
              className="bg-surface-main rounded-xl border border-border-subtle p-6 shadow-[0_2px_12px_-4px_rgba(11,53,83,0.04)] hover:shadow-[0_8px_24px_-4px_rgba(11,53,83,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              <div className="h-14 w-14 bg-surface-alt shadow-sm border border-border-subtle text-primary-container rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#D95B0D]/10 group-hover:text-[#D95B0D] group-hover:border-[#D95B0D]/20 transition-colors">
                <span className="material-symbols-outlined text-[28px]" aria-hidden="true">
                  {category.icon}
                </span>
              </div>
              <h2 className="font-headline-lg text-[22px] font-bold text-primary mb-3 group-hover:text-primary-container transition-colors">
                {category.title}
              </h2>
              <p className="font-body-md text-on-surface-variant mb-8 flex-1 leading-relaxed">
                {category.desc}
              </p>
              
              <div className="mt-auto pt-4 border-t border-border-subtle">
                <Link
                  href={`/services/${category.id}`}
                  className="inline-flex items-center gap-2 font-label-md text-label-md text-primary group-hover:text-secondary-container transition-colors w-full justify-between"
                  aria-label={`Explore ${category.title} capabilities`}
                >
                  Explore Capabilities
                  <div className="w-8 h-8 rounded-full bg-surface-alt group-hover:bg-secondary-fixed flex items-center justify-center transition-colors">
                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform" aria-hidden="true">
                      arrow_forward
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="bg-primary-container rounded-xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative shadow-md">
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
            <Button href="/contact" variant="secondary" className="shadow-lg hover:-translate-y-0.5 transition-transform">
              Request Consultation
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">arrow_outward</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
