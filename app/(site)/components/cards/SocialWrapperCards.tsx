import Link from 'next/link'

function SocialWrapperCards() {
  return (
    <div className="grid grid-cols-2 gap-x-1 lg:col-span-2 lg:gap-y-2">
      <TwitterCard />
      <ContactCard />
    </div>
  )
}

function TwitterCard() {
  return (
    <Link
      href="https://twitter.com/DbgKinggg"
      target="_blank"
      className="group flex h-auto w-full flex-col rounded-3xl border-2 border-gray-400 bg-[#8ecdf8] px-4 py-4 lg:col-span-2"
    >
      <svg
        className="h-10 w-10 transition group-hover:scale-105 lg:h-14 lg:w-14"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        id="twitter"
      >
        <path
          fill="#03A9F4"
          d="M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z"
        ></path>
      </svg>
      <label className="mt-8 cursor-pointer text-lg text-gray-900 md:mt-auto lg:text-2xl">
        @Dbgkinggg
      </label>
    </Link>
  )
}

function ContactCard() {
  return (
    <div className="group flex h-auto w-full flex-col rounded-3xl border-2 border-gray-800 bg-[#171a22]/90 px-4 py-4 lg:col-span-2">
      <div className="flex items-center space-x-2">
        <Link href="https://github.com/DbgKinggg" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-10 w-10 lg:h-14 lg:w-14 transition-all hover:scale-105"
          >
            <path
              fill="white"
              d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"
            ></path>
          </svg>
        </Link>
        <Link href="mailto:samuelyimingchen@gmail.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 122.88 122.88"
            className="h-9 w-9 lg:h-12 lg:w-12 transition-all hover:scale-105"
          >
            <path
              fill="white"
              d="M61.44 0A61.44 61.44 0 110 61.44 61.44 61.44 0 0161.44 0zM30.73 38L62 63.47 91.91 38zm-2 42.89L51 58.55 28.71 40.39v40.48zm24.7-20.34l-22.95 23h61.73l-21.94-23L63 66.71a1.57 1.57 0 01-2 0l-7.59-6.19zm19.24-2l21.5 22.54v-40.9l-21.5 18.32z"
            ></path>
          </svg>
        </Link>
      </div>
      <label className="mt-8 text-lg text-gray-300 md:mt-auto lg:text-2xl">
        Contact Me
      </label>
    </div>
  )
}

export default SocialWrapperCards
