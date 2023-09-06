import { IconBulb } from '@tabler/icons-react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-black/80 shadow-sm saturate-100 backdrop-blur-[10px]">
        <div className="mx-auto flex h-[60px] max-w-5xl items-center justify-between px-8">
            <Link href="/"><IconBulb/></Link>
        </div>
    </header>
  )
}

export default Header