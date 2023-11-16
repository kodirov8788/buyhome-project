import img1 from './image/bedrooms.png'
import img2 from './image/bathrooms.png'
import img3 from './image/land_area.png'
import img4 from './image/area-m2.png'

function Photos() {
  return (
    <div className='w-[85%] border border-black m-auto lg:w-[90%] lg:flex lg:justify-between lg:items-center '>
      <div className=' w-full border border-black m-auto flex flex-wrap lg:w-[85%] '>
        <div className='w-1/2 shadow-slate-100  md:w-1/4'>
          <div className='w-full flex border border-red-500'>
            <img className='w-[40px]' src={img1} alt="" />
            <p className='text-md pl-[5px] py-[10px]'>Bedrooms</p>
          </div>
          <p className='text-xl py-[10px]'>5</p>
        </div>
        <div className='w-1/2 shadow-slate-100  md:w-1/4'>
          <div className='w-full flex border border-red-500'>
            <img className='w-[40px]' src={img2} alt="" />
            <p className='text-md pl-[5px] py-[10px]'>Bathrooms</p>
          </div>
          <p className='text-xl py-[10px]'>5</p>
        </div>
        <div className='w-1/2 shadow-slate-100  md:w-1/4'>
          <div className='w-full flex border border-red-500'>
            <img className='w-[40px]' src={img4} alt="" />
            <p className='text-md pl-[5px] py-[10px]'>Covered</p>
          </div>
          <p className='text-xl py-[10px]'>420m</p>
        </div>
        <div className='w-1/2 shadow-slate-100  md:w-1/4'>
          <div className='w-full flex border border-red-500'>
            <img className='w-[40px]' src={img3} alt="" />
            <p className='text-md pl-[5px] py-[10px]'>Land</p>
          </div>
          <p className='text-xl py-[10px]'>2342m</p>
        </div>
      </div>
      <div className='hidden w-[15%] lg:block  '>
        <div className='text-xl  h-[45px]    w-full flex items-center justify-center border border-black'>Total Price</div>
        <p className='text-xl py-[10px] text-center font-semibold text-[#DB1F2D]'>849,000</p>
      </div>
    </div>
  )
}

export default Photos