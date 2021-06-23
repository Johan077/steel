const { Router } = require('express')
const router = Router()
const autorCtrl = require('../controllers/autores.controllers')



router.get('/', autorCtrl.getAutores);
router.post('/', autorCtrl.createAutor);
router.get('/:id', autorCtrl.getAutor);
router.put('/:id', autorCtrl.editAutor);
router.delete('/:id', autorCtrl.deletAutor);

module.exports = router