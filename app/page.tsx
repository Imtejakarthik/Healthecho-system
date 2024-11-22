import { Header, Hero, Features, Testimonial, HowItWorks, CallToAction, Footer } from '@/components'


export default function LandingPage() {
  return (
      <div className="min-h-screen flex flex-col">
          <Header />
        <main className="flex-grow">
          <Hero />
          <Features />
          <HowItWorks />
          <Testimonial />
          <CallToAction />
        </main>
        <Footer />
      </div>
  )
}

