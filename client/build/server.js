"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// socket.io server
const socket_io_1 = require("socket.io");
const socket = new socket_io_1.Server(3000);
socket.on("connection", (socket) => {
    console.log("a user connected");
    socket.on("disconnect", () => {
        console.log("user disconnected");
    });
});
