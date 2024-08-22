"use client"
import { useContext, useState, useEffect, createContext } from "react";
import io from "socket.io-client"

const socket = io.connect("http://localhost:8001")
const SocketContext = createContext(socket)
console.log("yee")

const SocketProvider = ({children}) => {
    return(
        <SocketContext.Provider value={{socket}}>
            {children}
        </SocketContext.Provider>
    )
}

const useSocket = () => {
    return useContext(SocketContext).socket
}

export {
    SocketProvider,
    useSocket
}
