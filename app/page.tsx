import Image from 'next/image'

export default function Home() {
  return (
    <>
      <main className="grid md:grid-cols-3 bg-black min-h-screen text-white">
        <section className="">
          <h1>Samuel Chen</h1>
        </section>
        <section className="md:col-span-2">
          Right
        </section>
      </main>
    </>
  )
}