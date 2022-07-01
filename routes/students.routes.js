const StudentsController = require('../controllers/students.controller')
const bodyParser = require('body-parser')

var router = bodyParser.json();


const routes = (app)=> {
    app.get('/students',StudentsController.getStudentDetails )
    app.post('/students',router,StudentsController.addStudentDetails )
}

module.exports = routes