import { IPost } from "@/shared/interfaces/post.interface";

export default function Post({ id, username, userImg, img, caption }: IPost) {
    return (
        <div>
            <h1>{username}</h1>
        </div>
    )
}
