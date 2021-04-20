const router = require("express").Router();
//const auth = require('../controllers/auth.controller');
const provider = require("../controllers/provider.controller");

router.get("/", provider.listProvidersPage);
router.get("/add", provider.addUpdateProviderPage);
router.post("/addProvider", provider.addProvider);
router.get("/update/:id", provider.addUpdateProviderPage);
router.get("/delete/:id", provider.deleteProvider);
//router.get('/secrets', auth.isAuthenticated, (req, res) => res.send('On Wednesdays we wear pink'));

module.exports = router;
