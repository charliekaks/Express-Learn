const mongoose = require('mongoose');


const connectDB = (url)=>{
    mongoose.connect(url,{
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex: true
        })
}

module.exports = connectDB;
