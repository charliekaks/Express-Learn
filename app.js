const express = require('express');
const app = express();
const taskRoutes = require('./routes/task');
const connectDB = require('./db/connection');
const notFound = require('./middleware/not-found');
const error = require('./middleware/error-middleware')
require('dotenv').config()

app.get('/hello',(req, res)=>{
    res.send("Hello World")
})


//Middleware 
app.use(express.static('./public'))
app.use(express.json());

//routes
app.use('/api/v1/tasks',taskRoutes);
app.use(notFound);
app.use(error);



const port = 3000;

const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, ()=>{
            console.log(`Server on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()


