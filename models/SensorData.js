const mongoose = require("mongoose");

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

 timestamp:{
  type:Date,
  default:Date.now
 }

});

module.exports = mongoose.model("SensorData", sensorSchema);