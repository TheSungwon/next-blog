import Link from "next/link";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import NewsLetter from "./_child/newsletter"

export default function Footer(){
    const bg = {
        backgroundImage: "url('/images/cat.jpg') no-repeat",
        backgroundRepeat: "no-repeat",
        backgroundPosition:"bottom left"
    }

    return(

        <footer className="bg-gray-50" style={bg}>
            <NewsLetter></NewsLetter>
            <div className="container mx-auto flex justify-center py-12">
                <div className="py-5">
                    <div className="flex gap-6 justify-center">
                        <Link href={"/"}><ImFacebook color="#888888"/></Link>
                        <Link href={"/"}><ImTwitter color="#888888"/></Link>
                        <Link href={"/"}><ImYoutube color="#888888"/></Link>
                    </div>

                    <p className="text-gray-400 py-5">Copyright ©2023  All rights reserves | This is template is made with by sungOne</p>
                    <p className="text-gray-400 text-center">Terms & Condition</p>
                </div>
            </div>
        </footer>

    )
}