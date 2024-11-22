import React from 'react'
import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
        <div className='flex gap-12 sm:gap-[80px] h-[1411px] sm:h-[684px] py-12 sm:py-20 px-6 sm:px-20 '>
            <div className='h-[1315px] sm:h-[524px] flex flex-col gap-12 sm:gap-[80px] w-[380px] sm:w-[1120px] items-center '>
                <div className='  flex-col sm:flex-row flex justify-normal sm:justify-between h-[261px] sm:h-[82px] gap-6 sm:gap-0 items-center'>
                    <div className=' w-[287px] sm:w-[500px] h-[91px] sm:h-[51px]'>
                        <h1 className='text-[18px] leading-[27px] font-semibold text-center sm:text-start'>Subscribe to our newsletter</h1>
                        <p className='text-[16px] leading-6 text-center sm:text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div className='w-[400px] h-[82px] flex flex-col gap-4'>
                        <div className='h-[146px] sm:h-[48px] flex-col sm:flex-row flex gap-4'>
                            <input type="text" placeholder='Enter your email' className='w-[380px] sm:w-[265px] h-[48px] p-3 rounded-[5px] border-[1px] border-black ' />
                            <button className='w-[380px] sm:w-[119px] h-[48px] rounded-[5px] border-[1px] border-black px-6 py-3 '>Subscribe</button>
                        </div>
                        <p className='text-[12px] leading-[18px] h-[18px]'>By subscribing you agree to with our Privacy Policy</p>

                    </div>
                </div>

                <div className='h-[811px] sm:h-[225px] w-[172px] sm:w-[1120px] flex-col sm:flex-row flex justify-center  gap-8 sm:gap-10  '>
                <div className=' w-[172px] sm:w-[250px] h-[40px] flex gap-[8.2px] items-center '>
                  <Image src="/Frame 1.svg" alt='web logo' width={32.58} height={30.38}/>
                  <h1 className='ddsgnr-heading w-[90px] h-[30px] text-[25.07px] leading-[30.34px] font-bold'>Ddsgnr</h1>
                </div>

                <div className=' w-[172px] sm:w-[250px] h-[225px] flex flex-col gap-1 sm:gap-4 '>
                    <h1 className='text-[16px] leading-6 font-semibold'>Courses</h1>
                    <p className='text-[14px] leading-[21px] py-2'>Business</p>
                    <p className='text-[14px] leading-[21px] py-2'>Development</p>
                    <p className='text-[14px] leading-[21px] py-2'>Technology</p>
                    <p className='text-[14px] leading-[21px] py-2'>Design</p>
                    <p className='text-[14px] leading-[21px] py-2'>Programming</p>
                </div>

                <div className=' w-[172px] sm:w-[250px] h-[225px] flex flex-col gap-1 sm:gap-4'>
                    <h1 className='text-[16px] leading-6 font-semibold'>Resources</h1>
                    <p className='text-[14px] leading-[21px] py-2'>Career</p>
                    <p className='text-[14px] leading-[21px] py-2'>Resume</p>
                    <p className='text-[14px] leading-[21px] py-2'>Learning</p>
                    <p className='text-[14px] leading-[21px] py-2'>Interview Preparation</p>
                    <p className='text-[14px] leading-[21px] py-2'>Jobs</p>
                </div>

                <div className=' w-[172px] sm:w-[250px] h-[225px] flex flex-col gap-1 sm:gap-4'>
                    <h1 className='text-[16px] leading-6 font-semibold'>About Us</h1>
                    <p className='text-[14px] leading-[21px] py-2'>Contact</p>
                    <p className='text-[14px] leading-[21px] py-2'>Help/Support</p>
                    <p className='text-[14px] leading-[21px] py-2'>FAQ</p>
                    <p className='text-[14px] leading-[21px] py-2'>Terms and Conditions</p>
                    <p className='text-[14px] leading-[21px] py-2'>Partners</p>
                </div>
            </div>
                   
                   <div className='w-[380px] sm:w-[1120px] h-[160px] sm:h-[57px] flex gap-8 flex-col'>
                    <div className='w-[380px] sm:w-[1120px] h-[1px] border-[1px] border-black'></div>

                    <div className='w-[380px] sm:w-[1120px] h-[114px] sm:h-[24px] flex-col sm:flex-row flex justify-normal sm:justify-between gap-8 items-center'>
                        <div className='w-[345px] sm:w-[564px] flex-col h-[66px] sm:flex-row flex gap-6 '>
                            <p className='text-[14px] leading-[21px] self-center sm:self-start '>2023 Ddsgnr. All right reserved.</p>
                            <div className='flex gap-6'>
                            <p className='text-[14px] leading-[21px] underline decoration-solid'>Privacy Policy</p>
                            <p className='text-[14px] leading-[21px] underline decoration-solid'>Terms of Service</p>
                            <p className='text-[14px] leading-[21px] underline decoration-solid'> Cookies Settings</p>
                            </div>
                           

                        </div>
                        <div className='w-[132px] h-[50px] sm:h-[24px] flex gap-[12px] items-center  justify-center sm:justify-normal '>
                  <FaFacebookF className='w-6 h-6'></FaFacebookF>
                  <FaInstagram className='w-6 h-6'></FaInstagram>
                  <FaTwitter className='w-6 h-6'></FaTwitter>
                  <FaLinkedin className='w-6 h-6'></FaLinkedin>
              </div>
                    </div>
                   </div>
            </div>

            
        </div>
    </div>
  )
}

export default Footer