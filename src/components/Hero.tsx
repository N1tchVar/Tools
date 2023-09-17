import Link from "next/link"


const Hero = () => {
  return (
    <div className="my-4 space-y-8">
        <h1 className="text-3xl font-extrabold">
            Online{' '}
            <span className='bg-gradient-to-r from-violet-700 to-fuchsia-700 bg-clip-text text-transparent'>
                Tools Set
            </span>{' '}
        </h1>
        <p className="text-md text-gray-500/80">Here's some online free tools which is provided by {' '}
        <Link href="https://github.com/N1tchVar" target='_blank' className="font-bold text-violet-700">@N1tch</Link> {''}
        this isn't any serious app, it's just a side project. which I've made for fun ✨
        </p>
        <div className="flex gap-4">
            <button className="bg-white text-black py-[10px] px-4 text-sm font-medium rounded-lg">
                Get started
            </button>
            <Link href="https://github.com/N1tchVar/Tools" target='_blank'>
                <button className="border border-white/10 text-sm py-[10px] px-4 rounded-lg hover:bg-white/10 transition duration-300">
                    Source code
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Hero