'use client'

import React, { useState } from 'react'
import Container from '@/components/Container'
import Title from '@/components/Title'

const WordCounter = () => {
    const [ value, setValue ] = React.useState('');
    const words = value.match(/\S+/g)?.length || 0
    const characters = value.length || 0
    const charsWithoutSpace = value.replaceAll(' ', '').length || 0
    const pars =
        value.split('\n').filter((paragraph) => paragraph !== '').length || 0

  return (
    <Container className='flex max-w-5xl flex-col items-center justify-center'>
        <Title title='Word Counter' />
        <div className='my-12 grid grid-cols-2 w-full gap-2 sm:grid-cols-4'>
            <div className='h-24 w-full rounded-lg border border-white/10 p-3'>
                <div className='font-bold text-2xl'>{words}</div>
                <div className='text-sm font-bold text-white/60'>words</div>
            </div>
            <div className='h-24 w-full rounded-lg border border-white/10 p-3'>
                <div className='font-bold text-2xl'>{characters}</div>
                <div className='text-sm font-bold text-white/60'>characters</div>
            </div>
            <div className='h-24 w-full rounded-lg border border-white/10 p-3'>
                <div className='font-bold text-2xl'>{charsWithoutSpace}</div>
                <div className='text-sm font-bold text-white/60'>characters without space</div>
            </div>
            <div className='h-24 w-full rounded-lg border border-white/10 p-3'>
                <div className='font-bold text-2xl'>{pars}</div>
                <div className='text-sm font-bold text-white/60'>paragraphs</div>
            </div>
        </div>
        <textarea placeholder='Type text here...' 
        className='bg-transparent px-2 py-2 h-20 font-sm rounded-lg w-full border border-white/10 focus:outline-none focus:ring-1 focus:ring-white/20'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ></textarea>
    </Container>
  )
}

export default WordCounter