export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1 w-full bg-surface-main">
      <div className="bg-surface-alt border-b border-border-subtle py-10 px-6 lg:px-8">
        <div className="max-w-[896px] mx-auto">
          <h1 className="font-display-lg text-[28px] sm:text-[36px] lg:text-display-lg leading-[1.2] tracking-tight text-primary mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-on-surface-variant">Last updated: January 1, 2025</p>
        </div>
      </div>
      <div className="max-w-[896px] mx-auto px-6 lg:px-8 py-10">
        <div className="prose max-w-none text-on-surface-variant">

          <p className="mb-5 font-body-md text-body-md leading-relaxed">
            At BrickLyn Infra Solutions Pvt Ltd (&ldquo;BrickLyn&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), we are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
          </p>

          <h2 className="font-headline-md text-[18px] sm:text-headline-md text-primary mt-8 mb-3">
            1. Information We Collect
          </h2>
          <p className="mb-4 font-body-md text-body-md text-sm leading-relaxed">
            We may collect personal information that you voluntarily provide when you register on the website, express an interest in our services, fill out forms, or otherwise contact us. This may include:
          </p>
          <ul className="list-disc pl-6 mb-5 space-y-1 text-sm text-on-surface-variant">
            <li>Name, email address, and phone number</li>
            <li>Company name and job title</li>
            <li>Inquiry details and correspondence</li>
            <li>Usage data and cookies (when you browse our site)</li>
          </ul>

          <h2 className="font-headline-md text-[18px] sm:text-headline-md text-primary mt-8 mb-3">
            2. How We Use Your Information
          </h2>
          <p className="mb-4 font-body-md text-body-md text-sm leading-relaxed">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 mb-5 space-y-1 text-sm text-on-surface-variant">
            <li>Respond to inquiries and service requests</li>
            <li>Process and fulfill workforce deployment agreements</li>
            <li>Send transactional communications related to your account or requests</li>
            <li>Improve our website and service offerings</li>
            <li>Comply with applicable legal and regulatory obligations</li>
          </ul>

          <h2 className="font-headline-md text-[18px] sm:text-headline-md text-primary mt-8 mb-3">
            3. Sharing Your Information
          </h2>
          <p className="mb-5 font-body-md text-body-md text-sm leading-relaxed">
            We do not sell, rent, or trade your personal information. We may share information with trusted service providers who assist us in operating our website or conducting our business, subject to confidentiality agreements. We may also disclose information when required by law or to protect our rights.
          </p>

          <h2 className="font-headline-md text-[18px] sm:text-headline-md text-primary mt-8 mb-3">
            4. Data Security
          </h2>
          <p className="mb-5 font-body-md text-body-md text-sm leading-relaxed">
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
          </p>

          <h2 className="font-headline-md text-[18px] sm:text-headline-md text-primary mt-8 mb-3">
            5. Cookies
          </h2>
          <p className="mb-5 font-body-md text-body-md text-sm leading-relaxed">
            Our website uses cookies to enhance your browsing experience. You can choose to disable cookies in your browser settings, though some features of the website may not function correctly as a result.
          </p>

          <h2 className="font-headline-md text-[18px] sm:text-headline-md text-primary mt-8 mb-3">
            6. Your Rights
          </h2>
          <p className="mb-5 font-body-md text-body-md text-sm leading-relaxed">
            You have the right to request access to, correction, or deletion of the personal data we hold about you. To exercise these rights, please contact us at{" "}
            <a href="mailto:info@bricklyn.com" className="text-primary-container underline hover:text-[#D95B0D] transition-colors">
              info@bricklyn.com
            </a>.
          </p>

          <h2 className="font-headline-md text-[18px] sm:text-headline-md text-primary mt-8 mb-3">
            7. Contact Us
          </h2>
          <p className="mb-5 font-body-md text-body-md text-sm leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at{" "}
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
