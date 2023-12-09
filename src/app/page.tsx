import About from '@/components/about'
import Blog from '@/components/blog'
import Conditions from '@/components/conditions'
import Contact from '@/components/contact'
import Faqs from '@/components/faqs'
import Feature from '@/components/feature'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Map from '@/components/map'
import Navbar from '@/components/navbar'
import Reviews from '@/components/reviews'
import Support from '@/components/support'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='flex flex-col items-center min-h-screen '>
        <section className='container'>
          <Hero />
        </section>
        {/* <section className='container'>
          <About />
        </section> */}
        <section className='container' >
          <Blog />
        </section>
        <section className='container' >
          <Feature />
        </section>
        <section className='container' >
          <Conditions />
        </section>
        <section className='container'>
          <Support />
        </section>
        <section className='container'>
          <Reviews />
        </section>  
        <section className='container'>
            <Contact />
        </section>
        <section className='container'>
          <Faqs />
        </section>
        <section className='container'>
          <Map />
        </section>
      </main>
      <Footer />
    </>
  )
}
