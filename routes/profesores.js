var express = require('express');
var router = express.Router();
const profesorController = require('../controllers/profesor.controller');

/* GET all profesores. */
router.get('/', profesorController.getAll);

/* GET profesores by Id. */
router.get('/:profesorId', profesorController.getProfesorById);

/* POST save profesor. */
router.post('/', profesorController.create);

/* PUT update profesor by Id. */
router.put('/:profesorId', profesorController.update);

/* DELETE profesor by Id. */
router.delete('/:profesorId', profesorController.deleteById);

module.exports = router;