export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1 w-full bg-surface-main min-h-[60vh] py-10">
      <div className="max-w-container-max mx-auto px-6 lg:px-8 max-w-[896px]">
        <h1 className="font-display-lg text-display-lg text-primary mb-8">
          Privacy Policy
        </h1>
        <div className="prose prose-lg max-w-none text-on-surface-variant font-body-md">
          <p className="mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="mb-4">
            At BrickLyn, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
          </p>
          <h2 className="font-headline-md text-headline-md text-primary mt-8 mb-4">Information We Collect</h2>
          <p className="mb-4">
            We may collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, or otherwise contact us.
          </p>
        </div>
      </div>
    </main>
  );
}
