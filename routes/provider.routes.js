const express = require('express');
const router = express().Router;

const provider = require('../controllers/provider.controller');

router.post('/providers', provider.addProvider);
router.get('/providers', provider.getAll);
router.get('/providers/:id', provider.getOne);
router.put('/providers/:id', provider.updateProvider);
router.delete('/providers/:id', provider.deleteProvider);;

module.exports = router;