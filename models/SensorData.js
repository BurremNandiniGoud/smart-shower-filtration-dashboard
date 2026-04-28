const mongoose = require("mongoose");

//saved into DataBase

const sensorSchema = new mongoose.Schema({

 device_id:{
  type:String,
  required:true
 },

 tds:{
  type:Number
 },

 flow_rate:{
  type:Number
 },

 temperature:{
  type:Number
 },

 value:{
  type:String
 },

 timestamp:{
  type:Date,
  default:Date.now
 }

});

module.exports = mongoose.model("SensorData", sensorSchema);