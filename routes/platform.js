var express = require('express');
var router = express.Router();

const platformController = require('../controllers/platform');

/** 
 * Get all people
 * Method GET
 * URL: /people
*/
router.get('/', platformController.getAllPlatform);

/** 
 * Get one person by id
 * Method GET
 * URL: /people/:id
*/
router.get('/:id', platformController.getPlatformById);

/** 
 * create peson
 * Method POST
 * URL: /people
*/
router.post('/',platformController.createPlatform);

/** 
 * Delete person
 * Method DELETE
 * URL: /people/:id
*/
router.delete('/:id', platformController.deletePlatform);

/** 
 * update person
 * Method put
 * URL: /people/:id
*/
router.put('/:id', platformController.updatePlatform);

module.exports = router;