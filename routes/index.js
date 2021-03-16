const { Router } = require("express");
const user = require('../controllers/user.controller');
const router = Router();

router.get('/', user.listUsersPage);
router.get('/create', user.createUpdateUserPage);
router.post('/createUpdate', user.create);
router.get('/update/:_id', user.createUpdateUserPage);
router.delete('/user/:_id', user.deleteUser);


module.exports = router;