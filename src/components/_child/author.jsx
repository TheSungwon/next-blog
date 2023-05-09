import Image from "next/image";
import Link from "next/link";
import faker from "faker";
import { useEffect, useState } from "react";


export default function author(){
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(!loading);
    },[]);
    
    return(
        <div className="author flex py-5">
            <Image src={"/images/main.png"} className="rounded-full" width={50} height={1} alt=""/>
            <div className="flex flex-col justify-center px-4">
                <Link href={"/"} className="flex flex-col justify-center px-4">
                    <span className="font-bold text-gray-500 hover:text-gray-50">
                        {loading? faker.animal.bear(): "loading..."}</span>
                    <span className="text-sm text-left text-gray-50">
                    {loading? faker.animal.cat(): "loading..."}</span>
                </Link>
            </div>

        </div>
    )
}