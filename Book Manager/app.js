const express = require('express');
const app = express();

const tasks = require('./routes/tasks');
const connectDB = require('./db/connect')
require('dotenv').config();
const notFound = require('./routes/not-found');
app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1/tasks',tasks)
app.use(notFound);

const port = 3000;


const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log('server is running...'))
    } catch (error) {
        console.log(error);
    }
}

start()