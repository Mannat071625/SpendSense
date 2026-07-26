import { Link } from "react-router-dom";
import { IndianRupee, ShieldCheck } from "lucide-react";
import { useMemo } from "react";

function Hero() {
  const isLoggedIn = useMemo(() => {
  return !!localStorage.getItem("token");
}, []);
  return (
    <section className="relative overflow-hidden bg-[#F7F8F3] pb-16">
      <div className="absolute inset-0 bg-[linear-gradient(#D3E3D6_1px,transparent_1px),linear-gradient(90deg,#D3E3D6_1px,transparent_1px)] bg-[size:100%_36px,36px_100%] opacity-40" />

      <div className="relative mx-auto flex min-h-[75vh] max-w-4xl flex-col items-center justify-center px-8 text-center">
        {/* Logo */}
        <div className="mb-16 mt-8 flex items-center justify-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0F5C46] text-white shadow-lg shadow-[#0F5C46]/20">
            <IndianRupee size={22} strokeWidth={2.4} />
          </div>
    
          <div className="text-left">
            <h2 className="font-['Space_Grotesk'] text-2xl font-bold text-[#17241C]">
              SpendSense
            </h2>
            <p className="font-['IBM_Plex_Mono'] text-xs tracking-wide text-[#5B6F63]">
              SMART EXPENSE TRACKER
            </p>
          </div>
        </div>

        {/* Heading */}
        <h1 className="font-['Space_Grotesk'] max-w-4xl text-5xl font-bold leading-[1.15] text-[#17241C] md:text-6xl lg:text-5xl">
          Track Every{" "}
          <span className="relative inline-block text-[#0F5C46]">
            Rupee
            <svg
              className="absolute -bottom-2 left-0 w-full text-[#B5472B]"
              height="10"
              viewBox="0 0 160 10"
              preserveAspectRatio="none"
            >
              <path
                d="M2,7 C28,2 54,9 80,5 C106,1 132,8 158,4"
                stroke="currentColor"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <br />
          Make Every Decision Count.
        </h1>

        {/* Description */}
        <p className="mt-10 max-w-lg text-lg leading-8 text-[#3E4C44]">
          Record income and expenses, organize transactions, monitor
          spending trends and gain meaningful insights through a clean,
          responsive and intuitive dashboard.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">

  {isLoggedIn ? (

    <Link
      to="/dashboard"
      className="rounded-2xl bg-[#0F5C46] px-10 py-3.5 text-lg font-semibold text-white shadow-xl shadow-[#0F5C46]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B4736]"
    >
      Open Dashboard
    </Link>

  ) : (

    <>
      <Link
        to="/register"
        className="rounded-2xl bg-[#0F5C46] px-8 py-3.5 text-lg font-semibold text-white shadow-xl shadow-[#0F5C46]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B4736]"
      >
        Create Account
      </Link>

      <Link
        to="/login"
        className="rounded-xl border border-[#D3E3D6] bg-white px-10 py-4 text-lg font-semibold text-[#17241C] transition-all duration-300 hover:bg-[#EFF3EF]"
      >
        Login
      </Link>
    </>

  )}

</div>

        {/* Trust line */}
        <div className="mt-8 flex items-center gap-2 text-sm text-[#5B6F63]">
          <ShieldCheck size={16} className="text-[#0F5C46]" />
          No bank linking. No ads. Your data stays on your account.
        </div>
      </div>
    </section>
  );
}

export default Hero;