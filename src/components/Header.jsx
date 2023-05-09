import Link from "next/link"
import {ImFacebook, ImTwitter, ImYoutube} from "react-icons/im"

export default function Header(){
    return(
        <header className="bg-zinc-950">
            <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
                <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
                    <input type="text" placeholder="search..." className="mt-1 block w-60 px-3 py-2 border-slate-300 rounded-full text-sm shadow-sm placeholder-slate-500"/>
                </div>

                <div className="shrink w-80 sm:order-2">
                    <a className="font-bold uppercase text-3xl">Design</a>
                </div>

                <div className="w-96 order-3 justify-center">
                    <div className="flex gap-6">

                        <Link href={"/"}><ImFacebook color="#888888"/></Link>
                        <Link href={"/"}><ImTwitter color="#888888"/></Link>
                        <Link href={"/"}><ImYoutube color="#888888"/></Link>
                    </div>
                </div>
            </div>
        </header>
    )
}