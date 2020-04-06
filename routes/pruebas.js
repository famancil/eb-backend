var express = require('express');
var router = express.Router();
const pruebaController = require('../controllers/prueba.controller');

/* GET all pruebas. */
router.get('/', pruebaController.getAll);

/* GET All Prom. */
router.get('/promedios', pruebaController.getAllProm);

/* GET All Mal Prom. */
router.get('/malPromedios', pruebaController.getAllMalProm);

/* GET All Bad Prom. */
router.get('/peorPromedios', pruebaController.getAllPeorProm);

/* GET pruebas by Id. */
router.get('/:pruebaId', pruebaController.getPruebaById);

/* POST save prueba. */
router.post('/', pruebaController.create);

/* PUT update prueba by Id. */
router.put('/:pruebaId', pruebaController.update);

/* DELETE prueba by Id. */
router.delete('/:pruebaId', pruebaController.deleteById);

module.exports = router;