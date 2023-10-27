"use client"
import { motion } from 'framer-motion'
import { cardVariants } from '@/utils/motion-variants'
import Image from 'next/image'

function AscendantCard() {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      variants={cardVariants}
      viewport={{ once: true }}
      className="relative z-10 flex min-h-[400px] w-full flex-col items-start overflow-hidden rounded-3xl bg-gradient-to-br from-[#6f4988] to-[#5059b6] px-10 py-10 lg:col-span-4 lg:min-h-[350px] lg:flex-row lg:justify-between lg:px-10 lg:py-10">
      <div>
        <h3 className="text-3xl font-bold text-gray-50">Ascendant 🔮</h3>
        <a
          className="text-gray-300"
          href="https://ascendant.fun/"
          target="_blank"
        >
          ascendant.fun
        </a>
      </div>
      <p className="relative z-30 mt-3 max-w-xs text-xl capitalize text-[#c5c7de]/90 lg:mt-0 lg:text-right lg:text-2xl">
        Web3 On-chain Astrology
      </p>
      <p className="absolute bottom-0 left-4 z-30 text-xs text-white/70 lg:text-base">{`(I didn't design it, my job was to bring this to life!)`}</p>
      <Image
        src="/images/gradient-ball.png"
        width={200}
        height={200}
        alt="gradient ball image"
        className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 lg:left-0 lg:top-1/2 lg:-translate-x-1/2 lg:translate-y-1/3"
      />
      <Image
        src="/images/ascendant-demo.png"
        width="0"
        height="0"
        sizes="100vw"
        alt="Ascendant demo image - ruling star"
        className="absolute bottom-0 right-0 z-20 h-64 w-auto translate-x-48 translate-y-6 rotate-6 rounded-3xl shadow-xl transition-all hover:translate-x-0 hover:translate-y-0 hover:rotate-0 lg:translate-x-1/4"
        loading="eager"
      />
      <Image
        src="/images/ascendant-demo2.png"
        width="0"
        height="0"
        sizes="100vw"
        alt="Ascendant demo image - best token"
        className="absolute bottom-0 right-0 z-10 h-64 w-auto translate-x-20 translate-y-6 rotate-3 rounded-3xl shadow-xl transition-all hover:-translate-x-20 hover:translate-y-0 hover:-rotate-3 lg:translate-x-0 lg:hover:-translate-x-1/2"
        loading="eager"
      />
      <Image
        src="/images/ascendant-demo3.png"
        width="0"
        height="0"
        sizes="100vw"
        alt="Ascendant demo image - good luck charms"
        className="absolute bottom-0 right-0 h-64 w-auto -translate-x-1/3 translate-y-6 -rotate-3 rounded-3xl shadow-xl transition-all hover:-translate-x-2/3 hover:translate-y-0 hover:-rotate-6"
        loading="eager"
      />
    </motion.div>
  )
}

export default AscendantCard
