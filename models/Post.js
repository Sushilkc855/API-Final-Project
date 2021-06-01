const mongoose = require('mongoose');// inporting mongoose package

// In this file we are gonna create a Schema. It represents how that post looks. Ex. Title, img etc

const PostSchema = mongoose.Schema({ // we are getting these functionallty from mongoose. 
    title: {
        type: String,
        required: true
    },
    pris: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Posts', PostSchema);