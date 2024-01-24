const mongoose = require('mongoose')


const OrderSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    bedroom: {
        type: Number,
        required: true
    },
    bath: {
        type: Number,
        required: true
    },
    area: {
        type: Number,
        required: true
    },
    location_url: {
        type: String,
        required: true
    },
    

});

// Create and export the Order model using the defined schema
module.exports = mongoose.model("Contact", OrderSchema);

