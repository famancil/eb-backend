const models = require("../database/models");

const getAll= async (req, res) => {
    try {
      const cursos = await models.Curso.findAll({
        order: [
          ['id', 'ASC'],
        ],
        include: [
          {
            model: models.Prueba,
            as: "pruebas"
          },
          {
            model: models.Profesor,
            as: "profesor"
          }
        ]
      });
      return res.status(200).json({ cursos });
    } catch (error) {
      return res.status(500).send(error.message);
    }
};

const getCursoById = async (req, res) => {
  try {
    const { cursoId } = req.params;
    const curso = await models.Curso.findOne({
      where: { id: cursoId },
      include: [
        {
          model: models.Prueba,
          as: "pruebas"
        },
        {
          model: models.Profesor,
          as: "profesor"
        }
      ]
    });
    if (curso) {
      return res.status(200).json({ curso });
    }
    return res.status(404).send("Curso no existe con el id especificado");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getPromedioByCursoAndAlumno = async (req, res) => {
  try {
    const { cursoId, alumnoId} = req.params;
    //return res.status(200).json({ cursoIdr });
    const promedio = await models.Prueba.findAll({
      where: { cursoId: cursoId, alumnoId: alumnoId },
      attributes: ['alumnoId', [models.sequelize.fn('AVG', 
      models.sequelize.col('nota')), 'notaAvg']],
      group: ['alumnoId'],
      order: [[models.sequelize.fn('AVG', models.sequelize.col('nota')), 'DESC']]
    });
    if (promedio) {
      return res.status(200).json({ promedio });
    }
    return res.status(404).send("Curso y/o Alumno no existe con el id especificado");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const create = async (req, res) => {
    try {
      const curso = await models.Curso.create(req.body);
      return res.status(201).json({
        curso
      });
    } catch (error) {
      if(error.name === "SequelizeForeignKeyConstraintError")
        return res.status(400).json({ error: error.message });
      return res.status(500).json({ error: error.message });
    }
};

const update = async (req, res) => {
    try {
      const { cursoId } = req.params;
      const [_curso] = await models.Curso.update(req.body, {
        where: { id: cursoId }
      });
      if (_curso) {
        const curso = await models.Curso.findOne({ where: { id: cursoId } });
        return res.status(200).json({ curso });
      }
      throw new Error("Curso no encontrado");
    } catch (error) {
      if(error.name === "SequelizeForeignKeyConstraintError")
        return res.status(400).json({ error: error.message });
      return res.status(500).send(error.message);
    }
};

const deleteById = async (req, res) => {
    try {
      const { cursoId } = req.params;
      const curso = await models.Curso.destroy({
        where: { id: cursoId }
      });
      if (curso) {
        return res.status(204).send("Curso eliminado con exito");
      }
      throw new Error("Curso no encontrado");
    } catch (error) {
      return res.status(500).send(error.message);
    }
};

module.exports = {
    getAll,
    getCursoById,
    getPromedioByCursoAndAlumno,
    create,
    update,
    deleteById
};