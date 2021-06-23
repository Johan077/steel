const { Router } = require('express')
const router = Router()
const editorialCtrl = require('../controllers/editoriales.controllers')



router.get('/', editorialCtrl.getEditoriales);
router.post('/', editorialCtrl.createEditorial);
router.get('/:id', editorialCtrl.getEditorial);
router.put('/:id', editorialCtrl.editEditorial);
router.delete('/:id', editorialCtrl.deletEditorial);

module.exports = router