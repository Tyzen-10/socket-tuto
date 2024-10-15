const express = require('express');
const app = express(); //instance of express library
const http = require("http"); 
//express doesn't need http to create server.
//but socket.io recommends to do it this way.
const {Server} = require('socket.io');
const cors = require('cors');
app.use(cors()); //cors is kinda like a middleware that will prevent us from getting connection errors.

const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
})