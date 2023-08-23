const asyncHandler = require("express-async-handler");
const Hotal = require("../model/hotalModel")



const createHotal = asyncHandler( async (req, res)=>{
    const { name, location } = req.body;
    console.log(req.body)

    if(!name || !location){
        res.status(400)
        throw new Error("all filed all mandatory")
        
    }
    const hotalavailable = await Hotal.findOne({name});
    if(hotalavailable) {
        res.status(400)
        throw new Error("hotal already register")
        
    }
    
    const hotal = await Hotal.create({
        name,
        location,
      
    })

   

    res.status(202).json(hotal)
})





const getHotal = asyncHandler( async (req, res)=>{
    const hotal = await Hotal.find()
    res.status(200).json(hotal)


})



module.exports ={getHotal , createHotal}
