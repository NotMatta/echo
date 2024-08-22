import { NextResponse } from "next/server"
import Cookies from "js-cookie"

const middleware = async (req) => {
    const currentURL = new URL(req.url)
    if(currentURL.pathname.indexOf("/auth") == 0){
        if(!!(req.cookies.get("token"))){
            const targetURL = new URL("/main/home",req.url)
            return NextResponse.redirect(targetURL)
        }
    }
    if(currentURL.pathname.indexOf("/main") == 0){
        if(!(req.cookies.get("token"))){
            const targetURL = new URL("/auth/login",req.url)
            return NextResponse.redirect(targetURL)
        }
    }
    return NextResponse.next()
}

export default middleware
