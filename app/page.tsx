import { Cardgroup } from './components/Cardgroup'
import HeroCards from './components/HeroCards'
import Introduction from './components/Introduction'
import HeroSection from './components/heroSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HeroCards />
      <Introduction />
      <Cardgroup />
      <div className="h-[100vh]"></div>
    </main>
  )
}
