const express = require('express');
const router = express.Router();
const commonsControllers = require('../controllers/commonsController');

router.get('/', commonsControllers.getAllCommons );
router.post('/createCommons',commonsControllers.createCommune );
router.put('/updateCommon/:commonId',commonsControllers.updateCommune );
router.post('/deleteCommon/:commonId',commonsControllers.deleteCommon);
module.exports = router;