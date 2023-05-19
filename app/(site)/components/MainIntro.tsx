import Image from 'next/image'

function MainIntro() {
  return (
    <section className="relative flex max-h-screen flex-col items-center justify-center">
      <div className="z-10 flex flex-col items-center justify-center lg:fixed lg:top-1/2 lg:-translate-y-1/2">
        <Image
          src="/images/avatar.webp"
          className="rounded-3xl shadow-2xl"
          width="200"
          height="200"
          alt="avatar"
        />
        <h1 className="mt-3 text-center text-3xl font-bold md:mt-5 md:text-5xl">
          Samuel Chen
        </h1>
        <p className="md:text-md mt-3 text-center text-gray-300 md:mt-1">
          Melbourne Based Full-Stack Developer
        </p>
      </div>
      <div className="absolute left-0 z-0 h-72 max-h-96 w-screen -translate-x-[65%] scale-150 rounded-full bg-[#7c79bf] md:h-screen md:-translate-x-[99%] lg:fixed lg:top-1/2 lg:max-h-none lg:-translate-y-1/2"></div>
    </section>
  )
}

export default MainIntro
