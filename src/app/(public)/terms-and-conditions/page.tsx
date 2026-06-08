export default function TermsAndConditionsPage() {
  return (
    <main className="flex-1 w-full bg-surface-main">
      <div className="bg-surface-alt border-b border-border-subtle py-10 px-6 lg:px-8">
        <div className="max-w-[896px] mx-auto">
          <h1 className="font-display-lg text-[28px] sm:text-[36px] lg:text-display-lg leading-[1.2] tracking-tight text-primary mb-2">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm text-on-surface-variant">Last updated: January 1, 2025</p>
        </div>
      </div>
      <div className="max-w-[896px] mx-auto px-6 lg:px-8 py-10">
        <div className="prose max-w-none text-on-surface-variant">

          <p className="mb-5 font-body-md text-body-md text-sm leading-relaxed">
            Welcome to BrickLyn Infra Solutions Pvt Ltd (&ldquo;BrickLyn&rdquo;). By accessing or using our website and services, you agree to be bound by these Terms and Conditions. Please read them carefully before proceeding.
          </p>

          <h2 className="font-headline-md text-[18px] sm:text-headline-md text-primary mt-8 mb-3">
            1. Acceptance of Terms
          </h2>
          <p className="mb-5 font-body-md text-body-md text-sm leading-relaxed">
            By accessing this website, you confirm that you are at least 18 years of age and agree to comply with these terms. If you do not agree, please discontinue use of our website and services immediately.
          </p>

          <h2 className="font-headline-md text-[18px] sm:text-headline-md text-primary mt-8 mb-3">
            2. Use of Website
          </h2>
          <p className="mb-4 font-body-md text-body-md text-sm leading-relaxed">
            You agree to use this website only for lawful purposes. You must not:
          </p>
          <ul className="list-disc pl-6 mb-5 space-y-1 text-sm text-on-surface-variant">
            <li>Violate any applicable laws or regulations</li>
            <li>Transmit any unauthorized advertising or promotional material</li>
            <li>Attempt to gain unauthorized access to any part of the site</li>
            <li>Use the site to harm or defraud other users or third parties</li>
          </ul>

          <h2 className="font-headline-md text-[18px] sm:text-headline-md text-primary mt-8 mb-3">
            3. Intellectual Property
          </h2>
          <p className="mb-5 font-body-md text-body-md text-sm leading-relaxed">
            All content on this website — including text, graphics, logos, and images — is the property of BrickLyn Infra Solutions Pvt Ltd and is protected by applicable copyright and trademark laws. You may not reproduce or distribute any content without our written permission.
          </p>

          <h2 className="font-headline-md text-[18px] sm:text-headline-md text-primary mt-8 mb-3">
            4. Service Agreements
          </h2>
          <p className="mb-5 font-body-md text-body-md text-sm leading-relaxed">
            All workforce deployment and service engagements are governed by separate service agreements signed between BrickLyn and the client. These Terms and Conditions apply to the use of this website only and do not override or replace the terms in those agreements.
          </p>

          <h2 className="font-headline-md text-[18px] sm:text-headline-md text-primary mt-8 mb-3">
            5. Limitation of Liability
          </h2>
          <p className="mb-5 font-body-md text-body-md text-sm leading-relaxed">
            BrickLyn shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use our website or services. Our total liability for any claim shall not exceed the amount paid by you for the relevant service.
          </p>

          <h2 className="font-headline-md text-[18px] sm:text-headline-md text-primary mt-8 mb-3">
            6. Governing Law
          </h2>
          <p className="mb-5 font-body-md text-body-md text-sm leading-relaxed">
            These Terms and Conditions are governed by the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts in New Delhi, India.
          </p>

          <h2 className="font-headline-md text-[18px] sm:text-headline-md text-primary mt-8 mb-3">
            7. Changes to Terms
          </h2>
          <p className="mb-5 font-body-md text-body-md text-sm leading-relaxed">
            We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated date. Continued use of our website after changes constitutes acceptance of the revised terms.
          </p>

          <h2 className="font-headline-md text-[18px] sm:text-headline-md text-primary mt-8 mb-3">
            8. Contact
          </h2>
          <p className="mb-5 font-body-md text-body-md text-sm leading-relaxed">
            For questions about these Terms and Conditions, contact us at{" "}
            <a href="mailto:info@bricklyn.com" className="text-primary-container underline hover:text-[#D95B0D] transition-colors">
              info@bricklyn.com
            </a>{" "}
            or visit our{" "}
            <a href="/contact" className="text-primary-container underline hover:text-[#D95B0D] transition-colors">
              Contact page
            </a>.
          </p>
        </div>
      </div>
    </main>
  );
}
