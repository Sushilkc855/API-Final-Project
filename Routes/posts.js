const express = require('express');
const router = express.Router(); // the post route. 
const Post = require('../models/Post');

router.get('/', async (req, res) =>{
    try{
        const posts = await Post.find(); // to get back all the data
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});


router.post('/', async(req, res) => {
    const post = new Post({ // New post from the model
        title: req.body.title,
        pris: req.body.pris,
        image: req.body.image
    });

    try{
        const savedPost = await post.save(); // Saving the data to our database    
        res.json(savedPost);
    }catch(err){
        res.json({message: err});
    }
});

module.exports = router;



