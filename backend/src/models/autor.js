const { Schema, model }= require('mongoose')

const autorShema = new Schema ({
    nombre:{type:String, required:true },
    nacimiento:{type:String, required:true },
    Ciudad:{type:String, required:true },
    correo:{type:String, required:true },
},{
    timestamps:true,
    versionKey:false
});

module.exports = model('autores', autorShema);