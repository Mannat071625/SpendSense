import { IndianRupee } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0F5C46] py-8">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-8 font-['IBM_Plex_Mono'] text-xs text-[white]">
        <IndianRupee size={13} strokeWidth={2.4} className="text-[white]" />
        <span>SpendSense</span>
        <span className="text-[white]">&bull;</span>
        <span>Smart Expense Tracker</span>
        <span className="text-[white]">&bull;</span>
        <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;