import React from 'react'
import navlogo from "../images/logo-1.png"

function Navbar() {
    return (
        <div className='fixed w-full'>
            <nav className='border-2 border-[red] w-full h-[200px] flex justify-between px-[130px] items-center '>
                {/* navbar logo */}
                <div className=" w-max h-full">
                    <a href="#"><img src={navlogo} alt="" /></a>
                </div>

                {/* ul */}
                <ul className='text-white md:flex md:justify-between  h-max md:w-[700px]'>
                    <li className=' p-1 font-[700] h-max hover:border-white border-b-2 border-transparent'>
                        <a className='' href="#">Buy</a>
                    </li>
                    <li className='p-1 font-[700] h-max hover:border-b-2 hover:border-white'>
                        <a className='' href="#">Rend</a>
                    </li>
                    <li className=' p-1 font-[700] h-max hover:border-b-2 hover:border-white'>
                        <a className='' href="#">Land</a>
                    </li>
                    <li className='p-1 font-[700] h-max hover:border-b-2 hover:border-white'>
                        <a className='' href="#">Free Services</a>
                    </li>
                    <li className=' p-1 font-[700] h-max hover:border-b-2 hover:border-white'>
                        <a className='' href="#">
                            <select className='text-black' name="project" id="project">
                                <option value="">Project</option>
                                <option
                                    className='outline-[none] w-max' value="larnaka">Larnaka
                                </option>
                                <option className='outline-[none] w-max' value="faros">Faros</option>
                            </select>
                        </a>
                    </li>
                    <li className='p-1 font-[700] h-max hover:border-b-2 hover:border-white'><a className='' href="#">About</a></li>
                    <li className=' p-1 font-[700] h-max hover:border-b-2 hover:border-white'><a className='' href="#">News</a></li>
                    <li className='p-1 font-[700] h-max hover:border-b-2 hover:border-white'><a className='' href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar