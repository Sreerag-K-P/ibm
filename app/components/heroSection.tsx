import Image from 'next/image'
import HeroImage from '@/public/images/leadspace_expanded.png'

const heroSection = () => {
  return (
    <section>
      <div>
        <div>Multiply the power of AI with watsonx</div>
        <div>
          <div>
            IBM’s next-generation AI and data platform is now available for free
            trial
          </div>
          <button type="button">Take a tour</button>
        </div>
      </div>
      <div>
        <Image src={HeroImage} alt="hero image" className="object-cover" />
      </div>
      <div></div>
    </section>
  )
}

export default heroSection
