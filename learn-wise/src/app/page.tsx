import Image from 'next/image'
import Hero from '@/components/home/Hero'
import Donate from '@/components/home/Donate'
import Features from '@/components/home/Features'
import Programs from '@/components/home/Programs'
import Testimonials from '@/components/home/Testimonials'

export default function Home() {
  return (
    <main>
      <Hero />
      <Donate />
      <Features />
      <Programs />
      <Testimonials />


     
    </main>
  )
}
