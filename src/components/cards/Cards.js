import React from "react";
import { LuBedDouble, LuBath } from "react-icons/lu";
import { TbTextResize } from "react-icons/tb";
import { card } from "../../satatic_data";
import { Link } from "react-router-dom";
function Cards() {
  return (
    <div className="w-full   bg-gray-200 py-[30px] ">
      <div className="text-2xl my-12 sm:text-4xl text-center">
        <h1>Featured Properties</h1>
        <div className="w-20 sm:w-28 h-[5px]  bg-red-700 m-auto mt-5"></div>
      </div>
      <div className="w-full sm:w-[89%]  py-[30px] m-auto flex flex-wrap  justify-center lg:justify-between  ">
        {card.map((item) => (
          <div
            key={item.id}
            className="w-[80%]  my-[10px] sm:w-[70%] md:w-[60%] lg:w-[32%]       bg-white"
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
        ))}
      </div>
      
    </div>
  );
}

export default Cards;
