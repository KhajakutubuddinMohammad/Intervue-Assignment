const express = require("express");
const cors = require("cors");
const pollRoutes = require("./routes/pollRoutes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// Poll routes
app.use("/api/polls", pollRoutes);

module.exports = app;
