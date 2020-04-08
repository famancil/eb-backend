const models = require("../database/models");

const getAll= async (req, res) => {
    try {
      const alumnos = await models.Alumno.findAll({
        order: [
          ['id', 'ASC'],
        ],
        include: [
          {
            model: models.Prueba,
            as: "pruebas"
          }
        ]
      });
      return res.status(200).json({ alumnos });
    } catch (error) {
      return res.status(500).send(error.message);
    }
};

const getAlumnoById = async (req, res) => {
    try {
      const { alumnoId } = req.params;
      const alumno = await models.Alumno.findOne({
        where: { id: alumnoId },
        include: [
          {
            model: models.Prueba,
            as: "pruebas"
          }
        ]
      });
      if (alumno) {
        return res.status(200).json({ alumno });
      }
      return res.status(404).send("Alumno no existe con el id especificado");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

const create = async (req, res) => {
  try {
    let nombre = req.body.nombre;
    let correo = req.body.correo;
    
    await models.Alumno.findOne({where: models.Sequelize.or(
      {nombre: nombre},
      {correo: correo}
    )})
    .then(async function (alumno) {
      
        if (alumno) {
          return res.status(422).json('Nombre y/o Correo ya existe, intente con otro.');
        }
        else {
          const _alumno = await models.Alumno.create(req.body);
          return res.status(201).json({ _alumno });
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
    let alumnoId = req.params.alumnoId;
    let nombre = req.body.nombre;
    let correo = req.body.correo;
    
    await models.Alumno.findOne({where: models.Sequelize.or(
        {nombre: nombre},
        {correo: correo}
      )})
      .then(async function (alumno) {
          if (alumno && alumno.id != alumnoId) {
            return res.status(422).json('Nombre y/o Correo ya existe, intente con otro.');
          }
          else {
            const [_alumno] = await models.Alumno.update(req.body, {
              where: { id: alumnoId }
            });
            if (_alumno) {
              const alumno = await models.Alumno.findOne({ where: { id: alumnoId } });
              return res.status(200).json({ alumno });
            }
            throw new Error("Alumno no encontrado");
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
      const { alumnoId } = req.params;
      const alumno = await models.Alumno.destroy({
        where: { id: alumnoId }
      });
      if (alumno) {
        return res.status(204).send("Alumno eliminado con exito");
      }
      throw new Error("Alumno no encontrado");
    } catch (error) {
      return res.status(500).send(error.message);
    }
};

module.exports = {
    getAll,
    getAlumnoById,
    create,
    update,
    deleteById
};