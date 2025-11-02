import io from "socket.io-client";

const socketIO = io("http://localhost:5000");

export { socketIO };
