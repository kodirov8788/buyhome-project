import React from 'react'
import Start from './Start'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { GrGallery } from "react-icons/gr";
import { FaHeart } from "react-icons/fa6";
import Photos from './menu/Photos';
import Map from './menu/Map'

function Single() {


  return (
    <div className='max-w-[1400px]  w-full m-auto   relative border border-black    '>
      <div className='w-full h-[500px]'>
        <Start />
      </div>
      <div className='w-full  border border-black '>
        {/* menu  */}
        <div className='w-[95%] h-[60px] md:h-[100px] lg:h-[60px] border  border-red-400 m-auto bg-[#414141] relative flex rounded-md top-[-30px] z-20 '>

          <div className='  w-[70%] border border-black bg-[#414141] md:w-[80%] flex  lg:w-[82%]  '>
            <div className='w-[90%] h-[60px] flex justify-around items-center rounded-l-md text-white sm:hidden'>
              <Link to='/'><GrGallery className='text-white' size={30} /> </Link>
              <Link to='/map'><GrGallery className='text-white' size={30} /> </Link>
              <Link to=''><GrGallery className='text-white' size={30} /> </Link>
              <Link to=''><GrGallery className='text-white' size={30} /> </Link>
              <Link to=''><GrGallery className='text-white' size={30} /> </Link>
            </div>




            <div className=' hidden  text-white sm:flex w-[80%] justify-between py-[8px]  list-none flex-wrap  m-auto rounded-l-md md:h-[100px] md:py-[20px] lg:w-[75%] lg:flex-nowrap  lg:py-0 lg:h-[60px] ' >
              <li className='w-[28%] h-[30px]   border-red-500 lg:w-[20%]  lg:h-full lg:flex lg:items-center lg:justify-center '><Link className='text-xl  md:uppercase ' to='/'> Photos</Link></li>
              <li className='w-[65%] h-[30px]   border md:w-[35%] lg:w-[20%]  lg:h-full lg:flex lg:items-center lg:justify-center'> <Link className='text-xl  md:uppercase ' to='/map'>Map </Link></li>
              <li className='w-[33%] h-[30px]   lg:w-[20%] lg:h-full lg:flex lg:items-center lg:justify-center'><Link className='text-xl md:uppercase' to='/virtul'> Virtual</Link></li>
              <li className='w-[25%] h-[30px] md:mt-[7px]   sm:text-center  lg:w-[20%] lg:mt-0 lg:h-full lg:flex lg:items-center lg:justify-center'><a className='text-xl  md:uppercase' href=''>Print  </a></li>
              <li className='w-[25%] h-[30px] md:mt-[7px]  md:w-[55%]  lg:w-[20%] lg:mt-0 lg:h-full lg:flex lg:items-center lg:justify-center '><a className='text-xl  md:uppercase' href=''> Share</a></li>
            </div>


            <div className=' hidden lg:flex w-[20%] h-[60px]  border border-white items-center justify-center'><FaHeart className='border border-red-500' size={30} /></div>



          </div>


          <button className='w-[30%] h-full bg-[#DB1F2D] rounded-r-md text-white md:w-[20%] md:h-[50px] lg:w-[18%] lg:h-full  '>Enquire</button>
        </div>
        {/* menu div */}

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Photos />} />
            <Route path='/map' element={<Map />} />
          </Routes>
        </BrowserRouter>



      </div>

    </div>
  )
}

export default Single