import { IconBulb, IconBrandGithub } from '@tabler/icons-react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='fixed left-0 right-0 top-0 z-40 bg-black/50 shadow-sm saturate-100 backdrop-blur-[10px]'>
      <div className='mx-auto flex h-[60px] max-w-4xl items-center justify-between px-8'>
        <Link href='/' aria-label='Home' title='Home'>
          <IconBulb size={30}/>
        </Link>
        <div className='flex items-center justify-center gap-6'>
          <a
            href='https://github.com/N1tchVar/tools'
            target='_blank'
          >
            <IconBrandGithub />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header