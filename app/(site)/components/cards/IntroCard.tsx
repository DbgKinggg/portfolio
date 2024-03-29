"use client"
import { motion } from 'framer-motion'
import { cardVariants } from '@/utils/motion-variants'

function IntroCard() {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      variants={cardVariants}
      viewport={{ once: true }}
      className="relative z-10 w-full rounded-3xl border-8 border-white/10 px-10 py-10 backdrop-blur-lg lg:col-span-4 lg:px-20 lg:py-20"
      style={{
        background:
          'radial-gradient(71.86% 50% at 50% 0%,rgba(168,127,255,.04) 0%,rgba(168,127,255,0) 100%),rgba(4,1,21,.1)',
        transition: '.45s cubic-bezier(.6,.6,0,1) border-color',
      }}
    >
      <h2 className="text-2xl font-semibold text-white/80 md:text-5xl">
        Talk is cheap, show me the code
      </h2>
      <p className="text-md mt-2 text-gray-500 md:mt-8 md:max-w-md md:text-lg">
        {`I do a little bit of Frontend, a little bit of Backend and a little bit of web3 things!`}
      </p>
    </motion.div>
  )
}

export default IntroCard
