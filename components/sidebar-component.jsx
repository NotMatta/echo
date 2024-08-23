"use client"
import { AudioWaveform, Plus } from "lucide-react"

const SideBar = ({isVisible,setVisible}) => {

    return(
        <div className={`h-full ${isVisible? "translate-x-0 rounded-e-xl" : "-translate-x-full"} absolute md:static md:translate-x-0 md:rounded-none bg-background duration-200 md:duration-0 overflow-y-scroll w-2/3 md:w-16 border flex flex-col px-2 md:px-0 md:items-center pb-2 gap-2 *:duration-200 *:shrink-0 no-scrollbar z-10`}>
            <div className="flex flex-col md:items-center bg-background sticky top-0 pt-1 gap-1">
                <div className="flex gap-4">
                    <div className="text-foreground rounded-xl size-12 flex items-center justify-center hover:bg-foreground hover:text-background">
                        <AudioWaveform size="32px"/>
                    </div>
                    <h3 className="font-bold md:hidden">Echo</h3>
                </div>
                <div className="border-t w-12"/>
            </div>
            {new Array(20).fill("").map((_el,key) => (<div key={key} className="flex items-center gap-4">
                    <div className="size-12 border rounded-xl hover:rounded-lg"></div>
                    <p className="md:hidden">ServerName~ </p>
                </div>
            ))}                    
            <div className="size-12 border rounded-xl hover:rounded-lg flex items-center justify-center bg-border"><Plus/></div>
        </div>
    )
}

export default SideBar
