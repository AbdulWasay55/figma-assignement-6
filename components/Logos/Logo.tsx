import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div>
        <div className='items-center sm: flex flex-col sm:flex-row h-[239.34px] sm:h-[228px] bg-[#F7F7F7] gap-6 sm:gap-[64px] py-12 sm:py-[80px] px-6 sm:px-16'>
            <div className='hidden sm:block w-[320px] h-[68px] font-bold text-[24px] leading-[33.6px]'>Trusted by 2000+ companies worldwide.</div>
            <h1 className='w-[327px] h-[54px] text-[16px] leading-[27px] font-bold sm:hidden'>Trusted by the world&apos;s best companies [social proof to build credibility]</h1>
            <div className='w-[400px] sm:w-[880px] h-[56px]  px-[8.74px]'>
                <Image src='Logos.svg' alt='brand logos' width={880} height={56} />

            </div>
        </div>
    </div>
  )
}

export default Logo