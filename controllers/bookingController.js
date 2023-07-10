const Booking = require("../models/bookingModel");


const register_vehicle = async (req, res) => {
    console.log("inside register ");
    try {

        const booking = new Booking({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            vehicleType: req.body.vehicleType,
            rentedDate: req.body.rentedDate 
        });

        const bookingData = await Booking.findOne({vehicleType:req.body.vehicleType});

        if(bookingData) {
            res.status(200).send({success:true, msg:"This vehicle is already exits."})
        }
        else {
            const booking_data = await booking.save();
            res.status(200).send({success:true, data: booking_data})
        }

        
    } catch (error) {
        res.send(error.message);        
    }

}

module.exports = {
    register_vehicle,

}