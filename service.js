const exprss = require ('express')
const router = express.Router()

router.get('/' , (request,response) => {
    response.send("this is the user page")
})

module.exports = router