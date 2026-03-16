const mongoose = require("mongoose");

const connectDB = async () => {
 try{
   await mongoose.connect("mongodb://localhost:27017/shower_filter_system");
   console.log("MongoDB Connected");
 }catch(err){
   console.log(err);
 }
};

module.exports = connectDB;