const app = require("./app");
const http = require("http");
const { Server } = require("socket.io");
const connectDB = require("./config/db");

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  },
  path: "/socket.io",
});

// Database connection
connectDB();

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("new-question-submitted", (question) => {
    console.log("A new question has been created", question);
    io.emit("new-question-submitted", question);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
