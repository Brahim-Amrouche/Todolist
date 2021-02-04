const express=require('express');
const router=express.Router();

//Item Models

const Item=require('../../models/Item');

//@route Get api/items
//@desc Get ALL items
//@acces public

router.get('/',(req,res)=>{
    Item.find()
        .sort({date:-1})
        .then(item=>{
            res.json(item)
        })
})


//@route Post api/items
//@desc Create an Item
//@acces public

router.post('/',(req,res)=>{
    const newItem=new Item({
        name:req.body.name
    })

    newItem.save().then(item=>res.json(item));
})

//@route Delete api/items
//@desc Deletes an item
//@acces public

router.delete('/:id',(req,res)=>{
    Item.findById(req.params.id)
        .then(item=>item.remove().then(()=>res.json({succes:true})
        ))
        .catch(err=>res.status(404).json({succes:false}))
})

module.exports = router;