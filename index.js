const express = require('express')
const app = express()
const port = 5000
var cors = require('cors')

app.use(cors())
// const courses = require('/data/courses.json')
app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})