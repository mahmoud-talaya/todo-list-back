const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./db/config')
const todoRouter = require('./routes/todo-router')
const authRoutes = require("./routes/auth");
const verifyToken = require("./routes/validate-token");



const apiPort = 6000

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.use('/list', todoRouter)
app.use("/api/user", authRoutes);


app.listen(apiPort , ()=>{console.log(`server running on port ${apiPort}`)} )