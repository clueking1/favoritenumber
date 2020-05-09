const express = require('express')
const path = require('path')


const PORT = process.env.PORT || 7001

const app = express()

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

app.listen(PORT, () => {
    console.log('listening on ' + PORT)
})