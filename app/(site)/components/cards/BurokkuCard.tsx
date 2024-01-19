"use client"
import { motion } from 'framer-motion'
import { cardVariants } from '@/utils/motion-variants'
import Image from 'next/image'
import Link from 'next/link'

function BurokkuCard() {
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={cardVariants}
            viewport={{ once: true }}
            className="relative grid md:grid-cols-2 min-h-[250px] w-full overflow-hidden rounded-3xl border-y border-t-white/50 border-b-white/20 px-10 py-10 md:mx-auto lg:col-span-4 lg:px-10 lg:py-10">
            <div className="absolute z-0 inset-0 bg-gradient-to-b backdrop-blur-2x opacity-70 bg-neutral-950" />
            <div className="z-10 flex flex-col px-2">
                <h3 className="text-3xl font-bold text-gray-100">
                    Burokku 🧊
                </h3>
                <a
                    className="text-gray-500"
                    href="https://www.burokku.one/"
                    target="_blank"
                >
                    burokku.one
                </a>
                <p className="relative z-30 mt-2 max-w-xs text-xl capitalize text-gray-300 lg:mt-4 lg:text-2xl">
                    The all-in-one Web3 Dashboard
                </p>
            </div>
            <Link href={`https://twitter.com/burokku_one`} target="_blank" aria-label="Twitter"
                className="absolute right-6 top-6"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="none"
                    viewBox="0 0 1200 1227"
                    className="h-6 w-6 transition hover:scale-105"
                >
                    <path
                        className="fill-white/20"
                        d="M714.163 519.284L1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026zM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026z"
                    ></path>
                </svg>
            </Link>
            <div className="flex">
                <Image
                    src="/images/cube.png"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-56 mt-4 md:mt-0 mx-auto md:ml-auto relative z-10 rounded-3xl"
                    alt="robotica icon"
                />
            </div>
        </motion.div>
    )
}

export default BurokkuCard
