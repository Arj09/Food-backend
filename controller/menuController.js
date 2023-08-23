const asyncHandler = require("express-async-handler");
const Menu = require("../model/menuModel")
const Hotal = require("../model/hotalModel")



const createMenu = asyncHandler( async (req, res)=>{
    const { name, price, description } = req.body.menuList;
    const hotalId = req.params.id
    if(!name || !price || !description){
        res.status(400)
        throw new Error("all filed all mandatory")
        
    }
    console.log(req.body)


    const hotal = await Hotal.findOne({_id: hotalId})
    const menu = await Menu.findOne({hotal_id : hotalId})
    if(menu){
        menu.menuList.push({name , price, description})
        await menu.save()

        res.status(202).send("Menu created")


    }else{
        const menu1 = await Menu.create({
            hotal_id : hotalId,
            menuList:[{ name, price , description}]
    
            
            
          
        })
    
       
    
        res.status(202).json(menu1)

    }
    
   
})





const getMenu = asyncHandler( async (req, res)=>{
    const hotalID = req.params.id
    const hotal = await Hotal.findOne({_id: hotalID})
   
    const menu = await Menu.find({hotal_id:hotalID})
    res.status(200).json(menu)


})



module.exports ={createMenu, getMenu}
