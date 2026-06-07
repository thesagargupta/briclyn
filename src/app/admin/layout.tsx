import { AdminSidebar } from "@/components/layout/AdminSidebar";
import { AdminNavbar } from "@/components/layout/AdminNavbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-surface flex text-on-surface">
      <AdminSidebar />
      <div className="flex-1 flex flex-col md:ml-64 w-full min-w-0">
        <AdminNavbar />
        <main className="flex-1 p-6 md:p-12 pb-10">
          <div className="max-w-container-max mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
