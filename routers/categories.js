const {Category} = require('../models/category');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const categoryList = await Category.find();

        if(!categoryList) {
            res.status(500).json({succes: false})
        }
        res.status(200).send(categoryList);
})

router.get('/:id', async(req, res) =>{
    const category = await Category.findById(req.params.id);
    if(! category) {
        res.status(500).json({message: 'The category with the given ID was already taken' })
    }
    res.status(200).send(category);
})

router.put('/:id', async (req, res)=> {
    const category = await Categoty.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            icon: req.body.icon,
            color: req.body.color,
        }
    )
})

router.get('./:id', async(req,res)=> {
    const category = await Category.findById(req.paarams.id);

})
router.post('/', async (req, res) => {
    let user = new Category({
       name: req.body.name,
       icon: req.body.icon,  

       color: req.body.color,
    })
    user = await category.save();

    if(!category)
    return res.status(404).send('the category cannot be created!')

    res.send(category);  
})

router.put('/:id', async (req, res)=> {
    const product = await Category.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            icon: req.body.icon,
            color: req.body,color,
        },
        {new: true}
    )
    if(!category)
    return res.status(400).send('the category cannot be created!')

    res.send(category);  
})

//avi/v1/asdasdas
router.delete('/:id', (req, res)=>{
    Category.findByIdAndRemove(req.params.id).then(category =>{
        if(category) {
            return res.status(200).json({success: true, message: 'the category is deleted!'})
        } else {
            return res.status(404).json({success: false , message: "category not found!"})
        }
    }).catch(err=>{
       return res.status(400).json({success: false, error: err}) 
    })
})

module.exports = router;
