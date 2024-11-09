import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div className='h-screen'>
      <Navbar />
      <div className='flex max-w-[1486px] w-full max-h-[960px]'>
        
        <div className='w-full max-w-[1271px] h-full flex justify-center items-center m-10'>
          <div className='w-full max-w-[472px] h-[162px] m-10'>
            <h1 className='font-normal font-libre tracking-[2.5%] leading-[62.24px] text-5xl'>
              IMPECCABLE CRAFTSMANSHIP AND FINESSE
            </h1>
            <p className='text-lg text-[#787054] font-libre pt-5'>
              An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
            </p>
            <div className='pt-10'>
              <button className='w-[200px] h-[40px] font-libre font-medium bg-[#A29875] rounded-lg '>
                Explore Now
              </button>
            </div>
          </div>
        </div>

        
        <div className='w-full max-w-[421px] h-[573px] justify-centre items-center m-10 ' style={{ backgroundImage: `url('/Image/girl.png')`,}}>
        <div className='w-[380px] h-[525px] border-[3px] border-white m-5 rounded-tl-[128px] rounded-br-[128px]'>
          </div>
          </div>
      </div>
    </div>
  );
}

export default Hero;
