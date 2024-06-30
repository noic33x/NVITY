const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 3000;
const dbUri = process.env.DB_URI;
//import routes
const userRoutes = require('./routes/user.routes');
const taskRoutes = require('./routes/task.routes');

//middleware
app.use(express.json());
app.use(cors())
//connect DB
mongoose.connect(dbUri)
    .then(() => {
        console.log("connect to DB");
        //routes
        app.use('/user', userRoutes)
        app.use('/task', taskRoutes)
        //Listen
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        })
    })
    .catch((err) => {
        console.log(err)
    })