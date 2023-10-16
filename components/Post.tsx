import { IPost } from "@/shared/interfaces/post.interface";
import { BiDotsHorizontalRounded } from 'react-icons/bi'

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

            <img 
                className="object-cover w-full" 
                src={img} 
                alt={caption} 
            />
        </div>
    )
}
