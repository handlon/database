var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
mongoose
.connect(`mongodb+srv://admin:adminadmin@cluster0.munn7.mongodb.net/schoolappwed?retryWrites=true&w=majority&appName=Cluster0`)
.then(() => console.log("database connected"))
.catch((err) => console.log(err));


var watchRouter = require('./routes/watch');
var shampooRouter = require('./routes/shampoo');
var wineRouter = require('./routes/wine');
var waterRouter = require('./routes/water');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/watch', watchRouter);
app.use('/shampoo', shampooRouter);
app.use('/wine', wineRouter);
app.use('/water', waterRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
