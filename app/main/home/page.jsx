"use client"

import { Button } from "@/components/ui/button"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"

const Home = () => {

    const router = useRouter()

    return(
        <div>
            Logged in brudah<br/>
            <Button variant="outline" onClick={() => {Cookies.remove("token");router.push("/auth/login")}}>Sign out</Button>
        </div>
    )
}

export default Home
