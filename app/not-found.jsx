"use client"

import { Loader } from "lucide-react"

const { useRouter } = require("next/navigation")

const NotFound = () => {
    const router = useRouter()
    router.push("/main/home")
    return(
        <div className="w-screen h-screen flex justify-center items-center">
            <Loader className="animate-spin"/>
        </div>
    )
}

export default NotFound
