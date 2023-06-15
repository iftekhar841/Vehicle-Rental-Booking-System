const express = require('express');
const app = express();


const mongoose = require("./models/bookingModel");
mongoose.connect("mongodb://127.0.0.1:27017/Vehicle Booking");


app.listen(3000, function(){
    console.log("Server is running on the port no: 3000");
})