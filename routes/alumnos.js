var express = require('express');
var router = express.Router();
const alumnoController = require('../controllers/alumno.controller');

/* GET all users. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/
router.get('/', alumnoController.getAll);

/* GET users by Id. */
router.get('/:alumnoId', alumnoController.getAlumnoById);

/* POST save user. */
router.post('/', alumnoController.create);

/* PUT update user by Id. */
router.put('/:alumnoId', alumnoController.update);

/* DELETE user by Id. */
router.delete('/:alumnoId', alumnoController.deleteById);

module.exports = router;
