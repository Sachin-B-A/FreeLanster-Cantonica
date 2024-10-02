const mongoose = require('mongoose');

const DB = process.env.DATABASE;

mongoose.connect('mongodb+srv://sachinba20:09BdaTHlL1hg6q4G@cluster0.zjzb8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => {
    console.log('connection successful');
}).catch((err) => console.log('Connection Unsuccessful :('));
