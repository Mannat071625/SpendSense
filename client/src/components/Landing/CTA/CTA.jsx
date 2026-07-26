import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function CTA() {
  return (
    <section className="bg-[#F7F8F3] py-15">
      <div className="mx-auto max-w-5xl px-8">
        <div className="relative overflow-hidden rounded-[28px] bg-[#0F5C46] px-10 py-20 text-center">
          <div className="absolute inset-0 bg-[linear-gradient(#ffffff12_1px,transparent_1px),linear-gradient(90deg,#ffffff12_1px,transparent_1px)] bg-[size:100%_36px,36px_100%]" />

          <div className="relative">
            <h2 className="font-['Space_Grotesk'] text-4xl font-bold text-white lg:text-5xl">
              Start your ledger today.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-lg leading-8 text-white/80">
              It takes less than a minute to create an account and log
              your first transaction.
            </p>
            <Link
              to="/register"
              className="mt-10 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-[#0F5C46] shadow-lg transition-all hover:-translate-y-0.5"
            >
              Create account
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;