const mongoose = require('mongoose')
const validator = require('validator')

var UserSchema = new mongoose.Schema({
    id: {
        type: Number,
        // unique: true,
        // required: true,
        // trim: true
    },
    name: {
        type: String,
        // required: true,
        // trim: true
    },
    
    birth_year: {
        type: Number,
        // required: false,
        // default: 0,
        // validate(value) {
        //     if (value < 1900 || value > 2022) {
        //         throw new Error('Age must be a postive number')
        //     }
        // }
    },
    link: {
        
        type: String,
        // required: true,
        // trim: true,
        // validate(value) {
        //     if (!is_image(value) && !is_image_url(value))
        //         throw new Error('Bad link of picture')

        // }
        
    },

    songs: [{ 
        type: String,
        // required: true,
        // trim: true
    }]
    
    
}, { timestamps: true });

const Artist = mongoose.model('Artist', UserSchema);

module.exports = Artist