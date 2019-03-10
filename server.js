const express = require("express")
const app = express()
const port = process.env.PORT || 5001

app.get('/', (request, response) => {
  response.send("Hi")
})

app.listen(port, () => {
  console.log(`Running on ${port}`)
})