function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="group relative rounded-2xl border border-[#D3E3D6] bg-white/80 backdrop-blur-sm p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#0F5C46]/40 hover:shadow-[0_20px_45px_-20px_rgba(15,92,70,0.35)]">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0F5C46]/10 text-[#0F5C46] transition-colors duration-300 group-hover:bg-[#0F5C46] group-hover:text-white">
        <Icon size={22} strokeWidth={2} />
      </div>

      <h3 className="font-['Space_Grotesk'] mb-2.5 text-xl font-semibold text-[#17241C]">
        {title}
      </h3>

      <p className="leading-7 text-[#3E4C44]">{description}</p>
    </div>
  );
}

export default FeatureCard;