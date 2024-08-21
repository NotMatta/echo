"use client"
import { useSocket } from "@/components/socket-provider"
import { useState, useEffect } from "react"

export default function Home() {

    const [message,setMessage] = useState("")
    const [messages,setMessages] = useState([])
    const socket = useSocket()

    const sendMessage = () => {
        socket.emit("messageToServer",{message})
        setMessage("")
    }
    useEffect(() => {
        socket.off("response").on("response",(data) => {
        console.log(data)
        })
    },[socket])

    return(
        <div>
            <input value={message} onChange={(e) => {setMessage(e.target.value)}}/>
            <button onClick={sendMessage}>Send Message</button>
        </div>
    );
}
