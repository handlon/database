var express = require('express');
var router = express.Router();

const wineController = require('../controllers/wine');

/** 
 * Get all wine
 * Method GET
 * URL: /wine
*/
router.get('/', wineController.getAllwine);

/** 
 * Get one wine by id
 * Method GET
 * URL: /wine/:id
*/
router.get('/:id', wineController.getwineById);

/** 
 * create peson
 * Method POST
 * URL: /wine
*/
router.post('/',wineController.createwine);

/** 
 * Delete wine
 * Method DELETE
 * URL: /wine/:id
*/
router.delete('/:id', wineController.deletewine);

/** 
 * update wine
 * Method put
 * URL: /wine/:id
*/
router.put('/:id', wineController.updatewine);

module.exports = router;





