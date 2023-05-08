const express   = require ('express')
const router = express.Router()

let listofusers = [
    {
        id : 1,
        user : "sharon"
    },
    {
        id : 2,
        user : "bala"
    },
    {
        id : 3,
        user : "anisha "
    }
]

router.get('/' , (request,response) => {
    response.send("this is the user page")
})

router.get('/:id' , (request,response) => {
//    const pageid = Number(request.params.id)
//    const serviceid = listofusers.find((vasanth)=> vasanth.id === pageid)

//    if(!serviceid){
//     response.send ("page not found")

//    }
//    else
//    {
//     response.json(serviceid.user)
//    }
response.send(`user list: ${request.sharon.user}`)
})

router.param("id", (request,response,next,id) =>{
    request.sharon=listofusers[id]

    next()
})

module.exports = router