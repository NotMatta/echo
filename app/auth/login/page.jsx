"use client"
import { Button } from "@/components/ui/button"
import axios from "axios"
import Cookies from "js-cookie"
import { Input } from "@/components/ui/input"
import { Mail, KeyRound } from "lucide-react"
import { useRouter } from "next/navigation"

const LoginPage = () => {
    const router = useRouter()
    const HandleSubmit =  async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        try{
            const res = await axios.post("/api/auth/login",{email:formData.get("email"),password:formData.get("password")})
            const token = res.data.token
            Cookies.set("token",token,{expires: 1, path:"/"})
            router.push("/main/home")
        } catch(err){
            console.log(err)
            alert("smth happened")
        }
        console.log(formData)
    }

    return (
        <form className="flex flex-col items-center gap-2" onSubmit={HandleSubmit}>
            <h1>Login</h1>
            <div className="border rounded-xl px-2 flex gap-1 items-center">
                <Mail/>
                <Input required type="email" name="email" className="border-none bg-transparent" placeholder="Email here.."/>
            </div>
            <div className="border rounded-xl px-2 flex gap-1 items-center">
                <KeyRound/>
                <Input required type="password" name="password" className="border-none bg-transparent" placeholder="Password here.."/>
            </div>
            <Button type="submit" className="w-full">Sign in</Button>
        </form>
    )
}

export default LoginPage
