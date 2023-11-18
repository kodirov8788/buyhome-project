import React from 'react'
import { IoIosSearch } from "react-icons/io";

function Firstmain() {
    return (
        <div className='firstmaindiv w-full lg:h-[800px] flex items-center justify-center'>
            <div className="w-[720px] h-[250px] border-2 border-[red] translate-y-[40px] flex flex-col justify-end">
                <h1 className='w-full p-[5px] flex justify-center font-[700] text-[40px] text-white'>Find your new Home.</h1>
                <form className='flex w-full mb-[20px]' action="">
                    <input className='headinput w-[550px] h-[60px] rounded-s-[8px] indent-[10px] flex items center
                     ' type="text" placeholder='Search by City, Area or Property ID' />
                    <div className="w-[115px] bg-white"></div>
                    <button className='bg-[red] w-[55px] rounded-r-[8px] flex items-center justify-center text-[30px] text-white'>
                        <IoIosSearch />
                    </button>
                </form>
                <div className="w-full border-[1px] border-[orange] h-[50px]">
                    <select name="" id="">
                        <option value="Any">Any</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Bungalow">Bungalow</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Commercial/Residentil Building">Commercial/Residentil Building</option>
                        <option value="House">House</option>
                        <option value="Land">Land</option>
                        <option value="Mainsonette">Mainsonette</option>
                        <option value="Plot">Plot</option>
                    </select>
                    <select name="" id="">
                        <option value="To Buy">To Buy</option>
                        <option value="To Rent">To Rent</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Firstmain