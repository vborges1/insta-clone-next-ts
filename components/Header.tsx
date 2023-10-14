import Image from "next/image";
import { AiOutlineSearch, AiOutlinePlusCircle, AiFillHome } from 'react-icons/ai'

export default function Header() {
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30">
        <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
            <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
                <Image 
                    src={`/images/insta-logo.png`} 
                    layout="fill" 
                    alt="Instagram clone" 
                    className="object-contain"
                />
            </div>

            <div className="cursor-pointer h-24 w-10 relative lg:hidden">
                <Image 
                    src={`/images/insta-logo2.png`} 
                    layout="fill" 
                    alt="Instagram clone" 
                    className="object-contain"
                />
            </div>

            <div className="relative mt-1">
                <div className="absolute top-2 left-2">
                    <AiOutlineSearch className="h-5 text-gray-500" />
                </div>
                <input type="text" className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md" />
            </div>

            <div className="flex space-x-4 items-center">
                <AiFillHome className="hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
                <AiOutlinePlusCircle className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
                <img src={`/images/squidward.jpg`} alt="user-image" className="h-10 rounded-full cursor-pointer" />
            </div>
        </div>
    </div>
  )
}
