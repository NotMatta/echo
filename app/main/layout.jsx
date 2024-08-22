import { AudioWaveform } from "lucide-react"

const Layout = ({children}) => {
    return(
        <div className="flex h-screen w-full">
            <div className="h-full w-16 border flex flex-col items-center py-1 gap-1">
                    <div className="text-foreground rounded-xl size-12 flex items-center justify-center duration-100 hover:bg-foreground hover:text-background ">
                        <AudioWaveform size="32px"/>
                    </div>
                    <div className="border-t w-10"/>
            </div>
            {children}
        </div>
    )
}

export default Layout
