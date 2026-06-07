import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <main className="flex-1 w-full bg-surface-main min-h-[60vh] py-10">
      <div className="max-w-container-max mx-auto px-6 lg:px-8 max-w-[768px]">
        <div className="text-center mb-12">
          <h1 className="font-display-lg text-display-lg text-primary mb-4">
            Contact Us
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Get in touch with our team for enterprise solutions, workforce
            management, and project consultations.
          </p>
        </div>
        
        <div className="bg-surface-alt border border-border-subtle rounded-2xl p-8 shadow-sm">
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-label-md text-label-md text-on-surface">First Name</label>
                <input className="px-4 py-3 border border-border-subtle rounded-lg bg-surface-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" type="text" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-md text-label-md text-on-surface">Last Name</label>
                <input className="px-4 py-3 border border-border-subtle rounded-lg bg-surface-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" type="text" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-md text-label-md text-on-surface">Email Address</label>
              <input className="px-4 py-3 border border-border-subtle rounded-lg bg-surface-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" type="email" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-md text-label-md text-on-surface">Message</label>
              <textarea rows={5} className="px-4 py-3 border border-border-subtle rounded-lg bg-surface-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"></textarea>
            </div>
            <Button className="w-full mt-4">Send Message</Button>
          </form>
        </div>
      </div>
    </main>
  );
}
