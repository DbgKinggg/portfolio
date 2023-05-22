function LanguagesCard() {
  return (
    <div className="relative z-10 w-full overflow-hidden rounded-3xl bg-gradient-to-tr from-[#dce35b] via-[#45b649] via-30% to-[#dce35b] px-10 py-10 lg:col-span-2 lg:px-6 lg:py-10">
      <h3 className="text-3xl font-bold">I speak</h3>
      <div className="mt-8 flex flex-col space-y-2">
        <div className="text-3xl font-bold uppercase tracking-widest text-white/90 lg:text-2xl xl:text-3xl cursor-pointer transition-all transform hover:-translate-y-2">
          English
        </div>
        <div className="text-3xl font-bold uppercase tracking-widest text-white/80 lg:text-2xl xl:text-3xl cursor-pointer transition-all transform hover:-translate-y-2">
          Cantonese
        </div>
        <div className="text-3xl font-bold uppercase tracking-widest text-white/70 lg:text-2xl xl:text-3xl cursor-pointer transition-all transform hover:-translate-y-2">
          Mandarin
        </div>
      </div>
    </div>
  )
}

export default LanguagesCard
