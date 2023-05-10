import Image from "next/image"
import Link from "next/link"
import faker from "faker";
import Author from "./_child/author"
import { useEffect, useState } from "react";

export default function section2(){
    return(
        <section className="container mx-auto md:px-20 py-10">
            <h1 className="font-bold text-4xl py-12 text-center">latest posts</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
            </div>
        </section>
    )
}




function Post(){
    
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        {loading==false? setLoading(!loading):null}
    },[]);
    
    return(
        <div className="item">
            <div className="images">
                <Link href={"/"}>
                    <Image src={"/images/cat.jpg"} className="rounded-full" width={500} height={350} alt=""/>
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
                        <span className="text-xl font-bold">
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