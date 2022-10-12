const express = require("express")
const port = process.env.API_SERVER_PORT
const app = express();

app.get("/", (req, res) => {
    res.send("I am a api server")
})

app.listen(port, (e) => {
    if (e) {
        console.error(`error: ${e}`)
    } else {
        console.log(`Listening on port ${port}`)
    }
})