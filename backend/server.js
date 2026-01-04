import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js";
import { app, server } from "./lib/socket.js";


const PORT = ENV.PORT || 5000;

// Middleware
app.use(express.json({ limit: "5mb" }));
app.use(cookieParser());

app.use(
    cors({
        origin: process.env.CLIENT_URL,
        credentials: true,
    })
);

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

// ---------------- PRODUCTION FRONTEND SERVE ----------------
if (ENV.NODE_ENV === "production") {
    const __dirname = path.resolve();

    app.use(express.static(path.join(__dirname, "frontend", "dist")));

    app.get("*", (req, res) => {
        res.sendFile(
            path.join(__dirname, "frontend", "dist", "index.html")
        );
    });
}
// -----------------------------------------------------------

server.listen(PORT, () => {
    console.log("Server running on port: " + PORT)
    connectDB()
});


// import express from "express";
// import dotenv from "dotenv";

// import authRoutes from "./routes/auth.route.js"
// import messageRoutes from "./routes/message.route.js"


// dotenv.config();

// const app = express();

// const PORT = process.env.PORT || 3000;

// app.use("/api/auth", authRoutes);
// app.use("/api/message", messageRoutes);

// app.listen(PORT, () => console.log("Server running on port: " + PORT));