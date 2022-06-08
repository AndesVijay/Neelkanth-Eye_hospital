const { string } = require('joi');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const addpatientSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type:String,
        required:true
    },
    address: {
        type: String,
        required:true
    },
    age: {
        type: Number,
        required: true
    },
    bloodgroup: {
        type: String,
        required: true,
        enum: ['A', 'B', 'O', 'AB']
    },
    // rhfactor: {
    //     type: String,
    //     required: true,
    //     enum: ['Positive(+ve)','Negative(-ve)']
    // },

    gender: {
        type: String,
        required: true,
        enum: ['male', 'female', 'other'],
    },

    problem: {
        type: String,
        required: true
    },

    symptoms: [
        {
            type: String,
            required:true
        }
    ]
})

module.exports = mongoose.model('AddPatient', addpatientSchema);