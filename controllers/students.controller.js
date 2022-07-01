
const StudentService = require('../services/students.services')
const bodyParser = require('body-parser')

var router = bodyParser.json();

const getStudentDetails = async(req,res)=>{

   const response = await StudentService.getStudentDetails()
    return res.json({
        response
    })
}
const addStudentDetails = async (req,res)=>{
   const data = req.body
   console.log(data)
   await StudentService.addStudentDetails(data)
   res.send('Details added')
}

module.exports = {getStudentDetails, addStudentDetails}