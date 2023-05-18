function IntroCard() {
    return (
        <div
            className="w-full relative z-10 rounded-3xl border-8 border-white/10 px-10 py-10 lg:col-span-4 lg:px-20 lg:py-20 backdrop-blur-lg"
            style={{
                background: 'radial-gradient(71.86% 50% at 50% 0%,rgba(168,127,255,.04) 0%,rgba(168,127,255,0) 100%),rgba(4,1,21,.1)',
                transition: '.45s cubic-bezier(.6,.6,0,1) border-color'
            }}
        >
            <h2 className="text-2xl font-semibold text-white/80 md:text-5xl">
                Learn Something New Everyday
            </h2>
            <p className="text-md mt-2 text-gray-500 md:mt-8 md:max-w-md md:text-lg">
                {`I love both Frontend and Backend things, and I'm a big fan of blockchain technology.`}
            </p>
        </div>
    )
}

export default IntroCard;