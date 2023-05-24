function LanguagesCard() {
  const languages = [
    {
      name: 'English',
      textColor: 'text-white/70 hover:text-white/90',
    },
    {
      name: 'Cantonese',
      textColor: 'text-white/60 hover:text-white/90',
    },
    {
      name: 'Mandarin',
      textColor: 'text-white/50 hover:text-white/90',
    },
  ];

  return (
    <div className="relative z-10 w-full overflow-hidden rounded-3xl bg-gradient-to-tr from-[#dce35b] via-[#45b649] via-30% to-[#dce35b] px-10 py-10 lg:col-span-2 lg:px-6 lg:py-10">
      <h3 className="text-3xl font-bold">I speak</h3>
      <div className="mt-8 pb-12 flex flex-col space-y-2 h-full justify-evenly">
        {
          languages.map(language => (
            <div
              className={`text-3xl font-bold uppercase tracking-widest lg:text-2xl xl:text-3xl cursor-default transition-all transform hover:-translate-y-2 ${language.textColor}`}
              key={language.name}
            >
              {language.name}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default LanguagesCard
