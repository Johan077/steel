const { Schema, model }= require('mongoose')

const libroShema = new Schema ({
    titulo:{type:String, required:true },
    year:{type:Number, required:true },
    genero:{type:String, required:true },
    paginas:{type:Number, required:true },
    editorial:{type:String, required:true },
    autor:{type:String, required:true },
},{
    timestamps:true,
    versionKey:false
});

module.exports = model('libro', libroShema);