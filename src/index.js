const express = require("express")
const route = require("./routes")

const port = 8080
const app = express()

app.use(express.json())

app.use("/api", route)

app.listen(port, () => {
  console.log(`Server run in => ${port}`)
})

module.export = app
