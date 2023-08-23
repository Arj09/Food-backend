const express  = require("express")
const {  createHotal, getHotal } = require("../controller/hotalController")
const validateToken = require("../middleware/validationtokenHandler")
const router = express.Router()

router.use(validateToken)
router.route("/").get(getHotal).post(createHotal)
//router.route("/:id").delete(deletePost).put(updatePost).get(getPost)

module.exports = router