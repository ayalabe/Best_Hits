const mongoose = require('mongoose')

// const is_image = require('is-image')
// const is_image_url = require('is-image-url')
// const validator = require('validator') 


var EventSchema = new mongoose.Schema({
    name_event: {
        type: String,
        required: true,
        trim: true
    },
    place: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        required: true,
        trim: true
    },
    artists: [{ //reference to Artist
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artist',
        required: true
    }]
    
}, { timestamps: true });


const Event = mongoose.model('Event', EventSchema);

module.exports = Event