const express = require("express");
const router = express.Router();

const { loginTherapist, logoutTherapist } = require("../controllers/Admin/therapistCredentials/createCredentials");

router.route("/loginTherapist").post(loginTherapist);
router.route("/logoutTherapist").get(logoutTherapist);



module.exports = router;
