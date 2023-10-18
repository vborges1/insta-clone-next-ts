import { IUser } from "@/shared/interfaces/user.interface";
import minifaker from "minifaker";
import "minifaker/locales/en";
import { useEffect, useState } from "react";

export default function Suggestions() {
    const [suggestions, setSuggestions] = useState([])
    useEffect(() => {
        const suggestions = minifaker.array(5, (i: number) => ({
            username: minifaker.username({ locale: "en" }).toLowerCase(),
            img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
            jobTitle: minifaker.jobTitle(),
            id: i,
        }));
        setSuggestions(suggestions);
    }, []);
      
    return (
        <div className="mt-4 ml-10">
            <div className="flex justify-between mb-5 text-sm">
                <h3 className="font-bold text-gray-400">Sugestões para você</h3>
                <button className="text-gray-600 font-semibold">Ver tudo</button>
            </div>
            {suggestions.map((user: IUser) => (
                <div key={user.id} className="flex items-center justify-between mt-3">
                    <img className="h-10 rounded-full border p-[2px]" src={user.img} />
                    <div className="flex-1 ml-4">
                        <h2 className="font-semibold text-sm">{user.username}</h2>
                        <h3 className="text-sm text-gray-400 truncate w-[230px]">{user.jobTitle}</h3>
                    </div>
                    <button className="font-semibold text-blue-400 text-sm">Seguir</button>
                </div>
            ))}
        </div>
    )
}
