const express = require("express");
const router = express.Router();

//@route  GET api/profile/test
//@desc Test profile route
//@access Public
router.get('/test', (req, res) => res.json({
    msg: "works profile"
}))

module.exports = router;