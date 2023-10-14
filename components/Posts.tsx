import { IPost } from "@/shared/interfaces/post.interface"
import Post from "./Post"

export default function Posts() {
    const posts: IPost[] = [
        {
            id: '1',
            username: 'vborges1',
            userImg: '/images/squidward.jpg',
            img: '/images/post-1.jpg',
            caption: 'E aí, está gostando do projeto ?'
        },
        {
            id: '2',
            username: 'vborges1',
            userImg: '/images/squidward.jpg',
            img: '/images/post-2.jpg',
            caption: 'E aí, está gostando do projeto (de novo) ?'
        }
    ]

    return (
        <div>
            {posts.map((post: IPost) => (
                <Post 
                    key={post.id} 
                    id={post.id}
                    username={post.username}
                    userImg={post.userImg}
                    img={post.img}
                    caption={post.caption}
                />
            ))}
        </div>
    )
}
