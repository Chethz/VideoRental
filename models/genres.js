const Joi = require('joi');
const mongoose = require('mongoose');

const Genre = mongoose.model('Genre', ({
    name: {
        type: String, 
        required: true, 
        min: 3,
        max: 50
    }
}));

function validateGenre(genre) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(genre, schema);
}

exports.Genre = Genre;
exports.validateGenre = validateGenre;