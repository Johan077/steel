const { Router } = require('express')
const router = Router()
const librosCtrl = require('../controllers/libros.controllers.js')



router.get('/', librosCtrl.getlibros);
router.post('/', librosCtrl.createlibro);
router.get('/:id', librosCtrl.getlibro);
router.put('/:id', librosCtrl.editLibro);
router.delete('/:id', librosCtrl.deletLibro);

module.exports = router