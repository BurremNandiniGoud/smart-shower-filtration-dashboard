const Sensor = require("../models/SensorData");

exports.addSensorData = async (req,res)=>{
 console.log("\n--- New Data Incoming ---");
 console.log("Body:", JSON.stringify(req.body));
 
 try{
  let dataToSave = { ...req.body };

  if (req.body.value && typeof req.body.value === 'string') {
    const rawData = req.body.value;
    console.log("Raw Bluetooth String:", rawData);
    
    const tdsMatch = rawData.match(/TDS[\s:]*(-?\d+\.?\d*)/i);
    const flowMatch = rawData.match(/Flow[\s:]*(-?\d+\.?\d*)/i);
    const tempMatch = rawData.match(/Temp[\s:]*(-?\d+\.?\d*)/i);

    if (tdsMatch) dataToSave.tds = parseFloat(tdsMatch[1]);
    if (flowMatch) dataToSave.flow_rate = parseFloat(flowMatch[1]);
    if (tempMatch) dataToSave.temperature = parseFloat(tempMatch[1]);
    
    console.log("Final Parsed Values:", { 
        tds: dataToSave.tds,
        flow: dataToSave.flow_rate, 
        temp: dataToSave.temperature 
    });
}

  if (!dataToSave.device_id) dataToSave.device_id = "default_device";

  const sensor = new Sensor(dataToSave);
  await sensor.save();

  console.log("✅ Data saved to MongoDB");
  res.json({ message:"Success", data:sensor });

 }catch(err){
  console.error("❌ Save Error:", err.message);
  res.status(500).json({ error: err.message });
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
