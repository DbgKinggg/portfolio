import Image from 'next/image'

function TwitterToolsCard() {
  return (
    <div className="relative z-10 min-h-[260px] w-full rounded-3xl bg-[#808df8] px-10 py-10 lg:col-span-2 lg:px-10 lg:py-10">
      <h3 className="text-3xl font-bold text-gray-50">Twitter Tools ✖️</h3>
      <a
        className="text-gray-300"
        href="https://app.gohango.art/"
        target="_blank"
      >
        app.gohango.art
      </a>
      <p className="mt-6 text-white/80">
        Manage Twitter Accounts and Tasks Automation
      </p>
      <Image
        className="absolute bottom-0 left-1/2 z-0 h-auto w-4/5 max-w-sm -translate-x-1/2 rounded-t-3xl"
        src="/images/twitter-tool.png"
        width="0"
        height="0"
        sizes="100vw"
        alt="GohanGo!! image"
      />
    </div>
  )
}

export default TwitterToolsCard
