function SummaryCard({
  title,
  amount,
  icon: Icon,
  color,
  change,
}) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-[#DCE6DD]
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-[#5B6F63]">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#17241C]">
            {amount}
          </h2>

        </div>

        <div
          className="flex h-14 w-14 items-center justify-center rounded-xl"
          style={{ backgroundColor: color }}
        >
          <Icon className="text-white" size={26} />
        </div>

      </div>

      <p className="mt-5 text-sm text-green-600">
        {change}
      </p>

    </div>
  );
}

export default SummaryCard;