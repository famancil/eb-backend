var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');
var alumnosRouter = require('./routes/alumnos');
var cursosRouter = require('./routes/cursos');
var cursoInscritosRouter = require('./routes/cursoinscritos');
var profesoresRouter = require('./routes/profesores');
var pruebasRouter = require('./routes/pruebas');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/alumnos', alumnosRouter);
app.use('/cursos', cursosRouter);
app.use('/cursoInscritos', cursoInscritosRouter);
app.use('/profesores', profesoresRouter);
app.use('/pruebas', pruebasRouter);

// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  next(createError(404));
});*/

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
