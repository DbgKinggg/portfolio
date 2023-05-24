import MainIntro from './(site)/components/MainIntro'
import MainPanel from './(site)/components/MainPanel'

export default function Home() {
  return (
    <>
      <main className="grid min-h-screen overflow-hidden bg-black pb-20 pt-32 text-white md:pb-6 md:pt-0 lg:grid-cols-3">
        <MainIntro />
        <MainPanel />
      </main>
    </>
  )
}
