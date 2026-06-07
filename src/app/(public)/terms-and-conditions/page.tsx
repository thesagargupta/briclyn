export default function TermsAndConditionsPage() {
  return (
    <main className="flex-1 w-full bg-surface-main min-h-[60vh] py-10">
      <div className="max-w-container-max mx-auto px-6 lg:px-8 max-w-[896px]">
        <h1 className="font-display-lg text-display-lg text-primary mb-8">
          Terms and Conditions
        </h1>
        <div className="prose prose-lg max-w-none text-on-surface-variant font-body-md">
          <p className="mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="mb-4">
            Welcome to BrickLyn! These terms and conditions outline the rules and regulations for the use of BrickLyn's Website and Services.
          </p>
          <h2 className="font-headline-md text-headline-md text-primary mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing this website, we assume you accept these terms and conditions. Do not continue to use BrickLyn if you do not agree to take all of the terms and conditions stated on this page.
          </p>
        </div>
      </div>
    </main>
  );
}
