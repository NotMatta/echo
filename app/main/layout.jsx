"use client"
import SideBar from "@/components/sidebar-component"
import { Menu } from "lucide-react"
import { useState } from "react"

const Layout = ({children}) => {
    const [isVisible,setVisible] = useState(false)
    return(
        <div className="flex h-screen w-full relative">
            <SideBar isVisible={isVisible} setVisible={setVisible}/>
            <div onClick={() => {setVisible(false)}} className={`absolute w-full h-full top-0 left-0 bg-black md:hidden ${isVisible? "opacity-20" : "opacity-0 hidden"}`}></div>
            <button onClick={() => {setVisible(true)}} className="md:hidden"><Menu/></button>
            {children}
        </div>
    )
}

export default Layout
