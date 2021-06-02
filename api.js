const express = require('express'); // gets the package into this file.Express is an Routing and middleware web framework
const app = express(); // creates a new express application for you
const mongoose = require('mongoose');
require('dotenv/config');
//This is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. This method is called as a middleware in your application using the code:
app.use(express.json());
//Middleware: It is those methods/functions/operations that are called BETWEEN processing the Request and sending the Response in your application method.

const postsRoute = require('./Routes/posts'); //Inporting the file in the folder
//This line of code shows a middleware function mounted on the /posts. The function is executed for any type of HTTP request on the /posts
app.use('/posts', postsRoute);//Everytime we go to /posts these postsRoute is gonna run. we can use app.use() to specify middleware as the callback function. mostly used to set up middleware for your application.


// respond with "hello there" when a GET request is made to the homepage
// GET method route. testing. 
app.get('/', (req, res)=> { // Post: to send message. Delete, get, patch(update). To handle get requests
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