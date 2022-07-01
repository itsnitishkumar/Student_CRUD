const express = require('express')
const app = express()
const PORT = require('./config/serverConfig')
const StudentRoutes = require('./routes/students.routes')

StudentRoutes(app)

app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);
})