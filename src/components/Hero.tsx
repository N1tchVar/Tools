import Link from "next/link"


const Hero = () => {
  return (
    <div className="my-12 space-y-5">
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
            <button className="bg-white text-black p-2 rounded-md">
                Get Started
            </button>
        </div>
    </div>
  )
}

export default Hero