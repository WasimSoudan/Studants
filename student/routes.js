const {Router}=require ('express');
const controller =require('./controller')
const router =Router()

router.get('/',controller.getStudents)
router.post('/',controller.addStudents)
router.get('/:id',controller.getStudentsByID)
router.delete('/:id',controller.deleteStudents)
router.put('/:id',controller.updateStudents)

module.exports=router; 