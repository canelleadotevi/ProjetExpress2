
const express = require('express');
const router = express.Router();
const departmentsControllers = require('../controllers/departmentsControllers');

router.get('/', departmentsControllers.getAllDepartments);
router.post('/createDepartement',departmentsControllers.createDepartment);
router.put('/updateDepartment/:departmentId', departmentsControllers.updateDepartment)
router.post('/deleteDepartment/:departmentId',departmentsControllers.deleteDepartment)
module.exports = router;
