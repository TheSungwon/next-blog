import Image from "next/image"
import Link from "next/link"
import Author from "./_child/author"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css"
import faker from "faker";
import { useEffect, useState } from "react";



export default function section1() {
    
    SwiperCore.use([Autoplay])
    const bg = {
        background: "url('/images/main.png') no-repeat",
        backgroundPosition: "right"
    }
    return (
        <section className="py-16" style={bg}>
            <div className="container mx-auto md:px-20">
                <h1 className="font-bold text-4xl pb-12 text-center">

                    <Swiper className="swiper-slide"
                        // spaceBetween={50}
                        autoplay={{
                            delay:5000
                        }}
                        loop={true}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>{Slide()}</SwiperSlide>
                        <SwiperSlide>{Slide()}</SwiperSlide>
                        <SwiperSlide>{Slide()}</SwiperSlide>
                        <SwiperSlide>{Slide()}</SwiperSlide>
                        <SwiperSlide>{Slide()}</SwiperSlide>
                        
                    </Swiper>
                    
                </h1>
            </div>
        </section>
    )
}


function Slide() {
    
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(!loading);
    },[]);
    
    return (
        <div className="grid md:grid-cols-2">
            <div className="image">
                <Link href={"/"}>
                    <Image src={"/images/main.png"} width={300} height={300} alt=""/>
                </Link>
            </div>
            <div className="info justify-center flex-col">
                <div>
                    <Link href={"/"}> <span className="text-orange-600 hover:text-orange-300">
                        {loading? faker.internet.port(): "loading..."}
                    </span>
                    </Link>
                     <Link href={"/"}>
                        <span className="text-gray-600 hover:text-gray-50">
                        {loading? faker.name.jobType():"loading..."}
                        </span>
                    </Link>
                </div>
                <div className="title">
                <Link href={"/"}>
                        <span className="text-3xl md:text-6xl font-bold text-gray-200 hover:text-gray-500">
                        {loading? faker.hacker.phrase():"loading..."}
                        </span>
                    </Link>
                </div>
                <p className="text-gray-500 py-3">
                {loading? faker.lorem.word():"loading..."}
                </p>

                <Author />
            </div>
        </div>
    )
}