"use client";

import { useState } from "react";
import Link from "next/link";

const faqCategories = [
  {
    category: "Workforce & Sourcing",
    items: [
      {
        q: "How do you source and vet your workforce?",
        a: "We employ a rigorous multi-stage vetting process that includes technical skills assessments, safety certification verification, background checks, and in-person interviews. Only candidates meeting our quality thresholds are added to our active workforce pool.",
      },
      {
        q: "What categories of workforce do you provide?",
        a: "We provide skilled labor (engineers, supervisors, certified tradesmen), semi-skilled workers (machine operators, welders, electricians), and unskilled general labor (helpers, loaders, housekeeping staff) — all verified and job-ready.",
      },
      {
        q: "How quickly can you deploy workers to a new site?",
        a: "For most standard requirements, we can mobilize a team within 48–72 hours. For large-scale deployments (100+ workers), we typically require 5–7 business days to ensure proper screening and documentation.",
      },
    ],
  },
  {
    category: "Services & Coverage",
    items: [
      {
        q: "Which industries do you serve?",
        a: "We specialize in construction, civil infrastructure, manufacturing, warehousing, logistics, facility management, and healthcare facilities — across both public and private sector projects.",
      },
      {
        q: "Do you operate across all of India?",
        a: "Yes. We are a PAN India service provider with active operations in 25+ cities including Delhi NCR, Mumbai, Bangalore, Hyderabad, Pune, Chennai, Kolkata, and more. We also support remote project sites.",
      },
      {
        q: "Can you support international or overseas deployments?",
        a: "Yes. We provide workforce solutions for global expansion including documentation support, compliance management, and coordination with international partners for overseas projects.",
      },
    ],
  },
  {
    category: "Compliance & Contracts",
    items: [
      {
        q: "How do you manage statutory compliance?",
        a: "We handle all aspects of compliance including PF, ESIC, labor contractor licenses, minimum wage compliance, and site-specific insurance. Our dedicated compliance team ensures zero regulatory risk for your project.",
      },
      {
        q: "What contract models do you offer?",
        a: "We offer flexible engagement models including project-based contracts, monthly retainers, and long-term staffing agreements. All contracts include SLA-backed performance metrics and escalation procedures.",
      },
      {
        q: "Is there a minimum workforce size for engagement?",
        a: "No, there is no strict minimum. We serve projects ranging from small teams of 5–10 workers to large deployments of 1000+ workers. Our pricing scales accordingly.",
      },
    ],
  },
  {
    category: "Billing & Support",
    items: [
      {
        q: "How does billing work?",
        a: "We offer flexible billing cycles — weekly, bi-weekly, or monthly — based on your contract. All invoices are itemized and backed by attendance records and deployment logs for full transparency.",
      },
      {
        q: "What support do you provide after deployment?",
        a: "We provide dedicated account management, on-site coordination support, regular performance reviews, and a 24/7 helpline for urgent workforce matters. Any replacement or scaling requests are handled within 24 hours.",
      },
    ],
  },
];

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-border-subtle rounded-xl bg-surface-main overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left gap-4 hover:bg-surface-alt transition-colors"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span className="font-label-md text-label-md text-on-surface font-semibold pr-2 leading-snug">
          {question}
        </span>
        <span
          className={`material-symbols-outlined text-[20px] text-on-surface-variant shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          expand_more
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5 pt-1 border-t border-border-subtle">
          <p className="font-body-md text-body-md text-on-surface-variant text-sm leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <main className="flex-1 w-full bg-background">
      {/* Header */}
      <div className="bg-surface-alt border-b border-border-subtle py-10 px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto">
          <h1 className="font-display-lg text-[28px] sm:text-[36px] lg:text-display-lg leading-[1.2] tracking-tight text-primary mb-3">
            Frequently Asked Questions
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[560px]">
            Everything you need to know about our workforce solutions, compliance management, and engagement models.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* FAQ Content */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            {faqCategories.map((cat, ci) => (
              <section key={ci}>
                <h2 className="font-headline-md text-[18px] sm:text-headline-md text-primary mb-4 pb-3 border-b border-border-subtle">
                  {cat.category}
                </h2>
                <div className="flex flex-col gap-3">
                  {cat.items.map((item, ii) => (
                    <AccordionItem key={ii} question={item.q} answer={item.a} />
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 flex flex-col gap-6 lg:sticky lg:top-[80px] h-fit">
            {/* Still have questions */}
            <div className="bg-primary-container rounded-xl p-6">
              <span className="material-symbols-outlined text-[32px] text-on-primary mb-3 block" aria-hidden="true">
                support_agent
              </span>
              <h3 className="font-headline-md text-[18px] text-on-primary mb-2">
                Still have questions?
              </h3>
              <p className="text-sm text-on-primary-container mb-5">
                Our team is available Monday to Saturday, 9 AM – 6 PM IST to assist with any queries.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-secondary-container hover:bg-secondary text-white font-label-md text-label-md px-5 py-2.5 rounded-lg transition-colors w-full justify-center"
              >
                Contact Us
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_forward</span>
              </Link>
            </div>

            {/* Quick facts */}
            <div className="bg-surface-main rounded-xl border border-border-subtle p-6">
              <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider mb-4">
                Quick Facts
              </h3>
              <ul className="flex flex-col gap-3">
                {[
                  { icon: "schedule", text: "48–72 hr standard deployment" },
                  { icon: "map", text: "25+ cities across India" },
                  { icon: "groups", text: "5,000+ workforce deployed" },
                  { icon: "verified", text: "ISO 9001:2015 certified" },
                  { icon: "gavel", text: "Full statutory compliance" },
                ].map((fact, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-[18px] text-[#D95B0D] shrink-0" aria-hidden="true">
                      {fact.icon}
                    </span>
                    {fact.text}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}
