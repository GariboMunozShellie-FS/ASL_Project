const express = require('express')
const router = express.Router()
const imageCtrl = require('../controllers/imagesControl')


router.get('/', imageCtrl.index)
router.get('/new', imageCtrl.form)
router.get('/:id', imageCtrl.show)
router.get('/:id/edit', imageCtrl.form)
router.get('/:id/delete', imageCtrl.remove)
router.post('/', imageCtrl.create)
router.post('/:id', imageCtrl.update)
router.post('/:id/delete', imageCtrl.remove)
router.delete('/:id', imageCtrl.remove)

module.exports = router