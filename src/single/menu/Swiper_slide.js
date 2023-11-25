import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
// Import Swiper React components
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fake_data } from '../../static_data';



function Swiper_slide() {
    const [images, setimages] = useState([])

    let Id = useParams().id
    console.log(images)

    useEffect(() => {
        let newArr = fake_data.filter(el => el.id == Id)[0]
        setimages(newArr)
    }, [])

    console.log(Id)
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
                    images.images?.map((item) => (
                        <SwiperSlide className='' key={item.id}> <img className='block w-full h-full object-cover' src={item.img} /></SwiperSlide>
                    )

                    )
                }

            </Swiper>
        </>
    )
}

export default Swiper_slide;