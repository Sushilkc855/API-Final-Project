const express = require('express'); // gets the package into this file 
const app = express(); // we execute
const mongoose = require('mongoose');
require('dotenv/config');

app.use(express.json()); // every time we hit req this body parser runs
//Middleware: A function that execute routes are being hite
// Import routes
const postsRoute = require('./Routes/posts'); //Inporting the folder and the file
app.use('/posts', postsRoute);//Everytime we go to /posts these postsRoute is gonna run



// Routes 
app.get('/', (req, res)=> { // Post: to send message. Delete, get, patch(update)
    res.send('Hello there')// '/' Route we wanna go to. Just localHost
});

//connect to DataBase
mongoose.connect(process.env.DB_CONNECTION,  //For securty reason
{ useNewUrlParser: true,
    useUnifiedTopology: true }, 
 () => console.log('DB is connected')
 );


app.listen(3000,() =>{
    console.log('server is running')
} ); // listening to the server(port name you want to listen to )