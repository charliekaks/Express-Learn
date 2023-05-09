const express = require('express');
const app = express();
const taskRoutes = require('./routes/task');
const connectDB = require('./db/connection');
require('dotenv').config()

app.get('/hello',(req, res)=>{
    res.send("Hello World")
})


//Middleware to get json data
app.use(express.json());

//routes
app.use('/api/v1/tasks',taskRoutes);



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


