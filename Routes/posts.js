const express = require('express');
const router = express.Router(); // the post route. 
const Post = require('../models/Post');

// First get all the posts in DB and respond with all these posts. when a GET request is made to the root route, /posts.
router.get('/', async (req, res) =>{
    try{
        const posts = await Post.find(); // to get back all the data. Awaite is a promise. The code won't go further if until it finds the data in the database. 
        res.json(posts);
    }catch(err){ // if we don't get anything/posts. Respond with an err message 
        res.json({message:err});
    }
});

//respond to POST request on the route (/posts). 
router.post('/', async (req, res) => { // Function which have async have A special key
    const post = new Post({ // New post from the model. We make a new schema
        title: req.body.title,
        pris: req.body.pris,
        image: req.body.image
    });

    try{
        const savedPost = await post.save(); // Saving the data to our database. .save() moongose package.  
        res.json(savedPost);
    }catch(err){
        res.json({message: err});
    }
});

module.exports = router; //



