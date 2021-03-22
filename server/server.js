const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send("Hello Ji from server")
})

app.listen(9000)