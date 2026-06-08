import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <main className="flex-1 w-full bg-surface-main">
      {/* Page Header */}
      <div className="bg-surface-alt border-b border-border-subtle py-10 px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto">
          <h1 className="font-display-lg text-[28px] sm:text-[36px] lg:text-display-lg leading-[1.2] tracking-tight text-primary mb-3">
            Contact Us
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[560px]">
            Get in touch for enterprise solutions, workforce management, and project consultations. We typically respond within one business day.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Contact Info Sidebar */}
          <aside className="lg:col-span-1 flex flex-col gap-6">
            <div>
              <h2 className="font-headline-md text-[18px] sm:text-headline-md text-on-surface mb-5">
                Get in Touch
              </h2>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#D95B0D]/10 flex items-center justify-center text-[#D95B0D] shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[20px]" aria-hidden="true">call</span>
                  </div>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface mb-0.5">Phone</p>
                    <a href="tel:+911234567890" className="text-sm text-on-surface-variant hover:text-primary-container transition-colors">
                      +91 123 456 7890
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#D95B0D]/10 flex items-center justify-center text-[#D95B0D] shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[20px]" aria-hidden="true">mail</span>
                  </div>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface mb-0.5">Email</p>
                    <a href="mailto:info@bricklyn.com" className="text-sm text-on-surface-variant hover:text-primary-container transition-colors">
                      info@bricklyn.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#D95B0D]/10 flex items-center justify-center text-[#D95B0D] shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[20px]" aria-hidden="true">location_on</span>
                  </div>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface mb-0.5">Office</p>
                    <p className="text-sm text-on-surface-variant">
                      New Delhi, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#D95B0D]/10 flex items-center justify-center text-[#D95B0D] shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[20px]" aria-hidden="true">schedule</span>
                  </div>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface mb-0.5">Business Hours</p>
                    <p className="text-sm text-on-surface-variant">Mon – Sat, 9:00 AM – 6:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What to expect */}
            <div className="bg-surface-alt rounded-xl border border-border-subtle p-6">
              <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider mb-4">
                What Happens Next?
              </h3>
              <ol className="flex flex-col gap-4">
                {[
                  "We review your inquiry and assign a specialist.",
                  "A dedicated consultant contacts you within 24 hours.",
                  "We prepare a customized workforce proposal.",
                  "Deployment begins on your agreed timeline.",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#D95B0D]/10 text-[#D95B0D] text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-on-surface-variant">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-surface-alt border border-border-subtle rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="font-headline-md text-[18px] sm:text-headline-md text-on-surface mb-6">
                Send Us a Message
              </h2>
              <form className="flex flex-col gap-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="firstName" className="font-label-md text-label-md text-on-surface">
                      First Name <span className="text-error" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      autoComplete="given-name"
                      className="px-4 py-3 border border-border-subtle rounded-lg bg-surface-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-colors"
                      placeholder="Rahul"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="lastName" className="font-label-md text-label-md text-on-surface">
                      Last Name <span className="text-error" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      autoComplete="family-name"
                      className="px-4 py-3 border border-border-subtle rounded-lg bg-surface-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-colors"
                      placeholder="Sharma"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="font-label-md text-label-md text-on-surface">
                      Email Address <span className="text-error" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="px-4 py-3 border border-border-subtle rounded-lg bg-surface-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-colors"
                      placeholder="rahul@company.com"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="font-label-md text-label-md text-on-surface">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="px-4 py-3 border border-border-subtle rounded-lg bg-surface-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="company" className="font-label-md text-label-md text-on-surface">
                    Company / Organization
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    className="px-4 py-3 border border-border-subtle rounded-lg bg-surface-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="service" className="font-label-md text-label-md text-on-surface">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="px-4 py-3 border border-border-subtle rounded-lg bg-surface-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm text-on-surface transition-colors appearance-none"
                  >
                    <option value="">Select a service...</option>
                    <option value="construction">Construction Workforce</option>
                    <option value="engineering">Engineering Staff</option>
                    <option value="security">Security Services</option>
                    <option value="facility">Facility Management</option>
                    <option value="hr">HR Outsourcing</option>
                    <option value="industrial">Industrial Workforce</option>
                    <option value="other">Other / General Inquiry</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="font-label-md text-label-md text-on-surface">
                    Message <span className="text-error" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="px-4 py-3 border border-border-subtle rounded-lg bg-surface-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-colors resize-y"
                    placeholder="Describe your workforce requirements, project scope, and timeline..."
                  />
                </div>

                <Button type="submit" className="w-full mt-1">
                  Send Message
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">send</span>
                </Button>
                <p className="text-xs text-on-surface-variant text-center">
                  By submitting this form, you agree to our{" "}
                  <a href="/privacy-policy" className="underline hover:text-primary-container transition-colors">
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
