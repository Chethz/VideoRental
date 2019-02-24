const Joi = require('joi');
const mongoose = require('mongoose');

const Customer = mongoose.model('Customer', ({
    isGold : {
        type : Boolean,
        default: false
    },
    name : {
        type : String,
        required : true,
        minlength : 5,
        maxlength : 50
    },
    phone : {
        type : String,
        required : true,
        minlength : 5,
        maxlength : 50
    }
}));

function validateCustomer(customer){
    const schema = {
        isGold : Joi.boolean(),
        name : Joi.string().trim().regex(/^[a-zA-Z]+$/).min(5).max(50).required(),
        phone : Joi.string().trim().regex(/^[0-9]+$/).min(5).max(50).required()
    };
    return Joi.validate(customer, schema);
}

exports.Customer = Customer;
exports.validate = validateCustomer;