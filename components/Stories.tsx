import minifaker from "minifaker";
import "minifaker/locales/en";
import { useEffect, useState } from 'react';
import Story from "./Story";
import { IUser } from "@/shared/interfaces/user.interface";

export default function Stories() {
    const [storyUsers, setStoryUsers] = useState([])
    useEffect(() => {
        const storyUsers = minifaker.array(20, (i: number) => ({
          username: minifaker.username({ locale: "en" }).toLowerCase(),
          img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
          id: i,
        }));
        setStoryUsers(storyUsers);
      }, []);

    return (
        <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-sm">
            {storyUsers.map((user: IUser) => (
                <Story key={user.id} username={user.username} img={user.img} />
            ))}
        </div>
    )
}
