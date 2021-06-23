const librosCtrl ={}
const libro = require('../models/libro')

librosCtrl.getlibros = async (req, res) => {
    const libros = await libro.find()
    res.json(libros)
}
librosCtrl.createlibro= async (req, res) => {
    const newlibro = new libro(req.body)
    await newlibro.save()
    res.send({message:'libro creado'})
}
librosCtrl.getlibro= async (req, res) => {
    const lib = await libro.findById(req.params.id)
    res.send(lib);
}
librosCtrl.editLibro=async (req, res) => {
    await libro.findByIdAndUpdate(req.params.id, req.body)
    res.json({status:'libro actualizado'});
}
librosCtrl.deletLibro= async(req, res) => {
    await libro.findByIdAndDelete(req.params.id)
    res.json({status:'libro eliminado'});
}

module.exports = librosCtrl