import GradientBlob from './GradientBlob'
import IntroCard from './cards/IntroCard'
import SocialWrapperCards from './cards/SocialWrapperCards'
import GohanGoCard from './cards/GohanGoCard'
import AvatarMakerCard from './cards/AvatarMakerCard'
import TwitterToolsCard from './cards/TwitterToolsCard'
import AscendantCard from './cards/AscendantCard'
import RoboticaCard from './cards/RoboticaCard'
import SkillsCard from './cards/SkillsCard'
import LanguagesCard from './cards/LanguagesCard'
import Footer from './Footer'

function MainPanel() {
  return (
    <section className="relative z-10 mx-5 mt-10 pb-16 max-w-5xl md:mt-20 md:pb-16 lg:col-span-2 lg:mt-32 lg:flex lg:flex-col lg:items-center lg:justify-center">
      <div className="relative mt-4 grid gap-y-4 lg:mt-0 lg:grid-cols-6 lg:gap-x-5 lg:gap-y-4">
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
      <Footer />
    </section>
  )
}

export default MainPanel
