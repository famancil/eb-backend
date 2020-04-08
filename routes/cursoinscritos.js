var express = require('express');
var router = express.Router();
const cursoInscritoController = require('../controllers/cursoinscrito.controller');

/* GET all inscritos. */
router.get('/', cursoInscritoController.getAll);

/* GET inscritos by Id. */
router.get('/:cursoInscritoId', cursoInscritoController.getCursoInscritoById);

/* GET inscritos by Curso. */
router.get('/cursos/:cursoId', cursoInscritoController.getCursoInscritoByCurso);

/* GET inscritos by Curso and Alumno. */
router.get('/cursos/:cursoId/alumnos/:alumnoId', cursoInscritoController.getCursoInscritoByCursoAndAlumno);

/* POST save inscrito. */
router.post('/', cursoInscritoController.create);

/* PUT update inscrito by Id. */
router.put('/:cursoInscritoId', cursoInscritoController.update);

/* DELETE inscrito by Id. */
router.delete('/:cursoInscritoId', cursoInscritoController.deleteById);

module.exports = router;