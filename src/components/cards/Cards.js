import React from "react";
import { LuBedDouble, LuBath } from "react-icons/lu";
import { TbTextResize } from "react-icons/tb";
import { card } from "../../satatic_data";
import { Link } from "react-router-dom";
function Cards() {
  return (
    <div className="w-full h-[135vh] border border-black bg-gray-200">
      <div className="my-12"></div>
      <div className="w-[89%] h-[120vh]  m-auto my-14 grid grid-cols-3">
        
        

        {card.map((item) => (
          <div key={item.id} className="w-[420px] h-auto mb-5 mr-5  bg-white">
            <img className="w-full h-64" src={item.img} alt="" />
            <div className="flex w-full h-8 text-white">
              <div className="w-3/5 h-full bg-gray-700 text-base flex items-center">
                <h2 className="mx-4">{item.title}... </h2>
              </div>
              <div className="w-2/5 h-full bg-red-600">
                <h3 className="text-xl mx-8">$ {item.price},000</h3>
              </div>
            </div>
            <div className="w-full h-24">
              <div className="flex gap-28 mx-5 text-lg">
                <h1>{item.address}</h1>
                <h1>#{item.homeId} </h1>
              </div>
              <div className="flex gap-36 mx-5 my-12 ">
                <div className="flex gap-1">
                  <LuBedDouble />
                  <h1>{item.bed}</h1>
                  <LuBath />
                  <h1>{item.bathroom}</h1>
                  <TbTextResize />
                  <h1>{item.land}m2</h1>
                </div>
                <button className="hover:bg-red-600 w-24 h-8 text-white rounded-sm bg-gray-700">
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
