const express = require('express')
const path = require('path')
const members = require('./Members.js')

const logger = require('./middleware/logger')

const app = express()



//Init logger
// app.use(logger)

//gets all members
app.get('/api/members', (req, res) => {
    res.json(members)
})

//Get single member
app.get('/api/members/:id', (req, res) => {
    res.json(members.filter(member => member.id === parseInt(req.params.id)))
})

//Set Static folder
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5000

app.listen(PORT, () =>
    console.log(`SERVER STARTED ON PORT ${PORT}`)
)