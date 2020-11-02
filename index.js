const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const logger = require('./middleware/logger')
const members = require('./Members')

const app = express()



//Init logger
// app.use(logger)

//Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//homepage Route
app.get('/', (req, res) => res.render('index', {
    title: 'Member App',
    members
}))

//Set Static folder
app.use(express.static(path.join(__dirname, 'public')))

// Memvers ApI Routes
app.use('/api/members', require('./routes/api/members'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () =>
    console.log(`SERVER STARTED ON PORT ${PORT}`)
)