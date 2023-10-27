"use client"
import { motion } from 'framer-motion'
import { cardVariants } from '@/utils/motion-variants'
import Image from 'next/image'

function RoboticaCard() {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      variants={cardVariants}
      viewport={{ once: true }}
      className="relative flex min-h-[250px] w-full flex-col overflow-hidden rounded-3xl border-y border-y-white/50 px-10 py-10 md:mx-auto lg:col-span-6 lg:px-10 lg:py-10">
      <div className="absolute inset-0 bg-[#247587]/20 backdrop-blur-2xl" />
      <div className="absolute z-10 flex flex-col">
        <h3 className="text-3xl font-bold text-gray-50">CAFFÈ ROBOTICA ☕</h3>
        <a
          className="text-gray-500"
          href="https://robotica.coffee/"
          target="_blank"
        >
          robotica.coffee
        </a>
        <p className="relative z-30 mt-2 max-w-xs text-xl capitalize text-[#c5c7de]/90 lg:mt-4 lg:text-2xl">
          24x7 Robotic Barista
        </p>
      </div>
      <Image
        src="/images/robotica-illustration.svg"
        width="1300"
        height="450"
        className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2"
        alt="illustration"
      />
      <Image
        src="/images/robotica-logo.png"
        width="0"
        height="0"
        sizes="100vw"
        className="absolute bottom-0 right-0 h-32 w-32 translate-y-1/4 opacity-30 lg:h-56 lg:w-56"
        alt="robotica icon"
      />
    </motion.div>
  )
}

export default RoboticaCard
