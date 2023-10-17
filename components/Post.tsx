import { IPost } from "@/shared/interfaces/post.interface";
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { AiOutlineHeart } from 'react-icons/ai'
import { FaRegCommentDots } from 'react-icons/fa'
import { BsBookmark } from 'react-icons/bs'
import { HiOutlineEmojiHappy } from 'react-icons/hi'

export default function Post({ id, username, userImg, img, caption }: IPost) {
    return (
        <div className="bg-white my-7 border rounded-md">
            <div className="flex items-center p-5">
                <img 
                    className="h12 rounded-full object-cover border p-1 mr-3" 
                    src={userImg} 
                    alt={username} 
                />
                <p className="font-bold flex-1">{username}</p>
                <BiDotsHorizontalRounded className="h-5" />
            </div>

            <img className="object-cover w-full" src={img} alt={caption} />

            <div className="flex justify-between px-4 pt-4">
                <div className="flex space-x-4">
                    <AiOutlineHeart className="btn" />
                    <FaRegCommentDots className="btn" />
                </div>
                <BsBookmark className="btn" />
            </div>

            <p className="p-5 truncate">
                <span className="font-bold mr-2">{username}</span>{caption}
            </p>

            <form className="flex items-center p-4" action="">
                <HiOutlineEmojiHappy className="h-7" />
                <input className="boder-none flex-1 focus:ring-0" type="text" placeholder="Diga algo sobre isso..." />
                <button className="text-blue-400 font-bold">Postar</button>
            </form>
        </div>
    )
}
