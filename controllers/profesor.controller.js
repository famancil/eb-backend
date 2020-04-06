const models = require("../database/models");

const getAll= async (req, res) => {
    try {
      const profesores = await models.Profesor.findAll({
        order: [
          ['id', 'ASC'],
        ],
        include: [
          {
            model: models.Curso,
            as: "cursos"
          }
        ]
      });
      return res.status(200).json({ profesores });
    } catch (error) {
      return res.status(500).send(error.message);
    }
};

const getProfesorById = async (req, res) => {
    try {
      const { profesorId } = req.params;
      const profesor = await models.Profesor.findOne({
        where: { id: profesorId },
        include: [
          {
            model: models.Curso,
            as: "cursos"
          }
        ]
      });
      if (profesor) {
        return res.status(200).json({ profesor });
      }
      return res.status(404).send("Profesor no existe con el id especificado");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

const create = async (req, res) => {
    try {
      const profesor = await models.Profesor.create(req.body);
      return res.status(201).json({ profesor });
    } catch (error) {
      if(error.name === "SequelizeForeignKeyConstraintError")
        return res.status(400).json({ error: error.message });
      return res.status(500).json({ error: error.message });
    }
};

const update = async (req, res) => {
    try {
      const { profesorId } = req.params;
      const [_profesor] = await models.Profesor.update(req.body, {
        where: { id: profesorId }
      });
      if (_profesor) {
        const profesor = await models.Profesor.findOne({ where: { id: profesorId } });
        return res.status(200).json({ profesor });
      }
      throw new Error("Profesor no encontrado");
    } catch (error) {
      if(error.name === "SequelizeForeignKeyConstraintError")
        return res.status(400).json({ error: error.message });
      return res.status(500).send(error.message);
    }
};

const deleteById = async (req, res) => {
    try {
      const { profesorId } = req.params;
      const profesor = await models.Profesor.destroy({
        where: { id: profesorId }
      });
      if (profesor) {
        return res.status(204).send("Profesor eliminado con exito");
      }
      throw new Error("Profesor no encontrado");
    } catch (error) {
      return res.status(500).send(error.message);
    }
};

module.exports = {
    getAll,
    getProfesorById,
    create,
    update,
    deleteById
};