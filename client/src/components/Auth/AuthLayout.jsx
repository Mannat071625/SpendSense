import { IndianRupee } from "lucide-react";

function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F7F8F3]">

      {/* Background Grid */}

      <div className="absolute inset-0 bg-[linear-gradient(#DCE6DD_1px,transparent_1px),linear-gradient(90deg,#DCE6DD_1px,transparent_1px)] bg-[size:36px_36px] opacity-60" />

      <div className="relative flex min-h-screen">

        {/* ===========================
              LEFT PANEL (Desktop)
        ============================ */}

        <aside className="hidden lg:flex lg:w-1/2 bg-[#0F5C46] text-white">

          <div className="flex h-full w-full flex-col justify-between p-16">

            <div>

              {/* Logo */}

              <div className="flex items-center gap-4">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#0F5C46] shadow-sm">

                  <IndianRupee size={30} />

                </div>

                <div>

                  <h2 className="font-['Space_Grotesk'] text-4xl font-bold">
                    SpendSense
                  </h2>

                  <p className="mt-1 text-xl text-green-100">
                    Smart Expense Tracker
                  </p>

                </div>

              </div>

              {/* Heading */}

              <div className="mt-24">

                <h1 className="font-['Space_Grotesk'] text-7xl font-bold leading-tight">

                  Track every
                  <br />
                  rupee.

                </h1>

                <p className="mt-10 max-w-lg text-3xl leading-relaxed text-green-100">

                  Organize expenses,
                  understand spending habits,
                  and build better financial discipline.

                </p>

              </div>

            </div>

            <p className="text-green-200">
              © 2026 SpendSense
            </p>

          </div>

        </aside>

        {/* ===========================
              RIGHT PANEL
        ============================ */}

        <main className="flex flex-1 items-center justify-center px-6 py-10 sm:px-8 lg:px-16">

          <div className="w-full max-w-md">

            {/* Mobile Logo */}

            <div className="mb-10 flex items-center gap-3 lg:hidden">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0F5C46] text-white">

                <IndianRupee size={22} />

              </div>

              <div>

                <h2 className="font-['Space_Grotesk'] text-3xl font-bold text-[#17241C]">

                  SpendSense

                </h2>

                <p className="text-xs tracking-[0.25em] text-[#5B6F63]">

                  SMART EXPENSE TRACKER

                </p>

              </div>

            </div>

            {/* Heading */}

            <h1 className="font-['Space_Grotesk'] text-4xl font-bold text-[#17241C] sm:text-5xl">

              {title}

            </h1>

            <p className="mt-3 text-base leading-7 text-[#5B6F63]">

              {subtitle}

            </p>

            {/* Form */}

            <div className="mt-10">

              {children}

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}

export default AuthLayout;