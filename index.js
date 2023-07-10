const express = require('express');
const app = express();


const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/VehicleBooking");

const booking_routes = require("./routes/bookingRoute");

app.use("/api", booking_routes);


app.listen(3001, function(){
    console.log("Server is running on the port no: 3001");
})