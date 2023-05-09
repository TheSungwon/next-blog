import Image from "next/image";
import Link from "next/link";
import faker from "faker";


export default function author(){
    return(
        <div className="author flex py-5">
            <Image src={"/images/main.png"} className="rounded-full" width={50} height={1}/>
            <div className="flex flex-col justify-center px-4">
                <Link href={"/"} className="flex flex-col justify-center px-4">
                    <span className="font-bold text-gray-500 hover:text-gray-50">{faker.name.firstName()}</span>
                    <span className="text-sm text-left text-gray-50">{faker.internet.email()}</span>
                </Link>
            </div>

        </div>
    )
}