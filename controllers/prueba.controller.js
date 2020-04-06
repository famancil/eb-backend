const models = require("../database/models");

const getAll= async (req, res) => {
    try {
      const pruebas = await models.Prueba.findAll({
        order: [
          ['id', 'ASC'],
        ],
        include: [
          {
            model: models.Curso,
            as: "curso"
          },
          {
            model: models.Alumno,
            as: "alumno"
          }
        ]
      });
      return res.status(200).json({ pruebas });
    } catch (error) {
      return res.status(500).send(error.message);
    }
};

const getPruebaById = async (req, res) => {
    try {
      const { pruebaId } = req.params;
      const prueba = await models.Prueba.findOne({
        where: { id: pruebaId },
        order: [
          ['id', 'ASC'],
        ],
        include: [
          {
            model: models.Curso,
            as: "curso"
          },
          {
            model: models.Alumno,
            as: "alumno"
          }
        ]
      });
      if (prueba) {
        return res.status(200).json({ prueba });
      }
      return res.status(404).send("Prueba no existe con el id especificado");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

const getAllProm= async (req, res) => {
  try {
    const pruebas = await models.Prueba.findAll({
      attributes: ['cursoId','alumnoId', [models.sequelize.fn('AVG', 
      models.sequelize.col('nota')), 'notaAvg']],
      group: ['alumnoId','cursoId'],
      order: [['cursoId','ASC'],[models.sequelize.fn('AVG', models.sequelize.col('nota')), 'DESC']]
    });
    return res.status(200).json({ pruebas });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAllMalProm= async (req, res) => {
  try {
    /*const pruebas = await models.Prueba.findAll({
      attributes: ['cursoId','alumnoId', [models.sequelize.fn('AVG', 
      models.sequelize.col('nota')), 'notaAvg']],
      group: ['alumnoId','cursoId'],
      having: models.Sequelize.where(models.Sequelize.fn("AVG", models.Sequelize.col('nota')), "<", 4.0),
      order: [['cursoId','ASC'],[models.sequelize.fn('AVG', models.sequelize.col('nota')), 'DESC']]
    });*/
    const pruebas = await models.sequelize.query('SELECT "Alumno"."nombre" as "Alumno", "Curso"."nombre" as "Curso", "counted"."notaAvg" as "Nota Promedio"'+
    'FROM (SELECT * FROM ( SELECT "alumnoId", "cursoId", AVG("nota") AS "notaAvg" FROM "Prueba" AS "Prueba"'+
    'GROUP BY "alumnoId", "cursoId" HAVING AVG("nota") < 4 ORDER BY "Prueba"."cursoId" ASC, AVG("nota") DESC) AS "alumnos"'+
    'GROUP BY "alumnoId", "cursoId", "alumnos"."notaAvg" HAVING count(*) > 0 ) AS "counted"'+
    'LEFT JOIN "Alumno" ON "Alumno"."id" = "alumnoId" LEFT JOIN "Curso" ON "Curso"."id" = "cursoId";', {
        type: models.sequelize.QueryTypes.SELECT
      });
    
    return res.status(200).json({ pruebas });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAllPeorProm= async (req, res) => {
  try {

    const pruebas = await models.sequelize.query('SELECT "alumnoId" ,max("Alumno"."nombre") as "nombre", count(*) as "Promedios rojos"'+ 
   'FROM ( SELECT "alumnoId", "cursoId",AVG("nota") AS "notaAvg" FROM "Prueba" AS "Prueba" GROUP BY "alumnoId","cursoId"'+
   'HAVING AVG("nota") < 4 ORDER BY "alumnoId" ASC) as "alumnos" LEFT JOIN "Alumno" ON "Alumno"."id" = "alumnos"."alumnoId"'+
   'GROUP BY "alumnoId" HAVING count(*) > 1;', {
        type: models.sequelize.QueryTypes.SELECT
      });
    
    return res.status(200).json({ pruebas });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const create = async (req, res) => {
    try {
      const prueba = await models.Prueba.create(req.body);
      return res.status(201).json({ prueba });
    } catch (error) {
      if(error.name === "SequelizeForeignKeyConstraintError")
        return res.status(400).json({ error: error.message });
      return res.status(500).json({ error: error.message });
    }
};

const update = async (req, res) => {
    try {
      const { pruebaId } = req.params;
      const [_prueba] = await models.Prueba.update(req.body, {
        where: { id: pruebaId }
      });
      if (_prueba) {
        const prueba = await models.Prueba.findOne({ where: { id: pruebaId } });
        return res.status(200).json({ prueba });
      }
      throw new Error("Prueba no encontrado");
    } catch (error) {
      if(error.name === "SequelizeForeignKeyConstraintError")
        return res.status(400).json({ error: error.message });
      return res.status(500).send(error.message);
    }
};

const deleteById = async (req, res) => {
    try {
      const { pruebaId } = req.params;
      const prueba = await models.Prueba.destroy({
        where: { id: pruebaId }
      });
      if (prueba) {
        return res.status(204).send("Prueba eliminado con exito");
      }
      throw new Error("Prueba no encontrado");
    } catch (error) {
      return res.status(500).send(error.message);
    }
};

module.exports = {
    getAll,
    getPruebaById,
    getAllProm,
    getAllMalProm,
    getAllPeorProm,
    create,
    update,
    deleteById
};