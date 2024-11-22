import React from 'react'
import Image from 'next/image'

const Customer = () => {
  return (
    <div>
        <div className='flex flex-col gap-12 sm:gap-[80px] h-[681.89px] sm:h-[830.89px] py-12 sm:py-28 px-6 sm:px-16 bg-[#F7F7F7]'>
            <div className='w-[361px] sm:w-[560px] h-[120px] sm:h-[109px] flex flex-col gap-6'>
                <h1 className=' hidden sm:flex text-[48px] leading-[57.6px] font-bold'>Customer testimonials</h1>
                <h1 className='text-[32px] leading-[41.6px] font-bold sm:hidden'>What Our Student Say</h1>
                <p className='text-[18px] leading-[27px] text-center sm:text-start'>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </div>
            <div className='h-[417.89px] flex gap-12'>
                <div className='h-[321.89px] flex gap-8'>
                    <div className='w-[363.67px] h-[321.89px] border-[1px] border-black p-8 flex flex-col gap-6' >
                        <Image src="/customer/5-star.svg" alt='5 Star' width={116} height={18.89} />
                        <p className='w-[300px] h-[120px] text-[18px] leading-[27px]'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
                        <div className='w-[254px] h-[56px] flex gap-5'>
                            <Image src="/team/person-3.svg" alt='Person 1' width={56} height={56} className='rounded-full' />
                            <div className='flex flex-col w-[178px] h-[48px]'>
                                <h1 className='text-[16px] leading-6 font-semibold'>James Nduku</h1>
                                <p className='text-[16px] leading-6 ' >Software Developer</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* person 2 */}
                <div className='h-[321.89px] hidden sm:flex gap-8'>
                    <div className='w-[363.67px] h-[321.89px] border-[1px] border-black p-8 flex flex-col gap-6' >
                        <Image src="/customer/5-star.svg" alt='5 Star' width={116} height={18.89} />
                        <p className='w-[300px] h-[120px] text-[18px] leading-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
                        <div className='w-[254px] h-[56px] flex gap-5'>
                            <Image src="/team/person-1.svg" alt='Person 2' width={56} height={56} className='rounded-full' />
                            <div className='flex flex-col w-[178px] h-[48px]'>
                                <h1 className='text-[16px] leading-6 font-semibold'>Erick Kipkemboi</h1>
                                <p className='text-[16px] leading-6 ' >Scrum Master</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* person 3 */}
                <div className='h-[321.89px] hidden sm:flex gap-8'>
                    <div className='w-[363.67px] h-[321.89px] border-[1px] border-black p-8 flex flex-col gap-6' >
                        <Image src="/customer/5-star.svg" alt='5 Star' width={116} height={18.89} />
                        <p className='w-[300px] h-[120px] text-[18px] leading-[27px]'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus mi quis viverra ornare.</p>
                        <div className='w-[254px] h-[56px] flex gap-5'>
                            <Image src="/team/person-6.svg" alt='Person 3' width={56} height={56} className='rounded-full' />
                            <div className='flex flex-col w-[178px] h-[48px]'>
                                <h1 className='text-[16px] leading-6 font-semibold'>Stephen Kerubo</h1>
                                <p className='text-[16px] leading-6 ' >UI/UX Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
                      
                      
            </div>
            <div className='h-[48px] flex justify-between'>
                <div className='flex gap-2 w-[72px]'>
                        <Image src="/customer/dot2.svg" alt='Dot' width={8} height={8}  />
                        <Image src="/customer/Dot.svg" alt='Dot' width={8} height={8} />
                        <Image src="/customer/Dot.svg" alt='Dot' width={8} height={8} />
                        <Image src="/customer/Dot.svg" alt='Dot' width={8} height={8} />
                        <Image src="/customer/Dot.svg" alt='Dot' width={8} height={8} />
                        </div>
                        <Image src="/customer/sli.svg" alt='Slider Button' width={111} height={48} />
                      </div>
        </div>
    </div>
  )
}

export default Customer