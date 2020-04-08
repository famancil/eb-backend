const models = require("../database/models");

const getAll= async (req, res) => {
    try {
      const cursoInscritos = await models.CursoInscrito.findAll({
        order: [
          ['id', 'ASC'],
        ]
      });
      return res.status(200).json({ cursoInscritos });
    } catch (error) {
      return res.status(500).send(error.message);
    }
};

const getCursoInscritoById = async (req, res) => {
  try {
    const { cursoInscritoId } = req.params;
    const cursoInscrito = await models.CursoInscrito.findOne({
      where: { id: cursoInscritoId }
    });
    if (cursoInscrito) {
      return res.status(200).json({ cursoInscrito });
    }
    return res.status(404).send("Curso Inscrito no existe con el id especificado");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getCursoInscritoByCurso = async (req, res) => {
  try {
    const { cursoId } = req.params;
    const cursoInscrito = await models.CursoInscrito.findOne({
      where: { cursoId: cursoId }
    });
    if (cursoInscrito) {
      return res.status(200).json({ cursoInscrito });
    }
    return res.status(404).send("Curso Inscrito no existe con el id especificado");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getCursoInscritoByCursoAndAlumno = async (req, res) => {
  try {
    const { cursoId,alumnoId } = req.params;
    const cursoInscrito = await models.CursoInscrito.findOne({
      where: models.Sequelize.and(
        {cursoId: cursoId},
        {alumnoId: alumnoId})
    });
    if (cursoInscrito) {
      return res.status(200).json({ cursoInscrito });
    }
    return res.status(404).send("Curso Inscrito no existe con los valores especificado");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const create = async (req, res) => {
    try {
        let cursoId = req.body.cursoId;
        let alumnoId = req.body.alumnoId;
      
        await models.CursoInscrito.findOne({where: models.Sequelize.and(
            {cursoId: cursoId},
            {alumnoId: alumnoId}
          )})
          .then(async function (cursoInscrito) {
            
              if (cursoInscrito) {
                return res.status(422).json('Alumno ya esta inscrito en este curso, intente con otro.');
              }
              else {
                const cursoInscrito = await models.CursoInscrito.create(req.body);
                return res.status(201).json({ cursoInscrito });
              }
          });      
    } catch (error) {
      if(error.name === "SequelizeForeignKeyConstraintError")
        return res.status(400).json({ error: error.message });
      return res.status(500).json({ error: error.message });
    }
};

const update = async (req, res) => {
    try {
        let cursoInscritoId = req.params.cursoInscritoId;
        let cursoId = req.body.cursoId;
        let alumnoId = req.body.alumnoId;
        
        await models.CursoInscrito.findOne({where: models.Sequelize.and(
            {cursoId: cursoId},
            {alumnoId: alumnoId}
            )})
            .then(async function (cursoInscrito) {
                if (cursoInscrito) {
                    return res.status(422).json('Curso Inscrito ya existe, intente con otro.');
                }
                else {
                  const [_cursoInscrito] = await models.CursoInscrito.update(req.body, {
                    where: { id: cursoInscritoId }
                  });
                  if (_cursoInscrito) {
                    const cursoInscrito = await models.CursoInscrito.findOne({ where: { id: cursoInscritoId } });
                    return res.status(200).json({ cursoInscrito });
                  }
                  throw new Error("Curso inscrito no encontrado");
                }
            });
    } catch (error) {
      if(error.name === "SequelizeValidationError")
        return res.status(400).json({ error: error.message });
      if(error.name === "SequelizeForeignKeyConstraintError")
        return res.status(400).json({ error: error.message });
      return res.status(500).send(error.message);
    }
};

const deleteById = async (req, res) => {
    try {
      const { cursoInscritoId } = req.params;
      const cursoInscrito = await models.CursoInscrito.destroy({
        where: { id: cursoInscritoId }
      });
      if (cursoInscrito) {
        return res.status(204).send("Curso eliminado con exito");
      }
      throw new Error("Curso no encontrado");
    } catch (error) {
      return res.status(500).send(error.message);
    }
};

module.exports = {
    getAll,
    getCursoInscritoById,
    getCursoInscritoByCurso,
    getCursoInscritoByCursoAndAlumno,
    create,
    update,
    deleteById
};