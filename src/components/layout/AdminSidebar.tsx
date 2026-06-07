import Link from "next/link";

export function AdminSidebar() {
  const navItems = [
    { name: "Dashboard", icon: "dashboard", href: "/admin", active: true },
    { name: "Website Content", icon: "edit_note", href: "#", active: false },
    { name: "Services", icon: "engineering", href: "#", active: false },
    { name: "Projects", icon: "architecture", href: "#", active: false },
    { name: "Blogs", icon: "rss_feed", href: "#", active: false },
    { name: "Careers", icon: "work", href: "#", active: false },
    { name: "Leads", icon: "person_search", href: "#", active: false },
    { name: "Media", icon: "perm_media", href: "#", active: false },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full flex flex-col p-4 w-64 border-r border-border-subtle bg-surface-main shadow-sm z-40 hidden md:flex">
      {/* Brand */}
      <div className="flex flex-col items-start gap-2 px-4 py-6 border-b border-border-subtle mb-6">
        <Link href="/">
          <img
            alt="BrickLyn Logo"
            className="h-8 object-contain mb-2"
            src="/logo.jpeg"
          />
        </Link>
        <h1 className="font-headline-md text-headline-md font-bold text-primary">
          Workforce Admin
        </h1>
        <p className="font-label-sm text-label-sm text-on-surface-variant">
          Enterprise Control
        </p>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-1 overflow-y-auto pr-2">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              item.active
                ? "bg-surface-container-highest text-primary font-semibold opacity-90"
                : "text-on-surface-variant hover:bg-surface-alt"
            }`}
          >
            <span
              className={`material-symbols-outlined ${item.active ? "icon-fill" : ""}`}
            >
              {item.icon}
            </span>
            <span className="font-label-md text-label-md">{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Bottom Actions */}
      <div className="mt-auto pt-4 border-t border-border-subtle">
        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-alt rounded-lg transition-colors"
        >
          <span className="material-symbols-outlined">settings</span>
          <span className="font-label-md text-label-md">Settings</span>
        </Link>
      </div>
    </aside>
  );
}
