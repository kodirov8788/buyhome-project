import React from 'react'
import { GrGallery } from "react-icons/gr";
import { FaHeart } from "react-icons/fa6";
import { Outlet, Link } from 'react-router-dom';
import Photos from './Photos';
import Swiper_slide from './menu/Swiper_slide';

// import Map from './menu/Map'

function Single() {


  return (
    <div className='max-w-[1400px]  w-full m-auto   relative     '>
      <div className='w-full h-[500px]'>
        <Swiper_slide />
        {/* <Outlet /> */}
      </div>
      <div className='w-full   '>
        {/* menu  */}
        <div className='w-[95%] h-[60px]  lg:h-[60px]    m-auto bg-[#414141] relative flex rounded-md top-[-30px] z-20 '>

          <div className='  w-[70%]  bg-[#414141] md:w-[80%] flex  lg:w-[82%]  '>
            <div className='w-[90%] h-[60px] flex justify-around items-center rounded-l-md text-white sm:hidden'>
              <a href=''><GrGallery className='text-white' size={30} /> </a>
              <a href=''><GrGallery className='text-white' size={30} /> </a>
              <a href=''><GrGallery className='text-white' size={30} /> </a>
              <a href=''><GrGallery className='text-white' size={30} /> </a>
              <a href=''><GrGallery className='text-white' size={30} /> </a>
            </div>




            <div className=' hidden   h-[60px] text-white sm:flex w-[80%] justify-between  list-none flex-wrap  m-auto rounded-l-md  lg:w-[75%] lg:flex-nowrap   lg:h-[60px] ' >
              <li className=' h-[30px]  sm:h-full sm:flex sm:items-center sm:justify-center '><Link className='text-xl  md:uppercase ' to='swiper'> Photos</Link></li>
              <li className=' h-[30px]  sm:h-full sm:flex sm:items-center sm:justify-center'> <Link className='text-xl  md:uppercase ' to='map'>Map </Link></li>
              <li className=' h-[30px] sm:h-full sm:flex  sm:items-center sm:justify-center'><Link className='text-xl md:uppercase' to='vir'> Virtual</Link></li>
              <li className=' h-[30px]  sm:h-full sm:flex sm:items-center sm:justify-center'><Link className='text-xl  md:uppercase' to=''>Print  </Link></li>
              <li className=' h-[30px]  sm:h-full sm:flex sm:items-center sm:justify-center '><Link className='text-xl  md:uppercase' to=''> Share</Link></li>
            </div>


            <div className=' hidden lg:flex w-[20%] h-[60px]  items-center justify-center'><FaHeart className='' size={30} /></div>



          </div>


          <button className='w-[30%] h-full bg-[#DB1F2D] rounded-r-md text-white md:w-[20%] md:h-[60px] lg:w-[18%] lg:h-full  '>Enquire</button>
        </div>
        {/* menu div */}

        <div className='w-full flex justify-center'>
          <Photos />
        </div>



      </div>

    </div>
  )
}

export default Single