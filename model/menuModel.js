const mongoose = require('mongoose')

const productCartSChema = mongoose.Schema({


    hotal_id: {
        type: String,
        required: true,
    },

    menuList :[
        {
            
            name: {type: String},
            price: { type: Number},
            description: { type: String}

        }
    ],
   
 
},{
    timestamps : true
})

module.exports = mongoose.model("menuList", productCartSChema)