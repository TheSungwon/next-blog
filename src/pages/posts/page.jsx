import Image from "next/image"
import { useEffect, useState } from "react"
import Author from "../../components/_child/author"
import Realted from "../../components/_child/related"

export default function Page(faker){
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        {loading==false? setLoading(!loading):null}
        
    },[faker])

    console.log(loading)
    if(loading){
    return(
        <section className="container mx-auto md:px-2 py-16 w-1/2">
            <div className="flex justify-center">
                <Author></Author>
            </div>
            <div className="post py-10">
                <h1 className="font-bold text-4xl text-center pb-5">
                {faker.faker.name.title()}
                </h1>
                <p className="text-gray-500 text-xl text-center">
                {faker.faker.datatype.number()}
                </p>

                <div className="py-10">
                    <Image src={"/images/cat.jpg"} width={900} height={600} alt=""/>
                </div>

                <div className="content text-gray-200 text-lg flex flex-col gap-4">
                <p>{faker.faker.lorem.paragraph()}</p>
                <p>{faker.faker.lorem.paragraph()}</p>
                <p>{faker.faker.lorem.paragraph()}</p>
                </div>
                

            </div>

            <Realted></Realted>
        </section>
    )
    }else{
        "loading..."
    }
}