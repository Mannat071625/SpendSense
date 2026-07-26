import {
  LayoutDashboard,
  Wallet,
  ChartPie,
  Tags,
  Settings,
  LogOut,
  IndianRupee,
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    name: "Expenses",
    icon: Wallet,
    path: "/expenses",
  },
  {
    name: "Analytics",
    icon: ChartPie,
    path: "/analytics",
  },
  {
    name: "Categories",
    icon: Tags,
    path: "/categories",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

function Sidebar({ mobileOpen, setMobileOpen }) {
  return (
    <>
      {/* Mobile Overlay */}

      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar */}

      <aside
        className={`
          fixed
          top-0
          left-0
          z-50
          flex
          h-screen
          w-72
          flex-col
          border-r
          border-[#DCE6DD]
          bg-white
          shadow-xl
          transition-transform
          duration-300

          ${
            mobileOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }

          lg:translate-x-0
        `}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b border-[#DCE6DD] px-6 py-6">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0F5C46] text-white">

              <IndianRupee size={20} />

            </div>

            <div>

              <h2 className="font-['Space_Grotesk'] text-2xl font-bold text-[#17241C]">
                SpendSense
              </h2>

              <p className="text-xs tracking-[0.2em] text-[#5B6F63]">
                EXPENSE TRACKER
              </p>

            </div>

          </div>

          <button
            onClick={() => setMobileOpen(false)}
            className="lg:hidden"
          >
            <X />
          </button>

        </div>

        {/* Navigation */}

        <nav className="flex-1 space-y-2 px-4 py-8">

          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  px-4
                  py-3
                  text-base
                  font-medium
                  transition-all

                  ${
                    isActive
                      ? "bg-[#0F5C46] text-white shadow-md"
                      : "text-[#5B6F63] hover:bg-[#F7F8F3] hover:text-[#17241C]"
                  }
                  `
                }
              >
                <Icon size={20} />

                {item.name}
              </NavLink>
            );
          })}

        </nav>

        {/* Logout */}

        <div className="border-t border-[#DCE6DD] p-4">

          <button
            className="
              flex
              w-full
              items-center
              gap-3
              rounded-xl
              px-4
              py-3
              text-[#C0392B]
              transition
              hover:bg-red-50
            "
          >
            <LogOut size={20} />

            Logout
          </button>

        </div>

      </aside>
    </>
  );
}

export default Sidebar;