import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main className="grid min-h-screen overflow-hidden bg-black text-white lg:grid-cols-3 pt-32 pb-20 md:pt-0 md:pb-6">
        <MainIntro />
        <MainPanel />
      </main>
    </>
  )
}

function MainIntro() {
  return (
    <section className="relative flex flex-col items-center justify-center">
      <div className="z-10 flex flex-col items-center justify-center">
        <Image
          src="/images/avatar.webp"
          className="rounded-2xl shadow-2xl"
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
      <div className="absolute left-0 z-0 h-72 w-screen -translate-x-[65%] scale-150 rounded-full bg-[#7c79bf] md:h-screen md:-translate-x-[99%]"></div>
    </section>
  )
}

function GradientBlob() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={200}
      height={200}
      fill="none"
      className="w-auto md:h-full absolute right-0 md:left-0 top-2 -z-10"
      preserveAspectRatio="xMidYMid slice"
    >
      <circle
        cx={100}
        cy={100}
        r={50}
        fill="#8E80FF"
        filter="url(#a)"
        style={{
          mixBlendMode: "normal",
        }}
      />
      <defs>
        <filter
          id="a"
          width="150%"
          height="150%"
          x="-25%"
          y="-25%"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feGaussianBlur result="fx_foregroundBlur" stdDeviation={24} />
          <feTurbulence
            baseFrequency={5}
            numOctaves={6}
            result="noise"
            stitchTiles="stitch"
            type="fractalNoise"
          />
          <feDisplacementMap
            in="fx_foregroundBlur"
            in2="noise"
            result="displacement"
            scale={50}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}

function MainPanel() {
  return (
    <section className="relative mt-10 md:mt-20 lg:mt-32 md:mb-10 z-10 mx-5 lg:col-span-2 lg:flex lg:items-center lg:justify-center">
      <div className="grid gap-y-3 mt-4 lg:mt-0 lg:grid-cols-6 lg:gap-x-4 lg:gap-y-4 relative">
        <GradientBlob />
        <IntroCard />
        <TwitterCard />
        <GohanGoCard />
        <GohanGoCardDemo />
        <AscendantInfo />
        <AscendantCard />
        <RoboticaCard />
        <SkillsCard />
        <LanguagesCard />
      </div>
    </section>
  )
}

function IntroCard() {
  return (
    <div
      className="w-full relative z-10 rounded-2xl border-8 border-white/10 px-10 py-10 lg:col-span-4 lg:px-20 lg:py-20 backdrop-blur-lg"
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

function TwitterCard() {
  return (
    <Link
      href="https://twitter.com/DbgKinggg"
      target="_blank"
      className="group flex h-auto w-full flex-col rounded-2xl border-2 border-gray-400 bg-[#8ecdf8] px-4 py-4 lg:col-span-2"
    >
      <svg
        className="h-14 w-14 transition group-hover:scale-105"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        id="twitter"
      >
        <path
          fill="#03A9F4"
          d="M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z"
        ></path>
      </svg>
      <label className="mt-8 cursor-pointer text-2xl text-gray-900 md:mt-auto">
        @Dbgkinggg
      </label>
    </Link>
  )
}

function GohanGoCard() {
  return (
    <div className="w-full relative z-10 rounded-2xl border-8 border-white/10 px-10 py-10 lg:col-span-3 lg:px-10 lg:py-10">
      <h3 className="text-gray-50 text-3xl font-bold">GohanGo!!</h3>
      <a className="text-gray-500" href='https://gohango.art/' target='_blank'>gohango.art</a>
    </div>
  );
}

function GohanGoCardDemo() {
  return (
    <div className="w-full relative z-10 rounded-2xl border-8 border-white/10 px-10 py-10 lg:col-span-3 lg:px-10 lg:py-10">
      <h3 className="text-gray-50 text-3xl font-bold">NFT Maker</h3>
    </div>
  );
}

function AscendantInfo() {
  return (
    <div className="w-full relative z-10 rounded-2xl border-8 border-white/10 px-10 py-10 lg:col-span-2 lg:px-10 lg:py-10">
      <h3 className="text-gray-50 text-3xl font-bold">Ascendant</h3>
      <a className="text-gray-500" href='https://gohango.art/' target='_blank'>ascendant.fun</a>
    </div>
  );
}

function AscendantCard() {
  return (
    <div className="w-full relative z-10 rounded-2xl border-8 border-white/10 px-10 py-10 lg:col-span-4 lg:px-10 lg:py-10">
      <h3 className="text-gray-50 text-3xl font-bold">YoYoYo</h3>
    </div>
  );
}

function RoboticaCard() {
  return (
    <div className="w-full relative z-10 rounded-2xl border-8 border-white/10 px-10 py-10 lg:col-span-6 lg:px-10 lg:py-10">
      <h3 className="text-gray-50 text-3xl font-bold">Robotica</h3>
      <a className="text-gray-500" href='https://gohango.art/' target='_blank'>robotica.coffee</a>
    </div>
  );
}

function SkillsCard() {
  return (
    <div className="w-full relative z-10 rounded-2xl border-8 border-white/10 px-10 py-10 lg:col-span-4 lg:px-10 lg:py-10">
      <h3 className="text-gray-50 text-3xl font-bold">Skills</h3>
    </div>
  );
}

function LanguagesCard() {
  return (
    <div className="w-full relative z-10 rounded-2xl border-8 border-white/10 px-10 py-10 lg:col-span-2 lg:px-10 lg:py-10">
      <h3 className="text-gray-50 text-3xl font-bold">I speak</h3>
    </div>
  );
}