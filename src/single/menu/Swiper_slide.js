import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
// Import Swiper React components
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';



function Swiper_slide() {

    // let item = useLocation().state
    // console.log(item.images)

    // let Id = useParams().id
    // console.log(images)

    // useEffect(() => {
    //     let newArr = fake_data.filter(el => el.id == Id)[0]
    //     setImages(newArr)
    // }, [])

    // console.log(Id)
    const slides = [
        {
            id: 1,
            url: "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
            id: 2,
            url: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
            id: 3,
            url: "https://images.pexels.com/photos/808465/pexels-photo-808465.jpeg?auto=compress&cs=tinysrgb&w=400"
        }
    ]

    return (
        <>
            <Swiper
                rewind={true}
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="relative max-w-[1400px] h-[500px]   truncate  "
            >
                {
                    slides.map(pho => (

                        < SwiperSlide className='' > <img className='block w-full h-full object-cover' src={pho.url} /></SwiperSlide>
                    ))

                }

            </Swiper >
        </>
    )
}

export default Swiper_slide;