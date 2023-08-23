const express  = require("express")
const { createMenu, getMenu } = require("../controller/menuController")
const validateToken = require("../middleware/validationtokenHandler")



const router = express.Router()

router.use(validateToken)
router.route("/:id").post(createMenu)
router.route("/:id").get(getMenu)
//router.route("/:id").delete(deletePost).put(updatePost).get(getPost)

module.exports = router