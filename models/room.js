const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    name : {
        type:String,
        require: true
    },

    maxcount : {
        type: Number,
        require: true
    },

    phonenumber : {
        type: Number,
        require: true
    },

    rentperday : {
        type: Number,
        require: true
    },
    
    imageurls: [],

    currentbooking: [],
    type : {
        type: String,
        require: true
    },
    description : {
        type: String,
        require: true
    }

} , {
    timestamps: true,
})

const rooms = mongoose.model('room', roomSchema)
module.exports = rooms