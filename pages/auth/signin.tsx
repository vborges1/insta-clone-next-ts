import { getProviders, signIn } from "next-auth/react"
import Header from "@/components/Header"

export default function signin({ providers }: any) {
    return (
        <>
            <Header />
            <div className="flex justify-center space-x-7 mt-20">
                <img className="hidden object-cover rotate-6 md:inline-flex md:w-48" src={`/images/instaclone.jpg`} alt="instagram-image" />
                <div className="">
                    { Object.values(providers).map((provider: any) => (
                        <div key={provider.name} className="flex flex-col items-center">
                            <img className="w-32 object-cover" src={`/images/insta-logo3.jpg`} alt="" />
                            <p className="text-sm italic my-10 text-center">Este app foi feito apenas para o intuito de aprendizado</p>
                            <p className="text-sm italic my-10 text-center">This app is created for learning purposes</p>
                            <button className="bg-red-400 rounded-lg p-3 text-white">Entrar com { provider.name }</button>
                        </div>
                    ))}
                </div>
            </div>   
        </>
    )
}

export async function getServerSideProps(context: any) {
    const providers = await getProviders()
    return {
        props: { providers }
    }
}