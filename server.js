require('dotenv').config({ path: './.env' });
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const sensorRoutes = require("./routes/sensorRoutes");
const path = require("path");
console.log("ENV:", process.env.MONGO_URI);
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use("/api",sensorRoutes);

app.use(express.static(path.join(__dirname,"frontend")));

app.listen(5000,()=>{
 console.log("Server running on port 5000");
});