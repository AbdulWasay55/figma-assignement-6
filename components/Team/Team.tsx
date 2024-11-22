import React from 'react'
import Image from 'next/image'
import { FaLinkedin, FaTwitter, FaDribbble } from "react-icons/fa";

const Team = () => {
    return (
        <div>
            <div className='flex flex-col h-[1075px] sm:h-[895px] gap-12 sm:gap-[80px] py-12 sm:py-28 px-6 sm:px-16 bg-[#F7F7F7] justify-center items-center '>
                {/* heading section */}
                <div className='flex flex-col gap-4  w-[363px] sm:w-[768px] h-[120px] sm:h-[109px]  items-center' >
                    <h1 className='text-[32px] sm:text-[48px] leading-[41.6px] sm:leading-[57.6px] font-bold'>Our team</h1>
                    <p className='text-[18px] leading-[27px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
                {/* team image section  */}
                <div className='flex flex-col h-[723px] sm:h-[610px] gap-[64px] '>
                    <div className='flex-col sm:flex-row flex h-[273px] gap-12'>
                        <div className='flex flex-col gap-6 w-[394.67px] h-[209px] sm:h-[273px] items-center'>
                            <Image src="/team/person-1.svg" alt='team-member-image' width={80} height={80} />
                            <div className=' flex flex-col h-[121px] gap-4 items-center '>
                                <h1 className='text-[20px] leading-[30px] font-semibold'>James Nduku</h1>
                                <p className='text-[18px] leading-[27px]'>Marketing Coordinator</p>
                            </div>

                            <div className='flex w-[100px] h-6 gap-[14px]'>
                                <FaLinkedin className='w-6 h-6'></FaLinkedin>
                                <FaTwitter className='w-6 h-6'></FaTwitter>
                                <FaDribbble className='w-6 h-6'></FaDribbble>
                            </div>
                        </div>
                        <div className='flex flex-col gap-6 w-[394.67px] h-[209px] sm:h-[273px] items-center'>
                            <Image src="/team/person-2.svg" alt='team-member-image' width={80} height={80} />
                            <div className=' flex flex-col h-[121px] gap-4 items-center '>
                                <h1 className='text-[20px] leading-[30px] font-semibold'>Joseph Munyambu</h1>
                                <p className='text-[18px] leading-[27px]'>Nursing Assistant</p>
                            </div>

                            <div className='flex w-[100px] h-6 gap-[14px]'>
                                <FaLinkedin className='w-6 h-6'></FaLinkedin>
                                <FaTwitter className='w-6 h-6'></FaTwitter>
                                <FaDribbble className='w-6 h-6'></FaDribbble>
                            </div>
                        </div>
                        <div className='flex flex-col gap-6 w-[394.67px] h-[209px] sm:h-[273px] items-center'>
                            <Image src="/team/person-3.svg" alt='team-member-image' width={80} height={80} />
                            <div className=' flex flex-col h-[121px] gap-4 items-center '>
                                <h1 className='text-[20px] leading-[30px] font-semibold'>Joseph Ngumbau</h1>
                                <p className='text-[18px] leading-[27px]'>Medical Assistant</p>
                            </div>

                            <div className='flex w-[100px] h-6 gap-[14px]'>
                                <FaLinkedin className='w-6 h-6'></FaLinkedin>
                                <FaTwitter className='w-6 h-6'></FaTwitter>
                                <FaDribbble className='w-6 h-6'></FaDribbble>
                            </div>
                        </div>
                    </div>

                    

                    <div className='hidden sm:flex h-[273px] gap-12'>
                        <div className='flex flex-col gap-6 w-[394.67px] h-[273px] items-center'>
                            <Image src="/team/person-4.svg" alt='team-member-image' width={80} height={80} />
                            <div className=' flex flex-col h-[121px] gap-4 items-center '>
                                <h1 className='text-[20px] leading-[30px] font-semibold'>Erick Kipkemboi</h1>
                                <p className='text-[18px] leading-[27px]'>Web Designer</p>
                            </div>
                            <div className='flex w-[100px] h-6 gap-[14px]'>
                                <FaLinkedin className='w-6 h-6'></FaLinkedin>
                                <FaTwitter className='w-6 h-6'></FaTwitter>
                                <FaDribbble className='w-6 h-6'></FaDribbble>
                            </div>

                        </div>
                        <div className='flex flex-col gap-6 w-[394.67px] h-[273px] items-center'>
                            <Image src="/team/person-5.svg" alt='team-member-image' width={80} height={80} />
                            <div className=' flex flex-col h-[121px] gap-4 items-center '>
                                <h1 className='text-[20px] leading-[30px] font-semibold'>Stephen Kerubo</h1>
                                <p className='text-[18px] leading-[27px]'>President of Sales</p>
                            </div>
                            <div className='flex w-[100px] h-6 gap-[14px]'>
                                <FaLinkedin className='w-6 h-6'></FaLinkedin>
                                <FaTwitter className='w-6 h-6'></FaTwitter>
                                <FaDribbble className='w-6 h-6'></FaDribbble>
                            </div>

                        </div>
                        <div className='flex flex-col gap-6 w-[394.67px] h-[273px] items-center'>
                            <Image src="/team/person-6.svg" alt='team-member-image' width={80} height={80} />
                            <div className=' flex flex-col h-[121px] gap-4 items-center '>
                                <h1 className='text-[20px] leading-[30px] font-semibold'>John Leboo</h1>
                                <p className='text-[18px] leading-[27px]'>Dog Trainer</p>
                            </div>
                            <div className='flex w-[100px] h-6 gap-[14px]'>
                                <FaLinkedin className='w-6 h-6'></FaLinkedin>
                                <FaTwitter className='w-6 h-6'></FaTwitter>
                                <FaDribbble className='w-6 h-6'></FaDribbble>
                            </div>

                        </div>
                    </div>



                </div>
                <button className='w-[89px] h-[40px] py-2 px-4 rounded-[5px] border-[1px] border-black text-[14px] leading-6 sm:hidden'>View All </button>

            </div>
        </div>
    )
}

export default Team