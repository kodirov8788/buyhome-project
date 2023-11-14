import React from 'react'

function Photos() {
  return (
    <div className='w-[85%] border border-black m-auto flex flex-wrap '>
          <div className='w-1/2 shadow-slate-100  md:w-1/4'>
            <p className='text-xl py-[10px]'>Bedrooms</p>
            <p className='text-xl py-[10px]'>5</p>
          </div>
          <div className='w-1/2 shadow-slate-100  md:w-1/4'>
            <p className='text-xl py-[10px]'>Baths</p>
            <p className='text-xl py-[10px]'>5</p>
          </div>
          <div className='w-1/2 shadow-slate-100  md:w-1/4'>
            <p className='text-xl py-[10px]'>Covered</p>
            <p className='text-xl py-[10px]'>5</p>
          </div>
          <div className='w-1/2 shadow-slate-100  md:w-1/4'>
            <p className='text-xl py-[10px]'>Land</p>
            <p className='text-xl py-[10px]'>5</p>
          </div>
        </div>
  )
}

export default Photos