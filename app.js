
const express=require("express")
const app=express()
const userRouter = require('./user.js')
app.get("/", (request,response ) =>{
    response.send("this page does not exist") 
})

app.use('/user', userRouter)
app.listen(3500)