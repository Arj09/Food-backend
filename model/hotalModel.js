const mongoose = require('mongoose')

const hotalSchema = mongoose.Schema({
    name : {type: String, required: [true, "please enter hotal name"]},
    location :  {type: String, required: [true, "please enter hotal location name"]}

   
 
},{
    timestamps : true
})

module.exports = mongoose.model("hotel", hotalSchema)