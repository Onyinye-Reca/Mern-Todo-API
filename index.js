const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();
//use express.json() to get data into the json format
app.use(express.json());

//port
const PORT = process.env.PORT || 5500;

//use cors
app.use(cors());

//import routes
const TodoItemRoute = require('./routes/todoItems')

//Connect to mongodb
mongoose.connect(process.env.DB_CONNECT)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

app.use('/', TodoItemRoute)


//Add port and connect to server
app.listen(PORT, () => console.log("Server connected"));
