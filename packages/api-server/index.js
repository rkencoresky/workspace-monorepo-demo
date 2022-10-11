const express = require("express")
const port = 5000
const app = express();

app.listen("/", (req, res) => {
    res.send("I am a api server")
})

app.listen(port, (e) => {
    if (e) {
        console.error(`error: ${e}`)
    } else {
        console.log(`Listening on port ${port}`)
    }
})