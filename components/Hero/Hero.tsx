import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='  flex-wrap sm:flex h-[780px] sm:h-[800px]  overflow-hidden'>
        <div className='w-1/2 flex items-center'>
        <div className='py-16 justify-center sm:flex flex-col items-center gap-6 h-300px pl-6 sm:pl-[80px] pr-6 sm:pr-[60px]'>
          <h1 className='w-[380px] sm:w-[480px] h-[134px] font-bold text-[40px] sm:text-[56px] leading-[48px] sm:leading-[67.2px]'>Learn new skills online with ease</h1>
          <p className=' w-[380px] sm:w-[480px] h-[54px] text-[18px] leading-[27px]'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
          <div className='flex w-[358px] sm:w-[385px] h-[64px] gap-[16px] pt-[16px] self-start'>
            <button className= 'flex w-[178px] h-[48px] gap-2 py-3 px-6 bg-black text-white text-[16px] leading-6 rounded-[5px]'>Start learning now</button>
            <button className='flex w-[164px] h-[48px] gap-2 py-3 px-6 rounded-[5px] border-[1px] border-black text-[16px] leading-6'>Explore Courses</button>
          </div>
        </div>
        </div>

        <div className="w-full sm:w-1/2 flex justify-center">
        <div className="relative w-[428px] h-[450px] sm:w-full sm:h-full">
          <Image
            src="/image.svg"
            alt="model picture"
            layout="fill"
            objectFit="cover"
            className=" object-top"
          />
        </div>
      </div>
       
       
    </div>
  )
}

export default Hero