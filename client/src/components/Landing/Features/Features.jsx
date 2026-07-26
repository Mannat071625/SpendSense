import {
  ReceiptText,
  BarChart3,
  Tags,
  History,
  Target,
  UserRound,
} from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: ReceiptText,
    title: "Add Expenses",
    description:
      "Record income and expenses with amount, category and notes in just a few clicks.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description:
      "Visualize spending trends through interactive charts and monthly summaries.",
  },
  {
    icon: Tags,
    title: "Categories",
    description:
      "Organize every transaction into categories for better tracking.",
  },
  {
    icon: History,
    title: "Transaction History",
    description:
      "Search, filter and review every financial record from one place.",
  },
  {
    icon: Target,
    title: "Budget Tracking",
    description:
      "Set monthly budgets and monitor your progress before overspending.",
  },
  {
    icon: UserRound,
    title: "User Profile",
    description:
      "Manage your account information and personalize the application.",
  },
];

function Features() {
  return (
    <section className="relative bg-[#F2F5F0] pt-12 py-15">
      <div className="mx-auto max-w-6xl px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 font-['IBM_Plex_Mono'] text-md font-extrabold uppercase tracking-[0.3em] text-[#0F5C46]">
            Features
          </p>
          <h2 className="font-['Space_Grotesk'] text-4xl font-bold text-[#17241C]">
            Everything a ledger should do
          </h2>
          <p className="mx-auto mt-5 text-lg leading-8 text-[#3E4C44]">
            One dashboard to record, organize and understand your
            financial activity &mdash; nothing more, nothing less.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;