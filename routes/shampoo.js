var express = require('express');
var router = express.Router();

const shampooController = require('../controllers/shampoo');

/** 
 * Get all people
 * Method GET
 * URL: /people
*/
router.get('/', shampooController.getAllshampoo);

/** 
 * Get one person by id
 * Method GET
 * URL: /people/:id
*/
router.get('/:id', shampooController.getshampooById);

/** 
 * create peson
 * Method POST
 * URL: /people
*/
router.post('/',shampooController.createshampoo);

/** 
 * Delete person
 * Method DELETE
 * URL: /people/:id
*/
router.delete('/:id', shampooController.deleteshampoo);

/** 
 * update person
 * Method put
 * URL: /people/:id
*/
router.put('/:id', shampooController.updateshampoo);

module.exports = router;