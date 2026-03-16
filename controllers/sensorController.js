const Sensor = require("../models/SensorData");

exports.addSensorData = async (req,res)=>{

 try{

  const sensor = new Sensor(req.body);
  await sensor.save();

  res.json({
   message:"Sensor data saved",
   data:sensor
  });

 }catch(err){
  res.status(500).json(err);
 }

};

exports.getSensorData = async (req,res)=>{

 try{

  const data = await Sensor.find();
  res.json(data);

 }catch(err){
  res.status(500).json(err);
 }

};