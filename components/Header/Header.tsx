import React from 'react'
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  return (
    <div>
        <div className='hidden sm:flex items-center  bg-[#F7F7F7] h-[54px] border-b-[1px] border-black pr-16 pl-[62px] justify-between'>
            <div className='flex gap-[16px] h-[30px] w-[426px] items-center'>
                <p className='w-[215px] h-[21px] text-[14px] leading-[21px]'>Phone Number: 956 742 455 678</p>
                <p className='w-[30px] h-0 gap-0 border-t border-[1px] border-[#676767]  rotate-90'></p>
                <p className=' w-[149px] h-[21px] text-[14px] leading-[21px]'>Email:info@ddsgnr.com</p>
                
            </div>
            <div className='w-[132px] h-[24px] flex gap-[12px]'>
                  <FaFacebookF className='w-6 h-6'></FaFacebookF>
                  <FaInstagram className='w-6 h-6'></FaInstagram>
                  <FaTwitter className='w-6 h-6'></FaTwitter>
                  <FaLinkedin className='w-6 h-6'></FaLinkedin>
              </div>
        </div>
        <div className='flex items-center justify-between h-[72px] bg-[#ffffff] sm:bg-[#F7F7F7] mt-[20px] px-6 sm:px-16 border-b-[1px] border-[#676767]'>
        
          <div className='flex w-[130.6px] h-[30.38px] gap-[8.02px]'>
          <Image src="/Frame 1.svg" alt='web logo' width={32.58} height={30.38} />
          <h1 className='ddsgnr-heading w-[90px] h-[30px] text-[25.07px] leading-[30.34px] font-bold'>Ddsgnr</h1>
          </div>
          <IoMdMenu className='sm:hidden'></IoMdMenu>

         
          <div className=' hidden sm:flex bg-[#ffffff] w-[910px] justify-between'>
         <ul className='flex w-[687px] h-[44px] gap-[32px] items-center text-[16px] leading-6 p-[10px]'>
          <li className='border-b-[1px] border-black'>Home</li>
          <li>Courses</li>
          <li>Services</li>
          <li>Achievement</li>
          <li>About Us</li>
          <li>Testimonial</li>
          
         </ul>
         <div className='flex gap-[16px] h-[40px]'>
              <button className='w-[80px] h-[40px] rounded-[5px] border-[1px] border-black px-[20px] py-[8px] '>Login</button>
              <button className='w-[95px] h-[40px] rounded-[5px] border-[1px] border-black px-[20px] py-[8px] bg-black text-white'>Sign Up</button>
            </div>
         </div>
        
        </div>
    </div>
  )
}

export default Header