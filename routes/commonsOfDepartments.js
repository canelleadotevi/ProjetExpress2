const express = require('express');
const router = express.Router();
const commonsControllers = require('../controllers/commonOfDepartmentsController');
/* pour definir l'url dans postman je mets dab ce que j'ai mis dans app ensuite le path qui au niveau de router */
router.get('/departements/:departmentId', commonsControllers.getCommunesByDepartmentId );

module.exports = router;