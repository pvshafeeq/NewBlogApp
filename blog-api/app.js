const express = require('express');
const connectDB = require('./config/db')
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app=express();
const blog =require('./routes/api/blog');
const user =require('./routes/api/user');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect Database
connectDB();
const port =8082;

app.use('/api/blog',blog);
app.use('/api/user',user);
app.listen(port, ()=> console.log(`Server running on port ${port}`));