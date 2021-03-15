const { Router } = require("express");
const user = require('../controllers/user.controller.js');
const router = Router();

router.get('/', user.home);

router.get('/user', user.getAll);
router.post('/user', user.create);
router.get('/user/:_id', user.getUser);
router.put('/user/:_id', user.updateUser)
router.delete('/user/:_id', user.deleteUser);


module.exports = router;