import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-surface-alt border-t border-border-subtle pt-16 pb-8 px-6 lg:px-8 mt-auto">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-12 lg:col-span-4 flex flex-col gap-6">
            <Link href="/">
              <img
                alt="BrickLyn Logo"
                className="h-12 object-contain"
                src="/logo.png"
              />
            </Link>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">
              Providing skilled, semi-skilled, and unskilled workforce across
              India with scalable solutions for global expansion. Brick by brick,
              line by line.
            </p>
          </div>
          <div>
            <h4 className="font-headline-md text-headline-md text-primary-container text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary-container transition-colors text-sm"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary-container transition-colors text-sm"
                  href="/services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary-container transition-colors text-sm"
                  href="/industries"
                >
                  Industries
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline-md text-headline-md text-primary-container text-lg mb-4">
              Contact Info
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 font-body-md text-body-md text-on-surface-variant text-sm">
                <span className="material-symbols-outlined text-base">
                  call
                </span>{" "}
                +91 123 456 7890
              </li>
              <li className="flex items-center gap-2 font-body-md text-body-md text-on-surface-variant text-sm">
                <span className="material-symbols-outlined text-base">
                  mail
                </span>{" "}
                info@bricklyn.com
              </li>
              <li className="flex items-center gap-2 font-body-md text-body-md text-on-surface-variant text-sm">
                <span className="material-symbols-outlined text-base">
                  location_on
                </span>{" "}
                New Delhi, India
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline-md text-headline-md text-primary-container text-lg mb-4">
              Follow Us
            </h4>
            <div className="flex items-center gap-4">
              <Link
                className="text-on-surface-variant hover:text-primary-container transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined">language</span>
              </Link>
              <Link
                className="text-on-surface-variant hover:text-primary-container transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined">share</span>
              </Link>
              <Link
                className="text-on-surface-variant hover:text-primary-container transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined">thumb_up</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-border-subtle pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body-md text-body-md text-on-surface-variant text-sm">
            © 2024 BrickLyn Infra Solutions Pvt Ltd. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy-policy"
              className="text-sm text-on-surface-variant hover:text-primary-container"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-sm text-on-surface-variant hover:text-primary-container"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
