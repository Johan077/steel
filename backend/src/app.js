const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.set('port', process.env.PORT || 4000);
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/api/libros',require('./rooutes/libros.routes'));
app.use('/api/autores',require('./rooutes/autores.routes'));
app.use('/api/editoriales',require('./rooutes/editoriales.routes'));

module.exports = app;