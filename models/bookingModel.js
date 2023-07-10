const mongoose = require('mongoose');

const booking = mongoose.Schema({
    firstName: {
        type:String,
        required: true
    },
    lastName: {
        type:String,
        required:true
    },
    vehicleType: {
        type: String,
        required:true
    },
    rentedDate: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Booking", booking)