var express = require('express');
var router = express.Router();

const watchController = require('../controllers/watch');

/** 
 * Get all watch
 * Method GET
 * URL: /watch
*/
router.get('/', watchController.getAllwatch);

/** 
 * Get one watch by id
 * Method GET
 * URL: /watch/:id
*/
router.get('/:id', watchController.getwatchById);

/** 
 * create peson
 * Method POST
 * URL: /watch
*/
router.post('/',watchController.createwatch);

/** 
 * Delete watch
 * Method DELETE
 * URL: /watch/:id
*/
router.delete('/:id', watchController.deletewatch);

/** 
 * update watch
 * Method put
 * URL: /watch/:id
*/
router.put('/:id', watchController.updatewatch);

module.exports = router;