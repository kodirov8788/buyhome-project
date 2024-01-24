const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const route = require('./routes/route')
require("dotenv").config();

const app = express()

// Middleware
app.use(express.json())
app.use(cors())


// Mongo Connection 
const url = process.env.MONGO_URI;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(error => console.error("Error connecting to MongoDB:", error));


// Routes
app.use("/api", route); // User-related routes


// Server setup
const PORT = process.env.PORT || 5000; // Use process.env.PORT if defined, otherwise default to 5000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});