import {
  Wallet,
  TrendingDown,
  PiggyBank,
  Receipt,
} from "lucide-react";

import DashboardLayout from "../../layouts/DashboardLayout";
import SummaryCard from "../../components/Dashboard/SummaryCard";

const cards = [
  {
    title: "Total Balance",
    amount: "₹52,430",
    icon: Wallet,
    color: "#0F5C46",
    change: "+12% from last month",
  },
  {
    title: "Total Expenses",
    amount: "₹18,950",
    icon: TrendingDown,
    color: "#D97706",
    change: "+4% this month",
  },
  {
    title: "Total Savings",
    amount: "₹33,480",
    icon: PiggyBank,
    color: "#2563EB",
    change: "+18% this month",
  },
  {
    title: "Transactions",
    amount: "154",
    icon: Receipt,
    color: "#7C3AED",
    change: "22 added this week",
  },
];

function Dashboard() {
  return (
    <DashboardLayout>

      {/* Heading */}

      <section>

        <h1 className="font-['Space_Grotesk'] text-4xl font-bold text-[#17241C]">
          Welcome Back 👋
        </h1>

        <p className="mt-2 text-[#5B6F63]">
          Here's an overview of your finances.
        </p>

      </section>

      {/* Summary Cards */}

      <section
        className="
          mt-8
          grid
          gap-6
          sm:grid-cols-2
          xl:grid-cols-4
        "
      >
        {cards.map((card) => (
          <SummaryCard
            key={card.title}
            {...card}
          />
        ))}
      </section>

    </DashboardLayout>
  );
}

export default Dashboard;