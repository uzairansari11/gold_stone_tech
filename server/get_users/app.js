const express = require("express")

const PORT = 3000
const app = express()

app.get("/users", (req, res) => {
    res.send('Meesage from user service')
})

app.listen(PORT,() => {
    console.log("User service")
})