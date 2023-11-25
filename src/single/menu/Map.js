import React from 'react'
import { useLocation } from 'react-router-dom'

function Map() {
  let item = useLocation()
  console.log(item.location)
  return (
    <div className='w-full h-full'>


      <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95872.49292629753!2d69.2584448!3d41.3302784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4bd7ca466b5%3A0xa84ef0b43d49e980!2sTashkent%20Zoo!5e0!3m2!1sen!2s!4v1700069696897!5m2!1sen!2s" allowfullscreen='' loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


    </div>
  )
}

export default Map