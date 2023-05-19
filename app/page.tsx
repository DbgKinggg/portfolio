import MainIntro from './(site)/components/MainIntro'
import GradientBlob from './(site)/components/GradientBlob'
import IntroCard from './(site)/components/cards/IntroCard'
import SocialWrapperCards from './(site)/components/cards/SocialWrapperCards'
import GohanGoCard from './(site)/components/cards/GohanGoCard'
import AvatarMakerCard from './(site)/components/cards/AvatarMakerCard'
import TwitterToolsCard from './(site)/components/cards/TwitterToolsCard'
import AscendantCard from './(site)/components/cards/AscendantCard'
import RoboticaCard from './(site)/components/cards/RoboticaCard'
import SkillsCard from './(site)/components/cards/SkillsCard'
import LanguagesCard from './(site)/components/cards/LanguagesCard'

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

function MainPanel() {
  return (
    <section className="relative z-10 mx-5 mt-10 max-w-5xl md:mb-10 md:mt-20 lg:col-span-2 lg:mt-32 lg:flex lg:items-center lg:justify-center">
      <div className="relative mt-4 grid gap-y-3 lg:mt-0 lg:grid-cols-6 lg:gap-x-4 lg:gap-y-4">
        <GradientBlob />
        <IntroCard />
        <SocialWrapperCards />
        <GohanGoCard />
        <AvatarMakerCard />
        <TwitterToolsCard />
        <AscendantCard />
        <RoboticaCard />
        <SkillsCard />
        <LanguagesCard />
      </div>
    </section>
  )
}
