import {Router} from 'express'
import {getEmployes, createdEmployee,updateEmployee,deleteEmployee,getEmployee}from '../controllers/employees.controllers.js'


const router = Router()

router.get('/employees',getEmployes )
router.get('/employees/:id',getEmployee )
router.post('/employees',createdEmployee )
router.patch('/employees/:id', updateEmployee)
router.delete('/employees/:id', deleteEmployee)

export default router