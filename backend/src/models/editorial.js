const { Schema, model }= require('mongoose')

const editorialShema = new Schema ({
    nombre:{type:String, required:true },
    correspndencia:{type:String, required:true },
    telefono:{type: Number, required:true },
    correo:{type:String, required:true },
    Libros:{type:Number, required:true },
},{
    timestamps:true,
    versionKey:false
});

module.exports = model('editoriales', editorialShema);