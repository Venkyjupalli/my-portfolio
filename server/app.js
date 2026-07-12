const contactRoutes = require("./routes/contactRoutes");
const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

connectDB();

// Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/contact", contactRoutes);

// Test Route
app.get("/", (req, res) => {
    res.send("Portfolio Backend API is Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});