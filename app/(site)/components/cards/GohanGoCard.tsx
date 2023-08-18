import Link from 'next/link'
import Image from 'next/image'

function GohanGoCard() {
  return (
    <div className="relative z-10 flex min-h-[350px] w-full flex-col justify-between overflow-hidden rounded-3xl bg-[#fdb7c1] px-10 py-10 shadow-md shadow-[#fdb7c1] lg:col-span-3 lg:px-10 lg:py-10">
      <div className="relative z-10 flex justify-between">
        <div>
          <h3 className="text-3xl font-bold text-gray-50">GohanGo!! 🐵</h3>
          <a
            className="text-white/60 lg:text-lg"
            href="https://gohango.art/"
            target="_blank"
          >
            gohango.art
          </a>
        </div>
        <Link href={`https://twitter.com/GohanGoNFT`} target="_blank" aria-label="Twitter">
          <svg
            className="h-10 w-10 transition group-hover:scale-105"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            id="twitter"
          >
            <path
              fill="#ca929a"
              d="M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z"
            ></path>
          </svg>
        </Link>
      </div>
      <p className="relative z-10 max-w-xs text-xl capitalize text-white/95 mix-blend-lighten lg:text-2xl">
        An NFT collection of monkey Gohan on Ethereum
      </p>
      <Image
        className="absolute bottom-0 right-0 z-0"
        src="/images/gohango.jpeg"
        width={250}
        height={250}
        alt="GohanGo!! image"
      />
    </div>
  )
}

export default GohanGoCard
