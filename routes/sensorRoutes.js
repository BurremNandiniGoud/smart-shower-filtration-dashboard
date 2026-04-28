const express = require("express");
const router = express.Router();

const sensorController = require("../controllers/sensorController");

router.post("/sensor-data", sensorController.addSensorData);
router.post("/data", sensorController.addSensorData);

router.get("/sensor-data", sensorController.getSensorData);

module.exports = router;