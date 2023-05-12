import Image from "next/image";
export default function Home() {
  return (
    <>
      <main className="grid md:grid-cols-3 bg-black min-h-screen text-white">
        <MainIntro />
        <section className="md:col-span-2">
          Right
        </section>
      </main>
    </>
  )
}

function MainIntro() {
  return (
    <section className="flex flex-col justify-center items-center relative">
      <div className="flex flex-col justify-center items-center z-10">
        <Image
          src="/images/avatar.webp"
          className="rounded-2xl shadow-2xl"
          width="200"
          height="200"
          alt="avatar"
        />
        <h1 className="mt-3 md:mt-5 font-bold text-3xl md:text-5xl text-center">Samuel Chen</h1>
        <p className="mt-3 md:mt-1 text-gray-300 md:text-md text-center">Melbourne Based Full-Stack Developer</p>
      </div>
      <div className="bg-[#7c79bf] rounded-full w-screen h-72 md:h-screen absolute left-0 -translate-x-[65%] md:-translate-x-[99%] scale-150 z-0"></div>
    </section>
  );
}