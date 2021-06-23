const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/steel-libros',{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useFindAndModify:false
})
    .then(ab => console.log('base de datos conectada'))
    .catch((err) => console.error(err));


