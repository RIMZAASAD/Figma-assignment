import React from 'react'
import Image from 'next/image';


const Navbar = () => {
  return (
    <div
     
      className="h-[60px] flex items-center  px-3 bg-[#A29875]"
    >
      <div className="flex items-center w-full ">
        
        <h1 className="text-white font-rye text-4xl p-10 ">Manzzari</h1>
<div className=' md:hideen flex items-center h-11 w-full max-w-md rounded-md  bg-neutral-100  mx-auto  px-5 '>
  <input type="text"
  placeholder='Search for Gold Jewellery, Diamond Jewellery and more…' 
  className='flex-1 px-3 text-sm text-gray-600 bg-transparent outline-none'/>
  <Image
  src={"/Image/search.png"}
  alt='search-png'
  width={20}
  height={20}/>
  
</div>
<div className=' w-full max-w-[177px]  h-[30px] mx-auto '> 
  <div className=' hidden md:flex  gap-[37px] '>
    <p>
  <Image
  src={"/Image/favorite.png"}
  alt='favorite-icon'
  height={34}
  width={30}/>
  </p>
  <p>
    <Image
    src={"/Image/person.png"}
    alt="person-icon"
    height={28}
    width={29}
    />

  </p>
    <p>
    <Image
    src={"/Image/shopping.png"}
    alt="shopping-icon"
    height={30}
    width={38}
    />
    </p>
  </div>
</div>
      
     
      </div>
    </div>
  );
};

export default Navbar;

