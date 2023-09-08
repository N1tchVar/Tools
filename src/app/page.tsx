import Hero from '@/components/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Hero />
      <input
          type='text'
          placeholder='Search'
          className='w-full bg-transparent border border-white/10 py-2 px-2 rounded-md text-sm text-white focus:outline-none focus:ring-1 focus:ring-white/20'
        />
    </div>
  )
}
