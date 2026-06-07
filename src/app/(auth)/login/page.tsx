import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="max-w-[448px] w-full space-y-8 bg-surface-main p-8 border border-border-subtle rounded-2xl shadow-sm">
      <div className="text-center">
        <h2 className="mt-6 text-center font-display-lg text-display-lg text-primary tracking-tight">
          Admin Sign In
        </h2>
        <p className="mt-2 text-center font-body-md text-body-md text-on-surface-variant">
          Sign in to access the admin portal
        </p>
      </div>
      <form className="mt-8 space-y-6" action="#" method="POST">
        <div className="space-y-4 rounded-md shadow-sm">
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-border-subtle placeholder-on-surface-variant/60 text-on-surface focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm bg-surface-main"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-border-subtle placeholder-on-surface-variant/60 text-on-surface focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm bg-surface-main"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-primary focus:ring-primary border-border-subtle rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-on-surface-variant">
              Remember me
            </label>
          </div>
        </div>

        <div>
          <Link href="/admin">
            <Button className="w-full justify-center mt-4" variant="primary">Sign in</Button>
          </Link>
        </div>
      </form>
    </div>
  );
}
