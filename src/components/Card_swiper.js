import { LuBedDouble, LuBath } from "react-icons/lu";
import { TbTextResize } from "react-icons/tb";
import { Link } from 'react-router-dom'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { card } from "../satatic_data"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

function Card_swiper() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="max-w-[1400px] h-[500px]   truncate border border-black"
            >
                {
                    card.map(item => (

                        < SwiperSlide>
                            <div
                                key={item.id}
                                className="w-[400px]     bg-white"
                            >
                                <Link className="block w-full  h-[180px] p-[8px] sm:h-[240px]" to={`single/${item.id}/swiper`}>
                                    <img className="w-full h-full " src={item.img} alt="" />
                                </Link>
                                <div className="flex w-full h-[40px]  text-white">
                                    <div className="w-3/5 h-full bg-gray-700 text-base flex items-center">
                                        <h2 className="mx-4">{item.title}... </h2>
                                    </div>
                                    <div className="w-2/5 h-full bg-red-600 flex items-center justify-center">
                                        <p className="text-md ">$ {item.price},000</p>
                                    </div>
                                </div>
                                <div className="w-full ">
                                    <div className="w-[90%] flex justify-between py-[8px] m-auto text-sm   ">
                                        <p>{item.address}</p>
                                        <p>#{item.homeId} </p>
                                    </div>
                                    <div className=" w-[90%] m-auto flex justify-between  py-[20px]  items-center">
                                        <div className="w-1/2 flex justify-between  ">
                                            <div className="flex gap-[5px] items-center">
                                                <LuBedDouble />
                                                <p>{item.bed}</p>
                                            </div>
                                            <div className="flex gap-[5px] items-center">
                                                <LuBath />
                                                <p>{item.bathroom}</p>
                                            </div>
                                            <div className="flex gap-[5px] items-center">
                                                <TbTextResize />
                                                <p>{item.land}m</p>
                                            </div>
                                        </div>
                                        <button className="hover:bg-red-600 px-[10px] h-8 text-white rounded-sm bg-gray-700 ">
                                            <Link to={`single/${item.id}/swiper`}>View</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                    ))

                }

            </Swiper>
        </>
    );
}


export default Card_swiper;