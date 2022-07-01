const Student = require('../models').Student

const getStudentDetails = async ()=>{
    const response = await Student.findAll()
    return response
}
const addStudentDetails = async (data)=>{
    await Student.create(data)
}

module.exports= {getStudentDetails, addStudentDetails}