import React from 'react';

const AchivementSection = () => {
  return (
    <div className='flex flex-col h-[500px] sm:h-[488px] py-12 sm:py-28 px-6 sm:px-16 gap-10 sm:gap-[80px]  items-center'>
      <div className='h-[355px] sm:[264px]'>
      <div className='w-[380px] sm:w-[1152px] h-[147px] sm:h-[136px] mx-auto flex flex-col gap-4 sm:gap-6 justify-center items-center'>
        <h1 className='text-[32px] sm:text-[48px] font-bold leading-[41.6px] sm:leading-[57.6px] '>Our Achievements</h1>
        <p className='text-[18px] leading-[27px]  text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
          Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
      </div>
      </div>
      <div className='w-[380px] sm:w-[1256px] h-[176] sm:h-[96px] flex-col sm:flex-row flex gap-6'>
        <div className='flex gap-4 sm:gap-[24px]'>
        <div className='w-[296px] h-[80px] flex flex-col gap-2 items-center'>
          <h1 className='text-[40px] font-bold leading-[48px]'>+200</h1>
          <p className='text-[16px] leading-6 '>Courses</p>
        </div>
        <div className='w-[296px] h-[80px] flex flex-col gap-2 items-center'>
          <h1 className='text-[40px] font-bold leading-[48px]'>50K</h1>
          <p className='text-[16px] leading-6 '>Mentors</p>
        </div>

        </div>

        <div className='flex gap-4 sm:gap-[24px]'>
        <div className='w-[296px] h-[80px] flex flex-col gap-2 items-center'>
        
          <h1 className='text-[40px] font-bold leading-[48px]'>370k</h1>
          <p className='text-[16px] leading-6 '>Students</p>

        </div>
        <div className='w-[296px] h-[80px] flex flex-col gap-2 items-center'>
      
          <h1 className='text-[40px] font-bold leading-[48px]'>100+</h1>
          <p className='text-[16px] leading-6 '>Recognition</p>
        
        </div>
        </div>

      </div>
    </div>
  );
};

export default AchivementSection;
