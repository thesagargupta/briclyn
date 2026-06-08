import Link from "next/link";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  href?: string;
  children: React.ReactNode;
};

export function Button({
  children,
  variant = "primary",
  className = "",
  href,
  ...props
}: ButtonProps) {
  const baseStyles =
    "px-6 py-2.5 rounded-lg font-label-md text-label-md transition-colors shadow-sm inline-flex items-center justify-center gap-2 cursor-pointer";

  const variants = {
    primary: "bg-[#D95B0D] hover:bg-[#c4520b] text-white",
    secondary:
      "bg-secondary-container text-on-secondary-container hover:bg-[#e66a27]",
    outline:
      "border border-border-subtle hover:border-secondary-container text-on-surface bg-surface-main hover:bg-surface-alt",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
