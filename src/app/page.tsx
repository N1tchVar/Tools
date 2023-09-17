'use client'

import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { site, Tool } from '@/config/site'

type CardProps = {
  tools: Tool[]
  title: string
}

export default function Home() {
  const [value, setValue] = React.useState('')

  const filter = (tool: Tool): boolean =>
  tool.label.toLowerCase().includes(value.toLowerCase()) ||
  tool.keywords.some((keyword) =>
    keyword.toLowerCase().includes(value.toLowerCase())
  )

  return (
    <div>
      <Hero />
      <input
          type='text'
          placeholder='Search'
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          className='w-full bg-transparent border border-white/10 py-2 px-2 rounded-md text-sm text-white focus:outline-none focus:ring-1 focus:ring-white/20'
        />
        <div className='flex items-center py-8'>
          {value
              ? site.tools
                  .filter((t) => t.links.some((tool) => filter(tool)))
                  .map((t) => {
                    const { label, links } = t
                    const filtered = links.filter((tool) => filter(tool))

                    return <Card key={label} tools={filtered} title={label} />
                     
                  })
                : site.tools.map((tool) => {
                  const { label, links } = tool
                  return <Card key={label} tools={links} title={label} />
                })}
        </div>
        <Footer/>
    </div>
    
  )
}


const Card = (props: CardProps) => {
  const { tools, title } = props

  return (
    <div className='w-full rounded-lg border p-4 border-white/10'>
      <div>{title}</div>
      <div className='mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3'>
        {tools.map((tool) => (
          <Item key={tool.label} {...tool} />
        ))}
      </div>
    </div>
  )
}

const Item = (props: Tool) => {
  const { color, icon, label, link } = props
  const Icon = icon

  return (
    <Link
      href={link}
      className='flex flex-col items-center justify-center rounded-lg bg-zinc-900 p-4 text-center transition-colors duration-300 hover:bg-zinc-900/80'
    >
      <Icon color={color} size={32} />
      <div className='mt-1.5'>{label}</div>
    </Link>
  )
}