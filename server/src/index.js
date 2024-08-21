const express = require("express")
const cors = require("cors")
const http = require("http")
const {Server} = require("socket.io")

const app = express()
app.use(cors())

const server = http.createServer(app)
const io = new Server(server , {
    cors:{
        origin: "http://localhost:3000"
    }
})
io.on("connection", (socket) => {
    const socketId = socket.id
    console.log(`${socketId} has connected!`)
    socket.emit("established_connection",{message:"You are connected"})
    socket.on("disconnect", () => {
        console.log(`${socketId} has disconnected!`)
    })

    socket.on("messageToServer",(data) => {
        console.log({...data, from: socketId})
        socket.broadcast.emit("response",{message:`you sent ${data.message}`})
    })
})

server.listen(8001, () => {
    console.log("server is up!")
})
