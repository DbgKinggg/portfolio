function BlogsCard() {
    return (
        <div className="relative flex bg-gradient-to-tr from-[#191919] to-black min-h-[250px] w-full flex-col overflow-hidden rounded-3xl border-y border-y-white/50 px-10 py-10 md:mx-auto lg:col-span-2 lg:px-10 lg:py-10">
            <div className="absolute z-10 flex flex-col">
                <h3 className="text-3xl font-bold text-gray-50">Blogs</h3>
                <a
                    className="text-gray-500"
                    href="https://blog.samuelchen.me/"
                    target="_blank"
                >
                    blog.samuelchen.me
                </a>
                <p className="relative z-30 mt-2 max-w-xs text-lg capitalize text-[#c5c7de]/90 lg:mt-4 lg:text-lg">
                    Check out latest blogs 😈
                </p>
            </div>
        </div>
    )
}


export default BlogsCard