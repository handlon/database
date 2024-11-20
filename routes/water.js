var express = require('express');
var router = express.Router();

const waterController = require('../controllers/water');

/** 
 * Get all water
 * Method GET
 * URL: /water
*/
router.get('/', waterController.getAllwater);

/** 
 * Get one water by id
 * Method GET
 * URL: /water/:id
*/
router.get('/:id', waterController.getwaterById);

/** 
 * create peson
 * Method POST
 * URL: /water
*/
router.post('/',waterController.createwater);

/** 
 * Delete water
 * Method DELETE
 * URL: /water/:id
*/
router.delete('/:id', waterController.deletewater);

/** 
 * update water
 * Method put
 * URL: /water/:id
*/
router.put('/:id', waterController.updatewater);

module.exports = router;





