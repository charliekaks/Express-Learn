const express = require('express');
const app = express();
const taskRoutes = require('./routes/task');


app.get('/hello',(req, res)=>{
    res.send("Hello World")
})


//Middleware to get json data
app.use(express.json());

//routes
app.use('/api/v1/tasks',taskRoutes);



const port = 3000;

app.listen(port, ()=>{
    console.log(`Server on port ${port}`)
})
