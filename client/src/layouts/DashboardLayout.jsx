import { useState } from "react";
import { Menu } from "lucide-react";

import Sidebar from "../components/Dashboard/Sidebar";

function DashboardLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F8F3]">

      {/* Sidebar */}

      <Sidebar
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* Main Content */}

      <div className="lg:ml-72">

        {/* Mobile Header */}

        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-[#DCE6DD] bg-white px-5 py-4 shadow-sm lg:hidden">

          <button
            onClick={() => setMobileOpen(true)}
            className="
              rounded-lg
              p-2
              transition
              hover:bg-[#F7F8F3]
            "
          >
            <Menu size={24} />
          </button>

          <h1 className="font-['Space_Grotesk'] text-xl font-bold text-[#17241C]">
            SpendSense
          </h1>

          {/* Empty div for balance */}

          <div className="w-10" />

        </header>

        {/* Desktop Content */}

        <main className="min-h-screen p-5 sm:p-6 lg:p-8">

          {children}

        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;