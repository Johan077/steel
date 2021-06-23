const editorialCtrl ={}
const editorial = require('../models/editorial')

editorialCtrl.getEditoriales = async (req, res) => {
    const editoriales = await editorial.find()
    res.json(editoriales)
}
editorialCtrl.createEditorial= async (req, res) => {
    const newEditor = new editorial(req.body)
    await newEditor.save()
    res.send({message:'editorial creado'})
}
editorialCtrl.getEditorial= async (req, res) => {
    const editor = await editorial.findById(req.params.id)
    res.send(editor);
}
editorialCtrl.editEditorial=async (req, res) => {
    await editorial.findByIdAndUpdate(req.params.id, req.body)
    res.json({status:'editorial actualizado'});
}
editorialCtrl.deletEditorial= async(req, res) => {
    await editorial.findByIdAndDelete(req.params.id)
    res.json({status:'editorial eliminado'});
}

module.exports = editorialCtrl