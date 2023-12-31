var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var departmentsRouter = require('./routes/departments');
var commonsRouter = require('./routes/commons');
var commonOfDepartment = require('./routes/commonsOfDepartments');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/departments',departmentsRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/commons',commonsRouter)
app.use('/commons',commonOfDepartment);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
const mongoose = require('mongoose');
const db = require('./config/db');

process.on('SIGINT', () => {
  client.close();
  console.log('Déconnexion de MongoDB');
  process.exit();
});

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
