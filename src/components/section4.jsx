import Image from "next/image"
import Link from "next/link"
import Author from "./_child/author"
import faker from "faker";
import { useEffect, useState } from "react";

export default function section4(){
    return(
        <section className="container mx-auto md:px-20 py-10">
            <div className="grid lg:grid-cols-2">
                <div className="item">
                    <h1 className="font-bold text-4xl py-12 text-clip">Business</h1>
                    <div className="flex flex-col gap-6">
                        {Post()}
                        {Post()}
                        {Post()}
                    </div>
                </div>

                <div className="item">
                    <h1 className="font-bold text-4xl py-12 text-clip">Travel</h1>
                    <div className="flex flex-col gap-6">
                        {Post()}
                        {Post()}
                        {Post()}
                    </div>
                </div>
            </div>
        </section>
    )
}

function Post(){
    
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        {loading==false? setLoading(!loading):null}
    },[]);

    if(loading){
    
    return(
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
                <Link href={"/"} className="rounded">
                    <Image src={"/images/cat.jpg"} width={300} height={300} alt=""/>
                </Link>
            </div>

            <div className="info flex justify-center flex-col">
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
                <div className="title">
                <Link href={"/"}>
                        <span className="text-3xl md:text-4xl font-bold"
                         style={{color:`${faker.commerce.color()}`}}>
                        {loading? faker.hacker.phrase():"loading..."}
                        </span>
                    </Link>
                </div>
                    <Author></Author>
            </div>
        </div>
    )
    }else{
        return "loading...";
    }
}