import Image from 'next/image'
import React from 'react'

type Props = {}

const Portfolio = (props: Props) => {
  return (
    <>
    {/* navbar */}
    <div className='flex justify-between mx-auto px-20 h-20 items-center bg-slate-100'>
        {/* logo section */}
        <div className=''>
            <h3 className='text-black border border-rounded '>Logo</h3>
        </div>
        {/* right section */}
        <div className='flex gap-10 '>
            <div className='text-black'>login</div>
            <div className='text-black'>who we are </div>
            <div className='text-black'>what we do</div>
            <div className='text-black'>Task to expect</div>
        </div>
    </div>

    <main className='flex flex-col gap-20 p-10  text-center'>
        <h1 className='text-black text-6xl underline'>GRAND</h1>
        <h1 className='text-black text-6xl underline'>TOGETHER</h1>
        <Image className='w-[300px]' src={'/vercel.svg'} alt={'this is for me'} width={50} height={50}/>
    </main>
    </>
  )
}

export default Portfolio