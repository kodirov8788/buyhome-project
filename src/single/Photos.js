import img1 from './image/bedrooms.png'
import img2 from './image/bathrooms.png'
import img3 from './image/land_area.png'
import img4 from './image/area-m2.png'
import { useLocation, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { card } from '../satatic_data'

function Photos() {

  let item = useLocation().state
  const [land, setLand] = useState([])
  let Id = useParams().id
  console.log(land.land)

  useEffect(() => {
    let newArr = card.filter(el => el.id == Id)[0]
    setLand(newArr)
  }, [])

  console.log(Id)





  return (
    <div className='w-[85%] m-auto lg:w-[90%] lg:flex lg:justify-between lg:items-center '>
      <div className=' w-full  m-auto flex flex-wrap lg:w-[85%] '>
        <div className='w-1/2 shadow-slate-100  md:w-1/4'>
          <div className='w-full flex'>
            <img className='w-[40px]' src={img1} alt="" />
            <p className='text-md pl-[5px] py-[10px]'>Bedrooms </p>
          </div>
          <p className='text-xl py-[10px]'>{land?.bed}</p>
        </div>
        <div className='w-1/2 shadow-slate-100  md:w-1/4'>
          <div className='w-full flex '>
            <img className='w-[40px]' src={img2} alt="" />
            <p className='text-md pl-[5px] py-[10px]'>Bathrooms </p>
          </div>
          <p className='text-xl py-[10px]'>{land?.bathroom}</p>
        </div>
        <div className='w-1/2 shadow-slate-100  md:w-1/4'>
          <div className='w-full flex '>
            <img className='w-[40px]' src={img4} alt="" />
            <p className='text-md pl-[5px] py-[10px]'>Covered</p>
          </div>
          <p className='text-xl py-[10px]'>{land.land} m</p>
        </div>
        <div className='w-1/2 shadow-slate-100  md:w-1/4'>
          <div className='w-full flex '>
            <img className='w-[40px]' src={img3} alt="" />
            <p className='text-md pl-[5px] py-[10px]'>Land</p>
          </div>
          <p className='text-xl py-[10px]'>{land.local}m</p>
        </div>
      </div>
      <div className='hidden w-[15%] lg:block  '>
        <div className='text-xl  h-[45px]    w-full flex items-center justify-center '>Total Price</div>
        <p className='text-xl py-[10px] text-center font-semibold text-[#DB1F2D]'>{land?.price}</p>
      </div>
    </div>
  )
}

export default Photos