import Image from 'next/image'

function L2SummerCard() {
    return (
        <div className="relative grid md:grid-cols-2 min-h-[250px] w-full overflow-hidden rounded-3xl border-y border-y-white/50 px-10 py-10 md:mx-auto lg:col-span-4 lg:px-10 lg:py-10">
            <div className="absolute z-0 inset-0 bg-gradient-to-b backdrop-blur-2x opacity-70"
                style={{
                    background: 'linear-gradient(to right bottom,rgb(255 255 255/10%),rgb(0 0 0/50%)), #1a53f4',
                }}
            />
            <div className="z-10 flex flex-col px-2">
                <h3 className="text-3xl font-bold text-gray-100">
                    Layer 2 Summer ☀️
                </h3>
                <a
                    className="text-gray-300"
                    href="https://www.l2summer.com/"
                    target="_blank"
                >
                    l2summer.com
                </a>
                <p className="relative z-30 mt-2 max-w-xs text-xl capitalize text-gray-300 lg:mt-4 lg:text-2xl">
                    Unveiling Ethereum Layer 2 Solutions
                </p>
            </div>
            <div className="flex">
                <Image
                    src="/images/l2-summer-sample.png"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-56 mt-4 md:mt-0 mx-auto md:ml-auto relative shadow-2xl z-10 rounded-3xl"
                    alt="robotica icon"
                />
            </div>
        </div>
    )
}

export default L2SummerCard
