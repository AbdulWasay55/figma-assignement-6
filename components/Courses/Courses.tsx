import React from 'react'
import Image from 'next/image'
const Courses = () => {
  return (
    <div>
        {/* main div it will contain all the courses */}
        <div className='py-12 sm: px-6 sm:px-0 h-[950px] sm:h-[1049px] flex flex-col gap-12 sm:gap-[80px] items-center'>
            {/* course heading and title */}
            <div className='w-[385px] sm:w-[768px] h-[80px] sm:h-[109px] flex flex-col gap-[35px] mx-16 my-28 self-center items-center justify-center  '>
                <h2 className= 'w-[385px] sm:w-[786px] h-[84px] sm:h-[58px] font-bold text-[32px] sm:text-[48px] leading-[41.6px] sm:leading-[57.6px] text-center'>Explore Courses By Category</h2>
                <p className='w-[385px] sm:w-[786px] h-[54px] sm:h-[27px] text-[16px] sm:text-[18px] leading-[27px]'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
            </div>
            {/* courses section  */}
            <div className='h-[556px] sm:h-[636px] flex flex-col gap-[64px]'>
                {/* course 1 */}
                <div className='flex flex-col sm:flex-row h-[556px] sm:h-[132px] gap-6 items-center '>
                    <div className=' w-[410.67px] flex h-[132px] p-4 gap-8 bg-[#F7F7F7] rounded-[5px] items-center'>
                        <div className='w-[100px] h-[100px] bg-white p-8 flex gap-[10px]'>
                            <Image src="/pen-tool-2.svg" alt='pen logo' width={32} height={32} />
                        </div>
                        <div className='w-[246.67px] h-[57px] flex flex-col gap-6] '>
                            <h1 className='w-[246.67px] h-[30px] font-semibold text-[20px] leading-[30px]'>Design & Development</h1>
                            <p className='w-[246.67px] h-[27px] text-[18px] leading-[27px]' >50+ Courses Available</p>
                        </div>
                    </div>
                    <div  className='w-[410.67px] flex h-[132px] p-4 gap-8 bg-[#F7F7F7] rounded-[5px] items-center'>
                    <div className='w-[100px] h-[100px] bg-white p-8 flex gap-[10px]'>
                            <Image src="/volume-high.svg" alt='marketing' width={32} height={32} />
                        </div>
                        <div className='w-[246.67px] h-[57px] flex flex-col gap-6] '>
                            <h1 className='w-[246.67px] h-[30px] font-semibold text-[20px] leading-[30px]'>Marketing</h1>
                            <p className='w-[246.67px] h-[27px] text-[18px] leading-[27px]' >50+ Courses Available</p>
                        </div>
                    </div>
                    <div  className='w-[410.67px] flex h-[132px] p-4 gap-8 bg-[#F7F7F7] rounded-[5px] items-center'>
                    <div className='w-[100px] h-[100px] bg-white p-8 flex gap-[10px]'>
                            <Image src="/group.svg" alt='developement' width={32} height={32} />
                        </div>
                        <div className='w-[246.67px] h-[57px] flex flex-col gap-6] '>
                            <h1 className='w-[246.67px] h-[30px] font-semibold text-[20px] leading-[30px]'>Development</h1>
                            <p className='w-[246.67px] h-[27px] text-[18px] leading-[27px]' >50+ Courses Available</p>
                        </div>
                    </div>
                    <button className=' sm:hidden w-[170px] h-[48px] border-[1px] border-black rounded-[5px] px-6 py-3 flex gap-2 text-[16px] leading-6'>View All Courses</button>
                </div>
                {/* course 2 */}
                <div className=' hidden sm:flex h-[132px] gap-6'>
                    <div className='w-[410.67px] flex h-[132px] p-4 gap-8 bg-[#F7F7F7] rounded-[5px]'><div className='w-[100px] h-[100px] bg-white p-8 flex gap-[10px]'>
                            <Image src="/microphone.svg" alt='communication' width={32} height={32} />
                        </div>
                        <div className='w-[246.67px] h-[57px] flex flex-col gap-6] '>
                            <h1 className='w-[246.67px] h-[30px] font-semibold text-[20px] leading-[30px]'>Communication</h1>
                            <p className='w-[246.67px] h-[27px] text-[18px] leading-[27px]' >50+ Courses Available</p>
                        </div>
                        </div>
                    <div  className='w-[410.67px] flex h-[132px] p-4 gap-8 bg-[#F7F7F7] rounded-[5px] items-center'>
                    <div className='w-[100px] h-[100px] bg-white p-8 flex gap-[10px]'>
                            <Image src="/link.svg" alt='Digital Marketing' width={32} height={32} />
                        </div>
                        <div className='w-[246.67px] h-[57px] flex flex-col gap-6] '>
                            <h1 className='w-[246.67px] h-[30px] font-semibold text-[20px] leading-[30px]'>Digital Marketing</h1>
                            <p className='w-[246.67px] h-[27px] text-[18px] leading-[27px]' >50+ Courses Available</p>
                        </div>
                    </div>
                    <div  className='w-[410.67px] flex h-[132px] p-4 gap-8 bg-[#F7F7F7] rounded-[5px] items-center'>
                    <div className='w-[100px] h-[100px] bg-white p-8 flex gap-[10px]'>
                            <Image src="/arrow-2.svg" alt='Self Development' width={32} height={32} />
                        </div>
                        <div className='w-[246.67px] h-[57px] flex flex-col gap-6] '>
                            <h1 className='w-[246.67px] h-[30px] font-semibold text-[20px] leading-[30px]'>Self Development</h1>
                            <p className='w-[246.67px] h-[27px] text-[18px] leading-[27px]' >50+ Courses Available</p>
                        </div>
                    </div>
                </div>
                {/* course 3 */}
                <div className='hidden sm:flex h-[132px] gap-6'>
                    <div className='w-[410.67px] flex h-[132px] p-4 gap-8 bg-[#F7F7F7] rounded-[5px] items-center'>
                    <div className='w-[100px] h-[100px] bg-white p-8 flex gap-[10px]'>
                            <Image src="/briefcase.svg" alt='Business' width={32} height={32} />
                        </div>
                        <div className='w-[246.67px] h-[57px] flex flex-col gap-6] '>
                            <h1 className='w-[246.67px] h-[30px] font-semibold text-[20px] leading-[30px]'>Business</h1>
                            <p className='w-[246.67px] h-[27px] text-[18px] leading-[27px]' >50+ Courses Available</p>
                        </div>
                    </div>
                    <div  className='w-[410.67px] flex h-[132px] p-4 gap-8 bg-[#F7F7F7] rounded-[5px] items-center'><div className='w-[100px] h-[100px] bg-white p-8 flex gap-[10px]'>
                            <Image src="/book.svg" alt='Finance' width={32} height={32} />
                        </div>
                        <div className='w-[246.67px] h-[57px] flex flex-col gap-6] '>
                            <h1 className='w-[246.67px] h-[30px] font-semibold text-[20px] leading-[30px]'>Finance</h1>
                            <p className='w-[246.67px] h-[27px] text-[18px] leading-[27px]' >50+ Courses Available</p>
                        </div>
                        </div>
                    <div  className='w-[410.67px] flex h-[132px] p-4 gap-8 bg-[#F7F7F7] rounded-[5px] items-center'>
                    <div className='w-[100px] h-[100px] bg-white p-8 flex gap-[10px]'>
                            <Image src="/book-2.svg" alt='Consulting' width={32} height={32} />
                        </div>
                        <div className='w-[246.67px] h-[57px] flex flex-col gap-6] '>
                            <h1 className='w-[246.67px] h-[30px] font-semibold text-[20px] leading-[30px]'>Consulting</h1>
                            <p className='w-[246.67px] h-[27px] text-[18px] leading-[27px]' >50+ Courses Available</p>
                        </div>
                    </div>
                </div>
            </div>
                <button className=' w-[170px] h-[48px] border-[1px] border-black rounded-[5px] px-6 py-3 hidden sm:flex gap-2 text-[16px] leading-6'>View All Courses</button>
        </div>
    </div>
  )
}

export default Courses