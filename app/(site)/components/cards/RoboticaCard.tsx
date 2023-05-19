import Image from "next/image"

function RoboticaCard() {
  return (
    <div className="relative w-full rounded-3xl px-10 py-10 lg:col-span-6 lg:px-10 lg:py-10 border-t overflow-hidden min-h-[250px] border-t-primary-200/20 md:mx-auto flex flex-col">
      <div className="absolute inset-0 bg-[#247587]/20 backdrop-blur-2xl" />
      <div className="absolute z-10 flex flex-col">
        <h3 className="text-3xl font-bold text-gray-50">CAFFÈ ROBOTICA</h3>
        <a className="text-gray-500" href="https://robotica.coffee/" target="_blank">
          robotica.coffee
        </a>
        <p className="relative z-30 mt-2 lg:mt-4 max-w-xs text-xl capitalize text-[#c5c7de]/90 lg:text-2xl">
          24x7 Robotic Barista
        </p>
      </div>
      <Image
        src="/images/robotica-illustration.svg"
        width="1300"
        height="450"
        className="absolute z-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
        alt="illustration"
      />
      <Image
        src="/images/robotica-logo.png"
        width="0"
        height="0"
        sizes="100vw"
        className="absolute right-0 w-32 h-32 lg:w-56 lg:h-56 bottom-0 opacity-30"
        alt="robotica icon"
      />
    </div>
  )
}

export default RoboticaCard
