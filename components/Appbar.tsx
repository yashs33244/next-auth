"use client"

import { signIn, signOut , useSession} from "next-auth/react"

export function Appbar(){
    const session = useSession();
    return <>
        <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center mb-4">
            <button
                className=" mr-4 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="button"
                data-ripple-light="true"
                onClick={()=> signIn()}
                >
                SignIn
            </button>
            <button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="button"
                data-ripple-light="true"
                onClick={()=> signOut()}
                >
                SignOut
            </button>
            </div>
            {JSON.stringify(session)}
        </div>
        </div>
    </>
}