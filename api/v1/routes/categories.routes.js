const db = require('../../../models');
const { Router } = require('express');
const categorieController = require('../../../controllers/categorieController');

const router = Router();

router.get('/', categorieController.getAllCategories);

router.get('/:categorieId', categorieController.getCategorie);

router.post('/', categorieController.createCategorie);

router.put('/:categorieId', categorieController.updateCategorie);

router.delete('/:categorieId', categorieController.deleteCategorie);

module.exports = router;

