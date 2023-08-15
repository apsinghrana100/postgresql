const {Router} = require("express");
const router = Router();
const Student_controller = require("./controller") 

router.get('/getStudent',Student_controller.getStudent);
router.get('/getStudent/:id',Student_controller.getStudentById);
router.post('/addData',Student_controller.AddStudent);
router.delete('/deletData/:id',Student_controller.deleteStudent);
router.put('/updateStudents/:id',Student_controller.updateStudents);

module.exports = router;