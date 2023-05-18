import Image from "next/image";

function TwitterToolsCard() {
    return (
        <div className="w-full relative z-10 rounded-3xl min-h-[200px] px-10 py-10 lg:col-span-2 lg:px-10 lg:py-10 bg-[#808df8]"
        >
            <h3 className="text-gray-50 text-3xl font-bold">Twitter Tools</h3>
            <a className="text-gray-300" href='https://app.gohango.art/' target='_blank'>app.gohango.art</a>
            <Image
                className='absolute bottom-0 left-1/2 -translate-x-1/2 max-w-sm w-4/5 h-auto z-0 rounded-t-3xl'
                src="/images/twitter-tool.png"
                width="0"
                height="0"
                sizes="100vw"
                alt="GohanGo!! image"
            />
        </div>
    );
}

export default TwitterToolsCard;