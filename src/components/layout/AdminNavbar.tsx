export function AdminNavbar() {
  return (
    <header className="flex justify-between items-center w-full px-8 py-3 sticky top-0 z-50 bg-surface-main shadow-sm border-b border-border-subtle">
      <div className="flex items-center gap-4">
        <span className="font-headline-md text-headline-md font-bold text-primary md:hidden">
          Manpower CMS
        </span>
      </div>
      <div className="flex items-center gap-4 ml-auto">
        <button className="text-on-surface-variant hover:bg-surface-alt rounded-full p-2 transition-colors">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="text-on-surface-variant hover:bg-surface-alt rounded-full p-2 transition-colors">
          <span className="material-symbols-outlined">help_outline</span>
        </button>
        <div className="h-8 w-px bg-border-subtle mx-2"></div>
        <div className="h-10 w-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-md text-label-md overflow-hidden ring-2 ring-surface-main">
          <img
            alt="Admin User Profile"
            className="h-full w-full object-cover"
            src="https://picsum.photos/seed/bricklyn13/1600/900"
          />
        </div>
      </div>
    </header>
  );
}
