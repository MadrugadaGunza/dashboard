import Dashboard from "@/components/dashboard/Dashboard";
import Sidebar from "@/components/sidebar/Sidebar";

export default function Home() {
  return (
    <div className="grid grid-cols-[220px_1fr] gap-4 p-4 min-h-screen bg-stone-100">
      <Sidebar />
      <Dashboard />
    </div>
  );
}
