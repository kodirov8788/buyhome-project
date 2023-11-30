import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import img1 from "./img1.jpg";
import { Navigation, FreeMode, Pagination } from 'swiper/modules';
import { MdLocationPin } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { SlSizeFullscreen } from "react-icons/sl";
import 'swiper/css';
import 'swiper/css/free-mode';
import './Card_Swiper.css';
function Home() {
    return (
      <>
      <Swiper
      freeMode={true}
      navigation
      spaceBetween={50}
      slidesPerView={1}
      centeredSlides={true}
      grabCursor={true}
      pagination={{
        clickable: true,
        
        }}
        modules={[Navigation, FreeMode, Pagination]}
        className="mySwiper"
      >



        <SwiperSlide className='border max-w-sm  sm:h-[408px]  sm:w-[427px]'>
        <img src={img1} alt="" />

        <div id='text-box' className=' flex  w-[390px] h-[35px] sm:w-[383px] sm:h-[40px]' >
          <div className="  flex items-center justify-center sm:w-[300px] sm:h-[40px] w-[302px] h-[35px] bg-slate-800"  id="box1">
            <p className='text-[13px] font-bold text-white '>2 Bedroom House</p>
          </div>
          <div className=" flex items-center justify-center   sm:w-[83px] sm:h-[40px]  w-[80px] h-[35px] bg-red-800"  id="box1">
            <p className='text-[13px] font-bold text-white '>€ 210.000</p>
          </div>
        </div>

        <div className=' translate-y-1 sm:w-[383px] sm:h-[40px] w-[380px] h-[30px] flex items-center justify-between'>
          <p className=' sm:m-[20px] font-bold text-[13px] sm:text-[15px] flex'> <MdLocationPin className='text-[15px]' /> Larnaka,M...</p>
          <p className=' sm:m-[20px] m-[3px]'>ID:53879</p>
        </div>

        <div id='icons' className=' sm:flex sm:items-center sm:gap-4 sm:w-[370px] sm:h-[50px] sm:m-[10px] w-[200px] h-[40px] translate-y-2 flex gap-2'>
        <p className='flex text-neutral-500 sm:text-[25px]'><IoBedOutline  className=' sm:text-[30px] text-[20px] text-neutral-500'/> 2</p>
        <p className='flex text-neutral-500'><LuBath  className=' sm:text-[30px] text-[20px] text-neutral-500'/> 2</p>
        <p className='flex text-neutral-500'><SlSizeFullscreen  className=' sm:text-[30px] text-[20px] text-neutral-500'/> 112m2</p>
        <div>
          <button className='w-[100px] h-[33px] bg-slate-600 rounded-[6px] border-[0px] hover:bg-red-700 hover:text-white m-[40px] hidden md:flex md:justify-center md:items-center'>View</button>
        </div>
        </div>
        </SwiperSlide>

        <SwiperSlide className='border max-w-sm  sm:h-[408px]  sm:w-[427px]'>
        <img src={img1} alt="" />

        <div id='text-box' className=' flex  w-[390px] h-[35px] sm:w-[383px] sm:h-[40px]' >
          <div className="  flex items-center justify-center sm:w-[300px] sm:h-[40px] w-[302px] h-[35px] bg-slate-800"  id="box1">
            <p className='text-[13px] font-bold text-white '>2 Bedroom House</p>
          </div>
          <div className=" flex items-center justify-center   sm:w-[83px] sm:h-[40px]  w-[80px] h-[35px] bg-red-800"  id="box1">
            <p className='text-[13px] font-bold text-white '>€ 210.000</p>
          </div>
        </div>

        <div className=' translate-y-1 sm:w-[383px] sm:h-[40px] w-[380px] h-[30px] flex items-center justify-between'>
          <p className=' sm:m-[20px] font-bold text-[13px] sm:text-[15px] flex'> <MdLocationPin className='text-[15px]' /> Larnaka,M...</p>
          <p className=' sm:m-[20px] m-[3px]'>ID:53879</p>
        </div>

        <div id='icons' className=' sm:flex sm:items-center sm:gap-4 sm:w-[370px] sm:h-[50px] sm:m-[10px] w-[200px] h-[40px] translate-y-2 flex gap-2'>
        <p className='flex text-neutral-500 sm:text-[25px]'><IoBedOutline  className=' sm:text-[30px] text-[20px] text-neutral-500'/> 2</p>
        <p className='flex text-neutral-500'><LuBath  className=' sm:text-[30px] text-[20px] text-neutral-500'/> 2</p>
        <p className='flex text-neutral-500'><SlSizeFullscreen  className=' sm:text-[30px] text-[20px] text-neutral-500'/> 112m2</p>
        <div>
          <button className='w-[100px] h-[33px] bg-slate-600 rounded-[6px] border-[0px] hover:bg-red-700 hover:text-white m-[40px] hidden md:flex md:justify-center md:items-center'>View</button>
        </div>
        </div>
        </SwiperSlide>

        <SwiperSlide className='border max-w-sm  sm:h-[408px]  sm:w-[427px]'>
        <img src={img1} alt="" />

        <div id='text-box' className=' flex  w-[390px] h-[35px] sm:w-[383px] sm:h-[40px]' >
          <div className="  flex items-center justify-center sm:w-[300px] sm:h-[40px] w-[302px] h-[35px] bg-slate-800"  id="box1">
            <p className='text-[13px] font-bold text-white '>2 Bedroom House</p>
          </div>
          <div className=" flex items-center justify-center   sm:w-[83px] sm:h-[40px]  w-[80px] h-[35px] bg-red-800"  id="box1">
            <p className='text-[13px] font-bold text-white '>€ 210.000</p>
          </div>
        </div>

        <div className=' translate-y-1 sm:w-[383px] sm:h-[40px] w-[380px] h-[30px] flex items-center justify-between'>
          <p className=' sm:m-[20px] font-bold text-[13px] sm:text-[15px] flex'> <MdLocationPin className='text-[15px]' /> Larnaka,M...</p>
          <p className=' sm:m-[20px] m-[3px]'>ID:53879</p>
        </div>

        <div id='icons' className=' sm:flex sm:items-center sm:gap-4 sm:w-[370px] sm:h-[50px] sm:m-[10px] w-[200px] h-[40px] translate-y-2 flex gap-2'>
        <p className='flex text-neutral-500 sm:text-[25px]'><IoBedOutline  className=' sm:text-[30px] text-[20px] text-neutral-500'/> 2</p>
        <p className='flex text-neutral-500'><LuBath  className=' sm:text-[30px] text-[20px] text-neutral-500'/> 2</p>
        <p className='flex text-neutral-500'><SlSizeFullscreen  className=' sm:text-[30px] text-[20px] text-neutral-500'/> 112m2</p>
        <div>
          <button className='w-[100px] h-[33px] bg-slate-600 rounded-[6px] border-[0px] hover:bg-red-700 hover:text-white m-[40px] hidden md:flex md:justify-center md:items-center'>View</button>
        </div>
        </div>
        </SwiperSlide>

        <SwiperSlide className='border max-w-sm  sm:h-[408px]  sm:w-[427px]'>
        <img src={img1} alt="" />

        <div id='text-box' className=' flex  w-[390px] h-[35px] sm:w-[383px] sm:h-[40px]' >
          <div className="  flex items-center justify-center sm:w-[300px] sm:h-[40px] w-[302px] h-[35px] bg-slate-800"  id="box1">
            <p className='text-[13px] font-bold text-white '>2 Bedroom House</p>
          </div>
          <div className=" flex items-center justify-center   sm:w-[83px] sm:h-[40px]  w-[80px] h-[35px] bg-red-800"  id="box1">
            <p className='text-[13px] font-bold text-white '>€ 210.000</p>
          </div>
        </div>

        <div className=' translate-y-1 sm:w-[383px] sm:h-[40px] w-[380px] h-[30px] flex items-center justify-between'>
          <p className=' sm:m-[20px] font-bold text-[13px] sm:text-[15px] flex'> <MdLocationPin className='text-[15px]' /> Larnaka,M...</p>
          <p className=' sm:m-[20px] m-[3px]'>ID:53879</p>
        </div>

        <div id='icons' className=' sm:flex sm:items-center sm:gap-4 sm:w-[370px] sm:h-[50px] sm:m-[10px] w-[200px] h-[40px] translate-y-2 flex gap-2'>
        <p className='flex text-neutral-500 sm:text-[25px]'><IoBedOutline  className=' sm:text-[30px] text-[20px] text-neutral-500'/> 2</p>
        <p className='flex text-neutral-500'><LuBath  className=' sm:text-[30px] text-[20px] text-neutral-500'/> 2</p>
        <p className='flex text-neutral-500'><SlSizeFullscreen  className=' sm:text-[30px] text-[20px] text-neutral-500'/> 112m2</p>
        <div>
          <button className='w-[100px] h-[33px] bg-slate-600 rounded-[6px] border-[0px] hover:bg-red-700 hover:text-white m-[40px] hidden md:flex md:justify-center md:items-center'>View</button>
        </div>
        </div>
        </SwiperSlide>

        <SwiperSlide className='border max-w-sm  sm:h-[408px]  sm:w-[427px]'>
        <img src={img1} alt="" />

        <div id='text-box' className=' flex  w-[390px] h-[35px] sm:w-[383px] sm:h-[40px]' >
          <div className="  flex items-center justify-center sm:w-[300px] sm:h-[40px] w-[302px] h-[35px] bg-slate-800"  id="box1">
            <p className='text-[13px] font-bold text-white '>2 Bedroom House</p>
          </div>
          <div className=" flex items-center justify-center   sm:w-[83px] sm:h-[40px]  w-[80px] h-[35px] bg-red-800"  id="box1">
            <p className='text-[13px] font-bold text-white '>€ 210.000</p>
          </div>
        </div>

        <div className=' translate-y-1 sm:w-[383px] sm:h-[40px] w-[380px] h-[30px] flex items-center justify-between'>
          <p className=' sm:m-[20px] font-bold text-[13px] sm:text-[15px] flex'> <MdLocationPin className='text-[15px]' /> Larnaka,M...</p>
          <p className=' sm:m-[20px] m-[3px]'>ID:53879</p>
        </div>

        <div id='icons' className=' sm:flex sm:items-center sm:gap-4 sm:w-[370px] sm:h-[50px] sm:m-[10px] w-[200px] h-[40px] translate-y-2 flex gap-2'>
        <p className='flex text-neutral-500 sm:text-[25px]'><IoBedOutline  className=' sm:text-[30px] text-[20px] text-neutral-500'/> 2</p>
        <p className='flex text-neutral-500'><LuBath  className=' sm:text-[30px] text-[20px] text-neutral-500'/> 2</p>
        <p className='flex text-neutral-500'><SlSizeFullscreen  className=' sm:text-[30px] text-[20px] text-neutral-500'/> 112m2</p>
        <div>
          <button className='w-[100px] h-[33px] bg-slate-600 rounded-[6px] border-[0px] hover:bg-red-700 hover:text-white m-[40px] hidden md:flex md:justify-center md:items-center'>View</button>
        </div>
        </div>
        </SwiperSlide>

        <SwiperSlide className='border max-w-sm  sm:h-[408px]  sm:w-[427px]'>
        <img src={img1} alt="" />

        <div id='text-box' className=' flex  w-[390px] h-[35px] sm:w-[383px] sm:h-[40px]' >
          <div className="  flex items-center justify-center sm:w-[300px] sm:h-[40px] w-[302px] h-[35px] bg-slate-800"  id="box1">
            <p className='text-[13px] font-bold text-white '>2 Bedroom House</p>
          </div>
          <div className=" flex items-center justify-center   sm:w-[83px] sm:h-[40px]  w-[80px] h-[35px] bg-red-800"  id="box1">
            <p className='text-[13px] font-bold text-white '>€ 210.000</p>
          </div>
        </div>

        <div className=' translate-y-1 sm:w-[383px] sm:h-[40px] w-[380px] h-[30px] flex items-center justify-between'>
          <p className=' sm:m-[20px] font-bold text-[13px] sm:text-[15px] flex'> <MdLocationPin className='text-[15px]' /> Larnaka,M...</p>
          <p className=' sm:m-[20px] m-[3px]'>ID:53879</p>
        </div>

        <div id='icons' className=' sm:flex sm:items-center sm:gap-4 sm:w-[370px] sm:h-[50px] sm:m-[10px] w-[200px] h-[40px] translate-y-2 flex gap-2'>
        <p className='flex text-neutral-500 sm:text-[25px]'><IoBedOutline  className=' sm:text-[30px] text-[20px] text-neutral-500'/> 2</p>
        <p className='flex text-neutral-500'><LuBath  className=' sm:text-[30px] text-[20px] text-neutral-500'/> 2</p>
        <p className='flex text-neutral-500'><SlSizeFullscreen  className=' sm:text-[30px] text-[20px] text-neutral-500'/> 112m2</p>
        <div>
          <button className='w-[100px] h-[33px] bg-slate-600 rounded-[6px] border-[0px] hover:bg-red-700 hover:text-white m-[40px] hidden md:flex md:justify-center md:items-center'>View</button>
        </div>
        </div>
        </SwiperSlide>

        <SwiperSlide className='border max-w-sm  sm:h-[408px]  sm:w-[427px]'>
        <img src={img1} alt="" />

        <div id='text-box' className=' flex  w-[390px] h-[35px] sm:w-[383px] sm:h-[40px]' >
          <div className="  flex items-center justify-center sm:w-[300px] sm:h-[40px] w-[302px] h-[35px] bg-slate-800"  id="box1">
            <p className='text-[13px] font-bold text-white '>2 Bedroom House</p>
          </div>
          <div className=" flex items-center justify-center   sm:w-[83px] sm:h-[40px]  w-[80px] h-[35px] bg-red-800"  id="box1">
            <p className='text-[13px] font-bold text-white '>€ 210.000</p>
          </div>
        </div>

        <div className=' translate-y-1 sm:w-[383px] sm:h-[40px] w-[380px] h-[30px] flex items-center justify-between'>
          <p className=' sm:m-[20px] font-bold text-[13px] sm:text-[15px] flex'> <MdLocationPin className='text-[15px]' /> Larnaka,M...</p>
          <p className=' sm:m-[20px] m-[3px]'>ID:53879</p>
        </div>

        <div id='icons' className=' sm:flex sm:items-center sm:gap-4 sm:w-[370px] sm:h-[50px] sm:m-[10px] w-[200px] h-[40px] translate-y-2 flex gap-2'>
        <p className='flex text-neutral-500 sm:text-[25px]'><IoBedOutline  className=' sm:text-[30px] text-[20px] text-neutral-500'/> 2</p>
        <p className='flex text-neutral-500'><LuBath  className=' sm:text-[30px] text-[20px] text-neutral-500'/> 2</p>
        <p className='flex text-neutral-500'><SlSizeFullscreen  className=' sm:text-[30px] text-[20px] text-neutral-500'/> 112m2</p>
        <div>
          <button className='w-[100px] h-[33px] bg-slate-600 rounded-[6px] border-[0px] hover:bg-red-700 hover:text-white m-[40px] hidden md:flex md:justify-center md:items-center'>View</button>
        </div>
        </div>
        </SwiperSlide>

        <SwiperSlide className='border max-w-sm  sm:h-[408px]  sm:w-[427px]'>
        <img src={img1} alt="" />

        <div id='text-box' className=' flex  w-[390px] h-[35px] sm:w-[383px] sm:h-[40px]' >
          <div className="  flex items-center justify-center sm:w-[300px] sm:h-[40px] w-[302px] h-[35px] bg-slate-800"  id="box1">
            <p className='text-[13px] font-bold text-white '>2 Bedroom House</p>
          </div>
          <div className=" flex items-center justify-center   sm:w-[83px] sm:h-[40px]  w-[80px] h-[35px] bg-red-800"  id="box1">
            <p className='text-[13px] font-bold text-white '>€ 210.000</p>
          </div>
        </div>

        <div className=' translate-y-1 sm:w-[383px] sm:h-[40px] w-[380px] h-[30px] flex items-center justify-between'>
          <p className=' sm:m-[20px] font-bold text-[13px] sm:text-[15px] flex'> <MdLocationPin className='text-[15px]' /> Larnaka,M...</p>
          <p className=' sm:m-[20px] m-[3px]'>ID:53879</p>
        </div>

        <div id='icons' className=' sm:flex sm:items-center sm:gap-4 sm:w-[370px] sm:h-[50px] sm:m-[10px] w-[200px] h-[40px] translate-y-2 flex gap-2'>
        <p className='flex text-neutral-500 sm:text-[25px]'><IoBedOutline  className=' sm:text-[30px] text-[20px] text-neutral-500'/> 2</p>
        <p className='flex text-neutral-500'><LuBath  className=' sm:text-[30px] text-[20px] text-neutral-500'/> 2</p>
        <p className='flex text-neutral-500'><SlSizeFullscreen  className=' sm:text-[30px] text-[20px] text-neutral-500'/> 112m2</p>
        <div>
          <button className='w-[100px] h-[33px] bg-slate-600 rounded-[6px] border-[0px] hover:bg-red-700 hover:text-white m-[40px] hidden md:flex md:justify-center md:items-center'>View</button>
        </div>
        </div>
        </SwiperSlide>

        <SwiperSlide className='border max-w-sm  sm:h-[408px]  sm:w-[427px]'>
        <img src={img1} alt="" />

        <div id='text-box' className=' flex  w-[390px] h-[35px] sm:w-[383px] sm:h-[40px]' >
          <div className="  flex items-center justify-center sm:w-[300px] sm:h-[40px] w-[302px] h-[35px] bg-slate-800"  id="box1">
            <p className='text-[13px] font-bold text-white '>2 Bedroom House</p>
          </div>
          <div className=" flex items-center justify-center   sm:w-[83px] sm:h-[40px]  w-[80px] h-[35px] bg-red-800"  id="box1">
            <p className='text-[13px] font-bold text-white '>€ 210.000</p>
          </div>
        </div>

        <div className=' translate-y-1 sm:w-[383px] sm:h-[40px] w-[380px] h-[30px] flex items-center justify-between'>
          <p className=' sm:m-[20px] font-bold text-[13px] sm:text-[15px] flex'> <MdLocationPin className='text-[15px]' /> Larnaka,M...</p>
          <p className=' sm:m-[20px] m-[3px]'>ID:53879</p>
        </div>

        <div id='icons' className=' sm:flex sm:items-center sm:gap-4 sm:w-[370px] sm:h-[50px] sm:m-[10px] w-[200px] h-[40px] translate-y-2 flex gap-2'>
        <p className='flex text-neutral-500 sm:text-[25px]'><IoBedOutline  className=' sm:text-[30px] text-[20px] text-neutral-500'/> 2</p>
        <p className='flex text-neutral-500'><LuBath  className=' sm:text-[30px] text-[20px] text-neutral-500'/> 2</p>
        <p className='flex text-neutral-500'><SlSizeFullscreen  className=' sm:text-[30px] text-[20px] text-neutral-500'/> 112m2</p>
        <div>
          <button className='w-[100px] h-[33px] bg-slate-600 rounded-[6px] border-[0px] hover:bg-red-700 hover:text-white m-[40px] hidden md:flex md:justify-center md:items-center'>View</button>
        </div>
        </div>
        </SwiperSlide>
        
        
      </Swiper>
    </>
    );
};

export default Home;