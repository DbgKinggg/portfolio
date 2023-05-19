import Image from "next/image";

function AscendantCard() {
    return (
        <div className="w-full flex flex-col items-start lg:flex-row lg:justify-between relative z-10 rounded-3xl px-10 py-10 lg:col-span-4 lg:px-10 lg:py-10 min-h-[400px] lg:min-h-[350px] overflow-hidden bg-gradient-to-br from-[#6f4988] to-[#5059b6]">
            <div>
                <h3 className="text-gray-50 text-3xl font-bold">Ascendant</h3>
                <a className="text-gray-300" href='https://ascendant.fun/' target='_blank'>ascendant.fun</a>
            </div>
            <p className="text-xl mt-3 lg:mt-0 lg:text-2xl lg:text-right relative z-30 max-w-xs capitalize text-[#c5c7de]/90">
                Web3 On-chain Astrology
            </p>
            <p className="absolute z-30 bottom-2 left-2 text-white/70">{`(I didn't design it, my job was to bring this to life!)`}</p>
            <Image
                src="/images/gradient-ball.png"
                width={200}
                height={200}
                alt="gradient ball image"
                className="absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2"
            />
            <Image
                src="/images/ascendant-demo.png"
                width="0"
                height="0"
                sizes="100vw"
                alt="Ascendant demo image - ruling star"
                className="absolute z-20 transition-all right-0 bottom-0 translate-x-48 lg:translate-x-1/4 translate-y-6 rotate-6 hover:translate-y-0 hover:translate-x-0 hover:rotate-0 h-64 w-auto rounded-3xl shadow-xl"
            />
            <Image
                src="/images/ascendant-demo2.png"
                width="0"
                height="0"
                sizes="100vw"
                alt="Ascendant demo image - best token"
                className="absolute z-10 transition-all right-0 translate-x-20 lg:translate-x-0 bottom-0 translate-y-6 rotate-3 hover:translate-y-0 hover:-translate-x-20 lg:hover:-translate-x-1/2 hover:-rotate-3 h-64 w-auto rounded-3xl shadow-xl"
            />
            <Image
                src="/images/ascendant-demo3.png"
                width="0"
                height="0"
                sizes="100vw"
                alt="Ascendant demo image - good luck charms"
                className="absolute transition-all right-0 -translate-x-1/3 bottom-0 translate-y-6 rotate-1 hover:translate-y-0 hover:-translate-x-2/3 h-64 w-auto rounded-3xl shadow-xl hover:-rotate-6"
            />
        </div>
    );
}

export default AscendantCard;