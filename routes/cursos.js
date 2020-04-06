var express = require('express');
var router = express.Router();
const cursoController = require('../controllers/curso.controller');

/* GET all cursos. */
router.get('/', cursoController.getAll);

/* GET cursos by Id. */
router.get('/:cursoId', cursoController.getCursoById);

/* GET Prom by Curso and Alumno. */
router.get('/:cursoId/alumnos/:alumnoId/promedio', cursoController.getPromedioByCursoAndAlumno);

/* POST save curso. */
router.post('/', cursoController.create);

/* PUT update curso by Id. */
router.put('/:cursoId', cursoController.update);

/* DELETE curso by Id. */
router.delete('/:cursoId', cursoController.deleteById);

module.exports = router;