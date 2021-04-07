const express = require('express');
const router = express().Router;
const provider = require('../controllers/provider.controller');


router.get('/providers', provider.getAll);
router.post('/providers', provider.addProvider);

router.get('/providers/:id', provider.getOne);
router.put('/providers/:id', provider.updateProvider);
router.delete('/providers/:id', provider.deleteProvider);

router.get('/providers/:specialty', provider.findBySpecialty);

module.exports = router;