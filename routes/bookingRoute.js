const express = require("express");
const booking_route = express();

booking_route.use(express.json());
booking_route.use(express.urlencoded({extended:true}))

const bookingController = require("../controllers/bookingController");

// Register the vehicle for the new users 

booking_route.post('/register/vehicle', bookingController.register_vehicle);


module.exports = booking_route;
