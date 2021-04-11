const express = require('express');
const router = express().Router;
const provider = require('../controllers/provider.controller');


router.use(auth.isAuthenticated);
router.get('/', provider.listProvidersPage);
router.get('/create', provider.createUpdateProviderPage);
router.post('/createUpdate', auth.isAuthenticated,  provider.create);
router.get('/update/:id', providProvider);
router.delete('/provider/:id', provider.deleteProvider);
router.get('/secrets', (req, res) => res.send('Super secret nonsense!'));

module.exports = router;