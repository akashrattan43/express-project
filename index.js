const express = require('express')
const path = require('path')
const logger = require('./middleware/logger')

const app = express()



//Init logger
// app.use(logger)

//Set Static folder
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/members', require('./routes/api/members'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () =>
    console.log(`SERVER STARTED ON PORT ${PORT}`)
)