"use client"
import { useContext, useState, useEffect, createContext } from "react";
import io from "socket.io-client"

const socket = io.connect("http://localhost:8001")
const SocketContext = createContext(socket)

const SocketProvider = ({children}) => {

    useEffect(() => {
        socket.off("established_connection").on("established_connection",({message}) => {
            console.log(message)
        })
    },[socket])

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
