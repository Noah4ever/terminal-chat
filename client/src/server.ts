// socket.io server
import { Server } from "socket.io";

const socket = new Server(3000);

socket.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
