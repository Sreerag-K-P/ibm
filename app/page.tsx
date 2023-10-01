import CardList from './components/CardList'
import { Cardgroup } from './components/Cardgroup'
import FeatureStory from './components/FeatureStory'
import HeroCards from './components/HeroCards'
import Introduction from './components/Introduction'
import MeatOurGlobal from './components/MeatOurGlobal'
import HeroSection from './components/heroSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HeroCards />
      <Introduction />
      <Cardgroup />
      <FeatureStory />
      <MeatOurGlobal />
      <CardList />
      <div className="h-[100vh]"></div>
    </main>
  )
}
