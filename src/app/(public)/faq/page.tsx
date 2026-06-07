export default function FAQPage() {
  return (
    <main className="flex-1 w-full bg-surface-main min-h-[60vh] py-10">
      <div className="max-w-container-max mx-auto px-6 lg:px-8 max-w-[768px]">
        <h1 className="font-display-lg text-display-lg text-primary mb-12 text-center">
          Frequently Asked Questions
        </h1>
        
        <div className="flex flex-col gap-6">
          <div className="border border-border-subtle rounded-xl p-6 bg-surface-alt">
            <h3 className="font-headline-md text-headline-md text-primary mb-3">
              How do you source your workforce?
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              We employ a rigorous vetting process that includes technical skills assessments, safety certification verification, and background checks to ensure only the highest caliber professionals join our network.
            </p>
          </div>
          <div className="border border-border-subtle rounded-xl p-6 bg-surface-alt">
            <h3 className="font-headline-md text-headline-md text-primary mb-3">
              What industries do you serve?
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              We specialize in construction, infrastructure, manufacturing, warehousing, logistics, and healthcare facilities.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
