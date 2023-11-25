import React, { useEffect } from 'react'
import { TfiGallery } from "react-icons/tfi";
import { FaHeart, FaShareNodes } from "react-icons/fa6";
import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
import { IoLocationSharp } from "react-icons/io5";
import { FiPrinter } from "react-icons/fi";
import Photos from './Photos';
import Swiper_slide from './menu/Swiper_slide';

// import Map from './menu/Map'

function Single() {
  let param = useParams()
  console.log(param)
  // let product = useLocation().state


  return (
    <div className='max-w-[1400px]  w-full m-auto   relative     '>
      <div className='w-full h-[500px]'>
        {/* <Outlet /> */}
        < Swiper_slide />
      </div>
      <div className='w-full   '>
        <div className='w-[95%] h-[60px]  lg:h-[60px]    m-auto bg-[#414141] relative flex rounded-md top-[-30px] z-20 '>
          <div className='  w-[70%]  bg-[#414141] md:w-[80%] flex  lg:w-[82%]  '>
            <div className='w-[90%] h-[60px] flex justify-around items-center rounded-l-md text-white sm:hidden'>
              <Link to={`/single/${param.id}/swiper`}> <TfiGallery className='border-white ' size={30} /> </Link>
              <Link to={`/single/${param.id}/map`}> <IoLocationSharp className='text-white' size={30} /> </Link>
              <Link to=''> <FiPrinter className='text-white' size={30} /> </Link>
              <Link to=''> <FaShareNodes className='text-white' size={30} /> </Link>
            </div>
            <div className=' hidden   h-[60px] text-white sm:flex w-[80%] justify-between  list-none flex-wrap  m-auto rounded-l-md  lg:w-[75%] lg:flex-nowrap   lg:h-[60px] ' >
              <li className=' h-[30px]  sm:h-full sm:flex sm:items-center sm:justify-center '><Link className='text-xl   md:uppercase ' to='swiper'> Photos</Link></li>
              <li className=' h-[30px]  sm:h-full sm:flex sm:items-center sm:justify-center'> <Link className='text-xl  md:uppercase ' to='map'> Map </Link></li>
              <li className=' h-[30px] sm:h-full sm:flex  sm:items-center sm:justify-center'><Link className='text-xl md:uppercase' to='vir'> Virtual</Link></li>
              <li className=' h-[30px]  sm:h-full sm:flex sm:items-center sm:justify-center'><Link className='text-xl  md:uppercase' to=''>Print  </Link></li>
              <li className=' h-[30px]  sm:h-full sm:flex sm:items-center sm:justify-center '><Link className='text-xl  md:uppercase' to=''> Share</Link></li>
            </div>


            <div state={param} className=' hidden lg:flex w-[20%] h-[60px]  items-center justify-center'><FaHeart className='' size={30} /></div>



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