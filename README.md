# Eb Backend

Este proyecto fue generado con [Node JS](https://nodejs.org/es/) versión 13.12.0 & [Express JS](https://expressjs.com/es/)  version 4.16.1. Usando como base de datos, PostgreSQL versión 12.2 con pgAdmin 4 como Dashboard para ejecutar comandos SQL.

## Para levantar el servidor (Development)

Primero es necesario instalar las librerias que seran utilizadas, para eso se ejecuta `npm install` (en el mismo directorio donde este el archivo `package.json`).
Luego, es necesario crear la base de datos para desarrollo (dev_db) y prueba (test_db) (solo se ocupara la de desarrollo).
Luego ejecutar `sequelize db:migrate` para migrar las tablas en las bases de datos creadas (Migraciones en `/database/migrations`).
Luego ejecutar `sequelize db:seed:all` para crear datos en las tablas previamente creadas (Migraciones en `/database/seeders`).
De todas formas, se dejara un archivo backup `/backup/backup-eb.sql` para migrar todos los datos de prueba.
Finalmente, para levantar el servidor, ejecutar `npm run dev`. Navegar en `http://localhost:3000/`.

## Rutas

1. `/`: Ruta de Home, donde muestra un mensaje de Bienvenida (acceder por metodo GET).

2. `/profesores`: Ruta donde se hace gestión de los profesores. Los metodos y rutas para acceder a ellos son:

*  GET `/profesores`: Obtener todos los recursos de Profesor.
*  GET `/profesores/:id`: Obtener un recurso de Profesor con `:id` especifico.
*  POST `/profesores`: Guardar un recurso nuevo en BD.
*  PUT `/profesores/:id`: Actualizar un recurso de Profesor con datos nuevos en un `:id` especifico.
*  DELETE `/profesores/:id`: Eliminar un recurso de Profesor con `:id` especifico.

3. `/alumnos`: Ruta donde se hace gestión de los alumnos. Los metodos y rutas para acceder a ellos son:

*  GET `/alumnos`: Obtener todos los recursos de Alumno.
*  GET `/alumnos/:id`: Obtener un recurso de Alumno con `:id` especifico.
*  POST `/alumnos`: Guardar un recurso nuevo en BD.
*  PUT `/alumnos/:id`: Actualizar un recurso de Alumno con datos nuevos en un `:id` especifico.
*  DELETE `/alumnos/:id`: Eliminar un recurso de Alumno con `:id` especifico.

4. `/cursos`: Ruta donde se hace gestión de los cursos. Los metodos y rutas para acceder a ellos son:

*  GET `/cursos`: Obtener todos los recursos de Curso.
*  GET `/cursos/:id`: Obtener un recurso de Curso con `:id` especifico.
*  GET `/:cursoId/alumnos/:alumnoId/promedio`: Obtener el promedio de un alumno en un curso dado.
*  POST `/cursos`: Guardar un recurso nuevo en BD.
*  PUT `/cursos/:id`: Actualizar un recurso de Curso con datos nuevos en un `:id` especifico.
*  DELETE `/cursos/:id`: Eliminar un recurso de Curso con `:id` especifico.

5. `/cursoInscritos`: Ruta donde se hace gestión de los CursoInscritos. Los metodos y rutas para acceder a ellos son:

*  GET `/cursoInscritos`: Obtener todos los recursos de CursoInscrito.
*  GET `/cursoInscritos/:id`: Obtener un recurso de CursoInscrito con `:id` especifico.
*  GET `/cursos/:cursoId/alumnos/:alumnoId`: Obtener un recurso de CursoInscrito con `:cursoId` y `:alumnoId` especifico.
*  POST `/cursoInscritos`: Guardar un recurso nuevo en BD.
*  PUT `/cursoInscritos/:id`: Actualizar un recurso de CursoInscrito con datos nuevos en un `:id` especifico.
*  DELETE `/cursoInscritos/:id`: Eliminar un recurso de CursoInscrito con `:id` especifico.

6. `/pruebas`: Ruta donde se hace gestión de los pruebas. Los metodos y rutas para acceder a ellos son:

*  GET `/pruebas`: Obtener todos los recursos de Prueba.
*  GET `/pruebas/:id`: Obtener un recurso de Prueba con `:id` especifico.
*  GET `/promedios`: Obtener los promedios de todos los alumnos de todos los cursos.
*  GET `/malPromedios`: Obtener los malos promedios de todos los alumnos de todos los cursos.
*  GET `/peorPromedios`: Obtener los promedios de los alumnos que tiene 2 o más promedios malos en todos los cursos.
*  POST `/pruebas`: Guardar un recurso nuevo en BD.
*  PUT `/pruebas/:id`: Actualizar un recurso de Prueba con datos nuevos en un `:id` especifico.
*  DELETE `/pruebas/:id`: Eliminar un recurso de Prueba con `:id` especifico.