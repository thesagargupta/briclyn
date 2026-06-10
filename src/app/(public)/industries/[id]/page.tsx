import { notFound } from "next/navigation";
import Link from "next/link";
import { getIndustryById, industryCategories } from "@/lib/data/industries";

// Define generateStaticParams to statically generate these pages at build time
export function generateStaticParams() {
  return industryCategories.map((industry) => ({
    id: industry.id,
  }));
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const industry = getIndustryById(resolvedParams.id);

  if (!industry) {
    notFound();
  }

  return (
    <div className="flex-1 w-full bg-background">
      {/* Dynamic Header Section */}
      <div className="bg-surface-alt border-b border-border-subtle py-10 px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md mb-6"
          >
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_back</span>
            Back to All Industries
          </Link>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-surface-main shadow-sm border border-border-subtle text-primary-container rounded-2xl flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">
                {industry.icon}
              </span>
            </div>
            <div>
              <span className="bg-secondary-container/10 text-secondary-container font-label-sm text-label-sm px-3 py-1 rounded-full w-fit uppercase tracking-wider block mb-2">
                Industry Sector
              </span>
              <h1 className="font-display-lg text-[28px] sm:text-[36px] lg:text-display-lg leading-[1.2] tracking-tight text-primary">
                {industry.title}
              </h1>
            </div>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[800px] mt-4">
            {industry.desc}
          </p>
        </div>
      </div>

      {/* Roles Grid */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10 lg:py-14">
        <div className="mb-8">
          <h2 className="font-headline-lg text-[22px] sm:text-headline-lg text-on-surface mb-2">
            Specialized Workforce Roles
          </h2>
          <p className="font-body-md text-on-surface-variant max-w-[600px]">
            Explore the specific capabilities and workforce teams we can deploy to support operations in the {industry.title.toLowerCase()} sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industry.roles.map((role, index) => (
            <div
              key={index}
              className="bg-surface-main rounded-xl border border-border-subtle p-6 shadow-[0_2px_12px_-4px_rgba(11,53,83,0.04)] hover:shadow-[0_8px_24px_-4px_rgba(11,53,83,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-surface-alt text-secondary-container rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]" aria-hidden="true">
                    {role.icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-[18px] leading-[24px] font-semibold text-on-surface group-hover:text-primary-container transition-colors">
                  {role.title}
                </h3>
              </div>
              
              <p className="font-body-md text-body-md text-on-surface-variant flex-1 mb-6 text-sm leading-relaxed">
                {role.desc}
              </p>
              
              <div className="mt-auto pt-4 border-t border-border-subtle">
                <Link
                  href={`/contact?industry=${industry.id}&role=${encodeURIComponent(role.title)}`}
                  className="inline-flex items-center gap-2 font-label-md text-label-md text-primary group-hover:text-secondary-container transition-colors w-full justify-between"
                  aria-label={`Request ${role.title} workforce`}
                >
                  Request this Workforce
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
      </div>
    </div>
  );
}
