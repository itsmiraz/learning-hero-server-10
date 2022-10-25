const express = require('express')
const app = express()
const port = 5000
var cors = require('cors')

app.use(cors())
const courses = require('./data/courses.json')
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/courses', (req, res) => {
    res.send(rooms)
})
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = courses.find(n => n._id === id);
    res.send(selectedNews)
})
app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})