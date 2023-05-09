
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import Author from "./_child/author"
import { useEffect, useState } from "react";
import faker from "faker";



export default function section3(){
    return(
        <section className="container mx-auto md:px-20 py-10">
            <h1 className="font-bold text-4xl py-12 text-center">Most popular</h1>

            <Swiper
                slidesPerView={2}
            >
                <SwiperSlide>{Post()}</SwiperSlide>
                <SwiperSlide>{Post()}</SwiperSlide>
                <SwiperSlide>{Post()}</SwiperSlide>
                <SwiperSlide>{Post()}</SwiperSlide>
                <SwiperSlide>{Post()}</SwiperSlide>
            </Swiper>

        </section>
    )
}


function Post(){
    // console.log(faker)
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(!loading);
    },[]);
    
    return(
        <div className="grid">
            <div className="images">
                <Link href={"/"}>
                <Image src={"/images/cat.jpg"} className="rounded-t-full" width={600} height={350} alt=""/>
                </Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div>
                    <Link href={"/"}>
                        <span className="text-orange-600 hover:text-orange-300">
                        {loading? faker.internet.port(): "loading..."}
                        </span>
                    </Link>
                    <Link href={"/"}>
                        <span className="text-gray-600 hover:text-gray-50">
                        {loading? faker.name.jobType():"loading..."}
                        </span>
                    </Link>
                </div>
            </div>
            <div className="title">
                <Link href={"/"}>
                        <span className="text-3xl md:text-4xl font-bold"
                         style={{color:`${faker.commerce.color()}`}}>
                        {loading? faker.hacker.phrase():"loading..."}
                        </span>
                    </Link>
            </div>
            <p className="text-gray-500 py-3">
            {loading? faker.lorem.sentence(1):"loading..."}
            </p>
            <Author />
        </div>
    )
}