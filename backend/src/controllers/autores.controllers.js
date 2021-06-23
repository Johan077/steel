const autorCtrl ={}
const autor = require('../models/autor')

autorCtrl.getAutores = async (req, res) => {
    const Autores = await autor.find()
    res.json(Autores)
}
autorCtrl.createAutor= async (req, res) => {
    const newAutor = new autor(req.body)
    await newAutor.save()
    res.send({message:'autor creado'})
}
autorCtrl.getAutor= async (req, res) => {
    const auto = await autor.findById(req.params.id)
    res.send(auto);
}
autorCtrl.editAutor=async (req, res) => {
    await autor.findByIdAndUpdate(req.params.id, req.body)
    res.json({status:'autor actualizado'});
}
autorCtrl.deletAutor= async(req, res) => {
    await autor.findByIdAndDelete(req.params.id)
    res.json({status:'autor eliminado'});
}

module.exports = autorCtrl