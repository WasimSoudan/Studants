const querySelectAllStudents ="SELECT * FROM students"

const querySelectOnStudents ="SELECT * FROM students s WHERE s.id =$1"

const queryCheckEmail ="SELECT s FROM students s WHERE s.email =$1"

const   queryAddStudents="INSERT INTO students (name ,email ,age ,dob) VALUES ($1,$2,$3,$4)"

const queryDeleteStudenst ="DELETE FROM students where id =$1"

const queryUpdateStudenst ="UPDATE students SET name =$2,email=$3,age=$4,dob=$5 where id =$1"

module.exports ={
    querySelectAllStudents,
    querySelectOnStudents,
    queryCheckEmail ,
    queryAddStudents,
    queryDeleteStudenst,
    queryUpdateStudenst
}