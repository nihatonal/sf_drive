const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema (
    {
    userName:{
        type: String,
        required: true
    },
    birthdayDate:{
        type: Date,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    passport: {
        type: String,
        required: true
    },
    datepassport: {
        type: Date,
        required: true
    },
    issued: {
        type: String,
        required: true
    },
    code: {
        type: String
    },
    license: {
        type: String,
        required: true
    },
    licenseDate: {
        type: Date,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
},
{
    image: {
        type: String
    },
    },{
        collection: 'image'
    }
)




module.exports =  mongoose.model('mytable', signUpTemplate );