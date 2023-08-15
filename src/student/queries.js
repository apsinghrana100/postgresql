exports.getStudent = "Select * from students";
exports.getStudentById = "SELECT * FROM students WHERE id=$1";
exports.addStudentData = "insert into students(name,email,age,dob) values($1,$2,$3,$4)"
exports.checkIsEmailExits = "select email from students where email=$1";
exports.deleteStudents = "delete from students where id=$1";
exports.updateStudents = "update students set name=$1 where id=$2";
