import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Home.css";
import img1 from "./img1.jpg";
import { CiLocationOn } from 'react-icons/ci';
import { MdOutlineBedroomParent } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { SlSizeFullscreen } from "react-icons/sl";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


function Home() {
    return (

        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide className=' sm:w-[500px] h-[100px] bg-white border border-slate-800'>
                <img src={img1} alt="" />
                <div className=' flex border   h-[45px] w-[405px] sm:w-[]'>
                    <div className='h-[45px] font-bold text-white bg-slate-600 flex w-[300px] flex items-center p-[20px]'>Land for Sa...</div>
                    <div className='h-[45px] font-bold text-center flex items-center justify-end w-[200px] bg-red-600 text-white p-[10px]'>€240,000</div>

                </div>
                <div id="txt" className=' border-red-700 h-[40px] flex'>
                    <div className='flex  items-center justify-center   border-red-950 w-[200px]  h-[40px]'><CiLocationOn /><p className=' font-semibold font-monoi'> Larnaka, Oroklini</p></div>
                    <div className='flex items-center justify-end p-[20px] h-[40px] w-[205px]  border-red-600'><p>ID: LAR42259</p></div>
                </div>

                <div id="icons" className=' w-[400px] translate-y-[20px]   gap-[10px]  border-blue-600 flex items-center justify-between
        '>
                    <div className='flex items-center gap-[10px] p-[10px]'><MdOutlineBedroomParent className='text-[20px] text-slate-700 flex' /><p className=' text-slate-700 text-[20px]'>3</p>
                        <FaBath className='text-[20px] text-slate-700 flex' /><p className='text-[20px] text-slate-700'>3</p>
                        <SlSizeFullscreen className='text-[20px] text-slate-700' /><p className='text-[20px] text-slate-700'>167m2</p></div>
                    <div>
                        <button className='flex w-[100px] h-[35px] rounded-[3px] items-center justify-center bg-gray-700 font-bold text-white text-[18px] hover:bg-red-700'>View</button>
                    </div>
                </div>

            </SwiperSlide>
            <SwiperSlide className=' sm:w-[500px] h-[100px] bg-white border border-slate-800'>
                <img src={img1} alt="" />
                <div className=' flex border   h-[45px] w-[405px] sm:w-[]'>
                    <div className='h-[45px] font-bold text-white bg-slate-600 flex w-[300px] flex items-center p-[20px]'>Land for Sa...</div>
                    <div className='h-[45px] font-bold text-center flex items-center justify-end w-[200px] bg-red-600 text-white p-[10px]'>€240,000</div>

                </div>
                <div id="txt" className=' border-red-700 h-[40px] flex'>
                    <div className='flex  items-center justify-center   border-red-950 w-[200px]  h-[40px]'><CiLocationOn /><p className=' font-semibold font-monoi'> Larnaka, Oroklini</p></div>
                    <div className='flex items-center justify-end p-[20px] h-[40px] w-[205px]  border-red-600'><p>ID: LAR42259</p></div>
                </div>

                <div id="icons" className=' w-[400px] translate-y-[20px]   gap-[10px]  border-blue-600 flex items-center justify-between
        '>
                    <div className='flex items-center gap-[10px] p-[10px]'><MdOutlineBedroomParent className='text-[20px] text-slate-700 flex' /><p className=' text-slate-700 text-[20px]'>3</p>
                        <FaBath className='text-[20px] text-slate-700 flex' /><p className='text-[20px] text-slate-700'>3</p>
                        <SlSizeFullscreen className='text-[20px] text-slate-700' /><p className='text-[20px] text-slate-700'>167m2</p></div>
                    <div>
                        <button className='flex w-[100px] h-[35px] rounded-[3px] items-center justify-center bg-gray-700 font-bold text-white text-[18px] hover:bg-red-700'>View</button>
                    </div>
                </div>

            </SwiperSlide>
            <SwiperSlide className=' sm:w-[500px] h-[100px] bg-white border border-slate-800'>
                <img src={img1} alt="" />
                <div className=' flex border   h-[45px] w-[405px] sm:w-[]'>
                    <div className='h-[45px] font-bold text-white bg-slate-600 flex w-[300px] flex items-center p-[20px]'>Land for Sa...</div>
                    <div className='h-[45px] font-bold text-center flex items-center justify-end w-[200px] bg-red-600 text-white p-[10px]'>€240,000</div>

                </div>
                <div id="txt" className=' border-red-700 h-[40px] flex'>
                    <div className='flex  items-center justify-center   border-red-950 w-[200px]  h-[40px]'><CiLocationOn /><p className=' font-semibold font-monoi'> Larnaka, Oroklini</p></div>
                    <div className='flex items-center justify-end p-[20px] h-[40px] w-[205px]  border-red-600'><p>ID: LAR42259</p></div>
                </div>

                <div id="icons" className=' w-[400px] translate-y-[20px]   gap-[10px]  border-blue-600 flex items-center justify-between
        '>
                    <div className='flex items-center gap-[10px] p-[10px]'><MdOutlineBedroomParent className='text-[20px] text-slate-700 flex' /><p className=' text-slate-700 text-[20px]'>3</p>
                        <FaBath className='text-[20px] text-slate-700 flex' /><p className='text-[20px] text-slate-700'>3</p>
                        <SlSizeFullscreen className='text-[20px] text-slate-700' /><p className='text-[20px] text-slate-700'>167m2</p></div>
                    <div>
                        <button className='flex w-[100px] h-[35px] rounded-[3px] items-center justify-center bg-gray-700 font-bold text-white text-[18px] hover:bg-red-700'>View</button>
                    </div>
                </div>

            </SwiperSlide>
            <SwiperSlide className=' sm:w-[500px] h-[100px] bg-white border border-slate-800'>
                <img src={img1} alt="" />
                <div className=' flex border   h-[45px] w-[405px] sm:w-[]'>
                    <div className='h-[45px] font-bold text-white bg-slate-600 flex w-[300px] flex items-center p-[20px]'>Land for Sa...</div>
                    <div className='h-[45px] font-bold text-center flex items-center justify-end w-[200px] bg-red-600 text-white p-[10px]'>€240,000</div>

                </div>
                <div id="txt" className=' border-red-700 h-[40px] flex'>
                    <div className='flex  items-center justify-center   border-red-950 w-[200px]  h-[40px]'><CiLocationOn /><p className=' font-semibold font-monoi'> Larnaka, Oroklini</p></div>
                    <div className='flex items-center justify-end p-[20px] h-[40px] w-[205px]  border-red-600'><p>ID: LAR42259</p></div>
                </div>

                <div id="icons" className=' w-[400px] translate-y-[20px]   gap-[10px]  border-blue-600 flex items-center justify-between
        '>
                    <div className='flex items-center gap-[10px] p-[10px]'><MdOutlineBedroomParent className='text-[20px] text-slate-700 flex' /><p className=' text-slate-700 text-[20px]'>3</p>
                        <FaBath className='text-[20px] text-slate-700 flex' /><p className='text-[20px] text-slate-700'>3</p>
                        <SlSizeFullscreen className='text-[20px] text-slate-700' /><p className='text-[20px] text-slate-700'>167m2</p></div>
                    <div>
                        <button className='flex w-[100px] h-[35px] rounded-[3px] items-center justify-center bg-gray-700 font-bold text-white text-[18px] hover:bg-red-700'>View</button>
                    </div>
                </div>

            </SwiperSlide>
            <SwiperSlide className=' sm:w-[500px] h-[100px] bg-white border border-slate-800'>
                <img src={img1} alt="" />
                <div className=' flex border   h-[45px] w-[405px] sm:w-[]'>
                    <div className='h-[45px] font-bold text-white bg-slate-600 flex w-[300px] flex items-center p-[20px]'>Land for Sa...</div>
                    <div className='h-[45px] font-bold text-center flex items-center justify-end w-[200px] bg-red-600 text-white p-[10px]'>€240,000</div>

                </div>
                <div id="txt" className=' border-red-700 h-[40px] flex'>
                    <div className='flex  items-center justify-center   border-red-950 w-[200px]  h-[40px]'><CiLocationOn /><p className=' font-semibold font-monoi'> Larnaka, Oroklini</p></div>
                    <div className='flex items-center justify-end p-[20px] h-[40px] w-[205px]  border-red-600'><p>ID: LAR42259</p></div>
                </div>

                <div id="icons" className=' w-[400px] translate-y-[20px]   gap-[10px]  border-blue-600 flex items-center justify-between
        '>
                    <div className='flex items-center gap-[10px] p-[10px]'><MdOutlineBedroomParent className='text-[20px] text-slate-700 flex' /><p className=' text-slate-700 text-[20px]'>3</p>
                        <FaBath className='text-[20px] text-slate-700 flex' /><p className='text-[20px] text-slate-700'>3</p>
                        <SlSizeFullscreen className='text-[20px] text-slate-700' /><p className='text-[20px] text-slate-700'>167m2</p></div>
                    <div>
                        <button className='flex w-[100px] h-[35px] rounded-[3px] items-center justify-center bg-gray-700 font-bold text-white text-[18px] hover:bg-red-700'>View</button>
                    </div>
                </div>

            </SwiperSlide>
            <SwiperSlide className=' sm:w-[500px] h-[100px] bg-white border border-slate-800'>
                <img src={img1} alt="" />
                <div className=' flex border   h-[45px] w-[405px] sm:w-[]'>
                    <div className='h-[45px] font-bold text-white bg-slate-600 flex w-[300px] flex items-center p-[20px]'>Land for Sa...</div>
                    <div className='h-[45px] font-bold text-center flex items-center justify-end w-[200px] bg-red-600 text-white p-[10px]'>€240,000</div>

                </div>
                <div id="txt" className=' border-red-700 h-[40px] flex'>
                    <div className='flex  items-center justify-center   border-red-950 w-[200px]  h-[40px]'><CiLocationOn /><p className=' font-semibold font-monoi'> Larnaka, Oroklini</p></div>
                    <div className='flex items-center justify-end p-[20px] h-[40px] w-[205px]  border-red-600'><p>ID: LAR42259</p></div>
                </div>

                <div id="icons" className=' w-[400px] translate-y-[20px]   gap-[10px]  border-blue-600 flex items-center justify-between
        '>
                    <div className='flex items-center gap-[10px] p-[10px]'><MdOutlineBedroomParent className='text-[20px] text-slate-700 flex' /><p className=' text-slate-700 text-[20px]'>3</p>
                        <FaBath className='text-[20px] text-slate-700 flex' /><p className='text-[20px] text-slate-700'>3</p>
                        <SlSizeFullscreen className='text-[20px] text-slate-700' /><p className='text-[20px] text-slate-700'>167m2</p></div>
                    <div>
                        <button className='flex w-[100px] h-[35px] rounded-[3px] items-center justify-center bg-gray-700 font-bold text-white text-[18px] hover:bg-red-700'>View</button>
                    </div>
                </div>

            </SwiperSlide>
            <SwiperSlide className=' sm:w-[500px] h-[100px] bg-white border border-slate-800'>
                <img src={img1} alt="" />
                <div className=' flex border   h-[45px] w-[405px] sm:w-[]'>
                    <div className='h-[45px] font-bold text-white bg-slate-600 flex w-[300px] flex items-center p-[20px]'>Land for Sa...</div>
                    <div className='h-[45px] font-bold text-center flex items-center justify-end w-[200px] bg-red-600 text-white p-[10px]'>€240,000</div>

                </div>
                <div id="txt" className=' border-red-700 h-[40px] flex'>
                    <div className='flex  items-center justify-center   border-red-950 w-[200px]  h-[40px]'><CiLocationOn /><p className=' font-semibold font-monoi'> Larnaka, Oroklini</p></div>
                    <div className='flex items-center justify-end p-[20px] h-[40px] w-[205px]  border-red-600'><p>ID: LAR42259</p></div>
                </div>

                <div id="icons" className=' w-[400px] translate-y-[20px]   gap-[10px]  border-blue-600 flex items-center justify-between
        '>
                    <div className='flex items-center gap-[10px] p-[10px]'><MdOutlineBedroomParent className='text-[20px] text-slate-700 flex' /><p className=' text-slate-700 text-[20px]'>3</p>
                        <FaBath className='text-[20px] text-slate-700 flex' /><p className='text-[20px] text-slate-700'>3</p>
                        <SlSizeFullscreen className='text-[20px] text-slate-700' /><p className='text-[20px] text-slate-700'>167m2</p></div>
                    <div>
                        <button className='flex w-[100px] h-[35px] rounded-[3px] items-center justify-center bg-gray-700 font-bold text-white text-[18px] hover:bg-red-700'>View</button>
                    </div>
                </div>

            </SwiperSlide>
            <SwiperSlide className=' sm:w-[500px] h-[100px] bg-white border border-slate-800'>
                <img src={img1} alt="" />
                <div className=' flex border   h-[45px] w-[405px] sm:w-[]'>
                    <div className='h-[45px] font-bold text-white bg-slate-600 flex w-[300px] flex items-center p-[20px]'>Land for Sa...</div>
                    <div className='h-[45px] font-bold text-center flex items-center justify-end w-[200px] bg-red-600 text-white p-[10px]'>€240,000</div>

                </div>
                <div id="txt" className=' border-red-700 h-[40px] flex'>
                    <div className='flex  items-center justify-center   border-red-950 w-[200px]  h-[40px]'><CiLocationOn /><p className=' font-semibold font-monoi'> Larnaka, Oroklini</p></div>
                    <div className='flex items-center justify-end p-[20px] h-[40px] w-[205px]  border-red-600'><p>ID: LAR42259</p></div>
                </div>

                <div id="icons" className=' w-[400px] translate-y-[20px]   gap-[10px]  border-blue-600 flex items-center justify-between
        '>
                    <div className='flex items-center gap-[10px] p-[10px]'><MdOutlineBedroomParent className='text-[20px] text-slate-700 flex' /><p className=' text-slate-700 text-[20px]'>3</p>
                        <FaBath className='text-[20px] text-slate-700 flex' /><p className='text-[20px] text-slate-700'>3</p>
                        <SlSizeFullscreen className='text-[20px] text-slate-700' /><p className='text-[20px] text-slate-700'>167m2</p></div>
                    <div>
                        <button className='flex w-[100px] h-[35px] rounded-[3px] items-center justify-center bg-gray-700 font-bold text-white text-[18px] hover:bg-red-700'>View</button>
                    </div>
                </div>

            </SwiperSlide>
            <SwiperSlide className=' sm:w-[500px] h-[100px] bg-white border border-slate-800'>
                <img src={img1} alt="" />
                <div className=' flex border   h-[45px] w-[405px] sm:w-[]'>
                    <div className='h-[45px] font-bold text-white bg-slate-600 flex w-[300px] flex items-center p-[20px]'>Land for Sa...</div>
                    <div className='h-[45px] font-bold text-center flex items-center justify-end w-[200px] bg-red-600 text-white p-[10px]'>€240,000</div>

                </div>
                <div id="txt" className=' border-red-700 h-[40px] flex'>
                    <div className='flex  items-center justify-center   border-red-950 w-[200px]  h-[40px]'><CiLocationOn /><p className=' font-semibold font-monoi'> Larnaka, Oroklini</p></div>
                    <div className='flex items-center justify-end p-[20px] h-[40px] w-[205px]  border-red-600'><p>ID: LAR42259</p></div>
                </div>

                <div id="icons" className=' w-[400px] translate-y-[20px]   gap-[10px]  border-blue-600 flex items-center justify-between
        '>
                    <div className='flex items-center gap-[10px] p-[10px]'><MdOutlineBedroomParent className='text-[20px] text-slate-700 flex' /><p className=' text-slate-700 text-[20px]'>3</p>
                        <FaBath className='text-[20px] text-slate-700 flex' /><p className='text-[20px] text-slate-700'>3</p>
                        <SlSizeFullscreen className='text-[20px] text-slate-700' /><p className='text-[20px] text-slate-700'>167m2</p></div>
                    <div>
                        <button className='flex w-[100px] h-[35px] rounded-[3px] items-center justify-center bg-gray-700 font-bold text-white text-[18px] hover:bg-red-700'>View</button>
                    </div>
                </div>

            </SwiperSlide>
            <SwiperSlide className=' sm:w-[500px] h-[100px] bg-white border border-slate-800'>
                <img src={img1} alt="" />
                <div className=' flex border   h-[45px] w-[405px] sm:w-[]'>
                    <div className='h-[45px] font-bold text-white bg-slate-600 flex w-[300px] flex items-center p-[20px]'>Land for Sa...</div>
                    <div className='h-[45px] font-bold text-center flex items-center justify-end w-[200px] bg-red-600 text-white p-[10px]'>€240,000</div>

                </div>
                <div id="txt" className=' border-red-700 h-[40px] flex'>
                    <div className='flex  items-center justify-center   border-red-950 w-[200px]  h-[40px]'><CiLocationOn /><p className=' font-semibold font-monoi'> Larnaka, Oroklini</p></div>
                    <div className='flex items-center justify-end p-[20px] h-[40px] w-[205px]  border-red-600'><p>ID: LAR42259</p></div>
                </div>

                <div id="icons" className=' w-[400px] translate-y-[20px]   gap-[10px]  border-blue-600 flex items-center justify-between
        '>
                    <div className='flex items-center gap-[10px] p-[10px]'><MdOutlineBedroomParent className='text-[20px] text-slate-700 flex' /><p className=' text-slate-700 text-[20px]'>3</p>
                        <FaBath className='text-[20px] text-slate-700 flex' /><p className='text-[20px] text-slate-700'>3</p>
                        <SlSizeFullscreen className='text-[20px] text-slate-700' /><p className='text-[20px] text-slate-700'>167m2</p></div>
                    <div>
                        <button className='flex w-[100px] h-[35px] rounded-[3px] items-center justify-center bg-gray-700 font-bold text-white text-[18px] hover:bg-red-700'>View</button>
                    </div>
                </div>

            </SwiperSlide>
            <SwiperSlide className=' sm:w-[500px] h-[100px] bg-white border border-slate-800'>
                <img src={img1} alt="" />
                <div className=' flex border   h-[45px] w-[405px] sm:w-[]'>
                    <div className='h-[45px] font-bold text-white bg-slate-600 flex w-[300px] flex items-center p-[20px]'>Land for Sa...</div>
                    <div className='h-[45px] font-bold text-center flex items-center justify-end w-[200px] bg-red-600 text-white p-[10px]'>€240,000</div>

                </div>
                <div id="txt" className=' border-red-700 h-[40px] flex'>
                    <div className='flex  items-center justify-center   border-red-950 w-[200px]  h-[40px]'><CiLocationOn /><p className=' font-semibold font-monoi'> Larnaka, Oroklini</p></div>
                    <div className='flex items-center justify-end p-[20px] h-[40px] w-[205px]  border-red-600'><p>ID: LAR42259</p></div>
                </div>

                <div id="icons" className=' w-[400px] translate-y-[20px]   gap-[10px]  border-blue-600 flex items-center justify-between
        '>
                    <div className='flex items-center gap-[10px] p-[10px]'><MdOutlineBedroomParent className='text-[20px] text-slate-700 flex' /><p className=' text-slate-700 text-[20px]'>3</p>
                        <FaBath className='text-[20px] text-slate-700 flex' /><p className='text-[20px] text-slate-700'>3</p>
                        <SlSizeFullscreen className='text-[20px] text-slate-700' /><p className='text-[20px] text-slate-700'>167m2</p></div>
                    <div>
                        <button className='flex w-[100px] h-[35px] rounded-[3px] items-center justify-center bg-gray-700 font-bold text-white text-[18px] hover:bg-red-700'>View</button>
                    </div>
                </div>

            </SwiperSlide>
            <SwiperSlide className=' sm:w-[500px] h-[100px] bg-white border border-slate-800'>
                <img src={img1} alt="" />
                <div className=' flex border   h-[45px] w-[405px] sm:w-[]'>
                    <div className='h-[45px] font-bold text-white bg-slate-600 flex w-[300px] flex items-center p-[20px]'>Land for Sa...</div>
                    <div className='h-[45px] font-bold text-center flex items-center justify-end w-[200px] bg-red-600 text-white p-[10px]'>€240,000</div>

                </div>
                <div id="txt" className=' border-red-700 h-[40px] flex'>
                    <div className='flex  items-center justify-center   border-red-950 w-[200px]  h-[40px]'><CiLocationOn /><p className=' font-semibold font-monoi'> Larnaka, Oroklini</p></div>
                    <div className='flex items-center justify-end p-[20px] h-[40px] w-[205px]  border-red-600'><p>ID: LAR42259</p></div>
                </div>

                <div id="icons" className=' w-[400px] translate-y-[20px]   gap-[10px]  border-blue-600 flex items-center justify-between
        '>
                    <div className='flex items-center gap-[10px] p-[10px]'><MdOutlineBedroomParent className='text-[20px] text-slate-700 flex' /><p className=' text-slate-700 text-[20px]'>3</p>
                        <FaBath className='text-[20px] text-slate-700 flex' /><p className='text-[20px] text-slate-700'>3</p>
                        <SlSizeFullscreen className='text-[20px] text-slate-700' /><p className='text-[20px] text-slate-700'>167m2</p></div>
                    <div>
                        <button className='flex w-[100px] h-[35px] rounded-[3px] items-center justify-center bg-gray-700 font-bold text-white text-[18px] hover:bg-red-700'>View</button>
                    </div>
                </div>

            </SwiperSlide>
            
        </Swiper>
    )
}

export default Home