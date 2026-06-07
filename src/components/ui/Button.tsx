export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline";
}) {
  const baseStyles =
    "px-6 py-2 rounded-lg font-label-md text-label-md transition-colors shadow-sm inline-flex items-center justify-center gap-2";

  const variants = {
    primary: "bg-[#D95B0D] hover:bg-[#c4520b] text-white",
    secondary:
      "bg-secondary-container text-on-secondary-container hover:bg-[#e66a27]",
    outline:
      "border border-border-subtle hover:border-secondary-container text-on-surface bg-surface-main hover:bg-surface-alt",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
