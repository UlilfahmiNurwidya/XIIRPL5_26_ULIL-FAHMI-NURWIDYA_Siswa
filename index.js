const express = require('express')
const app = express()
const router = require('./router/server')
const siswaDB = require('./config/siwadb')
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(router)
siswaDB()

app.listen(port, () => {
  console.log(`Server Running on port ${port}`)
})