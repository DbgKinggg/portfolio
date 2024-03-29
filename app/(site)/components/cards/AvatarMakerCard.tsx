"use client"
import { motion } from 'framer-motion'
import { cardVariants } from '@/utils/motion-variants'
import Link from 'next/link'
import Image from 'next/image'

function AvatarMakerCard() {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      variants={cardVariants}
      viewport={{ once: true }}
      className="highlight-border relative z-10 min-h-[300px] w-full overflow-hidden rounded-3xl px-10 py-10 lg:col-span-3 lg:px-10 lg:py-10"
      style={{
        background:
          'conic-gradient(at right bottom, rgb(17, 94, 89), rgb(124, 58, 237), rgb(38, 38, 38))',
      }}
    >
      <div className="relative z-10 flex justify-between">
        <div>
          <h3 className="relative z-10 text-3xl font-bold text-gray-50">
            Avatar Maker 😉
          </h3>
          <a
            className="text-gray-400 lg:text-lg"
            href="https://gohango.art/maker"
            target="_blank"
          >
            gohango.art/maker
          </a>
        </div>
        <Link href={`https://github.com/DbgKinggg/gohan-go`} target="_blank" aria-label="Github">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="github"
            className="h-10 w-10"
          >
            <path
              fill="white"
              d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"
            ></path>
          </svg>
        </Link>
      </div>
      <Image
        className="absolute bottom-0 left-1/2 z-0 h-auto w-4/5 max-w-sm -translate-x-1/2 rounded-t-3xl transition lg:translate-y-6 lg:hover:translate-y-0"
        src="/images/gohango-nft-maker.png"
        width="0"
        height="0"
        sizes="100vw"
        alt="GohanGo!! image"
        loading='eager'
      />
    </motion.div>
  )
}

export default AvatarMakerCard
