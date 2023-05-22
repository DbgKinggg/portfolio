function LanguagesCard() {
  return (
    <div
      className="relative z-10 w-full rounded-3xl px-10 py-10 lg:col-span-2 lg:px-6 lg:py-10 bg-gradient-to-tr from-[#dce35b] via-[#45b649] via-30% to-[#dce35b] overflow-hidden"
    >
      <h3 className="text-3xl font-bold">I speak</h3>
      <div className="mt-8 flex flex-col space-y-2">
        <div className="text-3xl lg:text-2xl xl:text-3xl uppercase font-bold tracking-widest text-white/90">English</div>
        <div className="text-3xl lg:text-2xl xl:text-3xl uppercase font-bold tracking-widest text-white/80">Cantonese</div>
        <div className="text-3xl lg:text-2xl xl:text-3xl uppercase font-bold tracking-widest text-white/70">Mandarin</div>
      </div>
    </div>
  )
}

export default LanguagesCard
