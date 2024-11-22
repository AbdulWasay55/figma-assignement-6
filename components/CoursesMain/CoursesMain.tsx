import React from 'react'
import Image from 'next/image'

const CoursesMain = () => {
  return (
    <div className='px-6 sm:px-16 py-12 sm:py-28 flex flex-col gap-12 sm:gap-[60px] items-center justify-center h-[2135px] sm:h-[1742px]'>
        {/* courses heading */}
      <div className='flex flex-col gap-4 w-[249px] sm:w-[768px] h-[93px] sm:h-[118px] items-center '>
        <h1 className='text-[32px] sm:text-[56px] leading-[41.6px] sm:leading-[67.2px] font-bold'>Courses</h1>
        <p className='text-[18px] leading-[27px] text-center'>Your Ultimate Guide to learning</p>
      </div>
      {/* courses cards */}
      <div className='flex flex-col gap-[64px] w-[380px] sm:w-[1152] h-[1893px] sm:h-[1340px] justify-normal sm:justify-center items-center '>
        <div className='flex self-center w-[336px] h-[40px] '>
            <h1 className='w-[80px] text-[16px] leading-6 px-4 py-2 border-b border-[#676767]'>Popular</h1>
            <h1 className='w-[130px] text-[16px] leading-6 px-4 py-2'>Recommended</h1>
            <h1 className='w-[120px] text-[16px] leading-6 px-4 py-2'>Best  Price</h1>
        </div>
         <div className='h-[1132px] flex flex-col gap-[64px]'>
          <div className='flex-col sm:flex-row flex h-[1690px] sm:h-[534px] gap-8 items-center'>
            <div className='flex h-[558px] sm:h-[534px] w-[380px] sm:w-[416px] gap-6 flex-col bg-[#F7F7F7] rounded-[5px]'>
               <Image src="/courses/com.svg" alt='uiux image' width={416} height={300} />
               <div className='flex flex-col h-[210px] pb-6 px-4 gap-6'>
              <div className='flex flex-col w-[348px] sm:w-[382px]  gap-2 '>
                {/* rating  section*/}
                <div className='flex h-6 justify-between'>
                <h1 className='text-[14px] leading-[21px] font-semibold'>Design</h1>
                <Image src='/courses/Star.svg' alt='star image' width={44} height={24} />
                </div>
                {/* heading */}
                <h1 className='text-[24px] leading-[33.6px] font-bold' >UX/UI Design 201</h1>
                <p className='text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
              </div>
              {/* button div */}
             <div className='w-[382px] h-[40px] flex gap-4'>
              <button className='w-[112px] h-[40px] flex gap-2 py-2 px-5 border-[1px] border-black rounded-[5px] text-[14px] leading-6'>Enroll Now</button>
              <h1 className='w-[77px] h-[40px] flex gap-2 py-2 px-5 font-medium text-[16px] leading-6'>$400</h1>
             </div>
            </div>
            </div>
            <div className='flex h-[558px] sm:h-[534px] w-[380px] sm:w-[416px] gap-6 flex-col bg-[#F7F7F7]  rounded-[5px]'>
            <Image src="/courses/pic.svg" alt='programing image' width={416} height={300} />
            <div className='flex flex-col h-[210px] pb-6 px-4 gap-6'>
              <div className='flex flex-col w-[348px] sm:w-[382px]  gap-2 '>
                {/* rating  section*/}
                <div className='flex h-6 justify-between'>
                <h1 className='text-[14px] leading-[21px] font-semibold'>Programmimg</h1>
                <Image src='/courses/Star.svg' alt='star image' width={44} height={24} />
                </div>
                {/* heading */}
                <h1 className='text-[24px] leading-[33.6px] font-bold' >Introduction to Python</h1>
                <p className='text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
              </div>
              {/* button div */}
             <div className='w-[382px] h-[40px] flex gap-4'>
              <button className='w-[112px] h-[40px] flex gap-2 py-2 px-5 border-[1px] border-black rounded-[5px] text-[14px] leading-6'>Enroll Now</button>
              <h1 className='w-[77px] h-[40px] flex gap-2 py-2 px-5 font-medium text-[16px] leading-6'>$400</h1>
             </div>
            </div>
            </div>
            <div className='flex h-[558px] sm:h-[534px] w-[380px] sm:w-[416px] gap-6 flex-col bg-[#F7F7F7]  rounded-[5px]'>
            <Image src="/courses/man.svg" alt='business image' width={416} height={300} />
            <div className='flex flex-col h-[210px] pb-6 px-4 gap-6'>
              <div className='flex flex-col w-[348px] sm:w-[382px]  gap-2 '>
                {/* rating  section*/}
                <div className='flex h-6 justify-between'>
                <h1 className='text-[14px] leading-[21px] font-semibold'>Business</h1>
                <Image src='/courses/Star.svg' alt='star image' width={44} height={24} />
                </div>
                {/* heading */}
                <h1 className='text-[24px] leading-[33.6px] font-bold' >Data Analysis for Beginners</h1>
                <p className='text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
              </div>
              {/* button div */}
             <div className='w-[382px] h-[40px] flex gap-4'>
              <button className='w-[112px] h-[40px] flex gap-2 py-2 px-5 border-[1px] border-black rounded-[5px] text-[14px] leading-6'>Enroll Now</button>
              <h1 className='w-[77px] h-[40px] flex gap-2 py-2 px-5 font-medium text-[16px] leading-6'>$400</h1>
             </div>
            </div>
            </div>
            <button className=' sm:hidden w-[152px] h-[40px] py-2 px-4 border-[1px] border-black rounded-[5px] text-[16px] leading-6'>View All Courses</button>
          </div>
          <div className='hidden sm:flex h-[534px] gap-8'>
          <div className='flex h-[534px] w-[416px] gap-6 flex-col bg-[#F7F7F7]  rounded-[5px]'>
          <Image src="/courses/paint.svg" alt='Art Specialization' width={416} height={300} />
            <div className='flex flex-col h-[210px] pb-6 px-4 gap-6'>
              <div className='flex flex-col w-[382px]  gap-2 '>
                {/* rating  section*/}
                <div className='flex h-6 justify-between'>
                <h1 className='text-[14px] leading-[21px] font-semibold'>Art</h1>
                <Image src='/courses/Star.svg' alt='star image' width={44} height={24} />
                </div>
                {/* heading */}
                <h1 className='text-[24px] leading-[33.6px] font-bold' >Art Specialization</h1>
                <p className='text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
              </div>
              {/* button div */}
             <div className='w-[382px] h-[40px] flex gap-4'>
              <button className='w-[112px] h-[40px] flex gap-2 py-2 px-5 border-[1px] border-black rounded-[5px] text-[14px] leading-6'>Enroll Now</button>
              <h1 className='w-[77px] h-[40px] flex gap-2 py-2 px-5 font-medium text-[16px] leading-6'>$400</h1>
             </div>
            </div>
          </div>
            <div className='flex h-[534px] w-[416px] gap-6 flex-col bg-[#F7F7F7]  rounded-[5px]'>
            <Image src="/courses/sta.svg" alt='Rule of Law' width={416} height={300} />
            <div className='flex flex-col h-[210px] pb-6 px-4 gap-6'>
              <div className='flex flex-col w-[382px]  gap-2 '>
                {/* rating  section*/}
                <div className='flex h-6 justify-between'>
                <h1 className='text-[14px] leading-[21px] font-semibold'>Law</h1>
                <Image src='/courses/Star.svg' alt='star image' width={44} height={24} />
                </div>
                {/* heading */}
                <h1 className='text-[24px] leading-[33.6px] font-bold' >Rule of Law</h1>
                <p className='text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
              </div>
              {/* button div */}
             <div className='w-[382px] h-[40px] flex gap-4'>
              <button className='w-[112px] h-[40px] flex gap-2 py-2 px-5 border-[1px] border-black rounded-[5px] text-[14px] leading-6'>Enroll Now</button>
              <h1 className='w-[77px] h-[40px] flex gap-2 py-2 px-5 font-medium text-[16px] leading-6'>$400</h1>
             </div>
            </div>
            </div>
            <div className='flex h-[534px] w-[416px] gap-6 flex-col bg-[#F7F7F7]  rounded-[5px]'>
            <Image src="/courses/ball.svg" alt='Introduction to webflow' width={416} height={300} />
            <div className='flex flex-col h-[210px] pb-6 px-4 gap-6'>
              <div className='flex flex-col w-[382px]  gap-2 '>
                {/* rating  section*/}
                <div className='flex h-6 justify-between'>
                <h1 className='text-[14px] leading-[21px] font-semibold'>Tech</h1>
                <Image src='/courses/Star.svg' alt='star image' width={44} height={24} />
                </div>
                {/* heading */}
                <h1 className='text-[24px] leading-[33.6px] font-bold' >Introduction to webflow</h1>
                <p className='text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
              </div>
              {/* button div */}
             <div className='w-[382px] h-[40px] flex gap-4'>
              <button className='w-[112px] h-[40px] flex gap-2 py-2 px-5 border-[1px] border-black rounded-[5px] text-[14px] leading-6'>Enroll Now</button>
              <h1 className='w-[77px] h-[40px] flex gap-2 py-2 px-5 font-medium text-[16px] leading-6'>$400</h1>
             </div>
            </div>
            </div>
          </div>

         </div>
         {/* button  */}
         <button className='hidden sm:block w-[152px] h-[40px] py-2 px-4 border-[1px] border-black rounded-[5px] text-[16px] leading-6'>View All Courses</button>
      </div>
    </div>
   
  )
}

export default CoursesMain