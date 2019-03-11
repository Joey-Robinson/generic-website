// Import dependencies and routes
const express = require('express')
const indexRoutes = require('./routes')
const aboutRoutes = require('./routes/about')
const workRoutes = require('./routes/work')
const consolidate = require('consolidate')
const path = require('path')

const app = express();
const port = process.env.PORT || 3000;


// app.use('/static', express.static('public'))
app.use(express.static(__dirname + '/public'))

// view engine setup
app.engine('html', consolidate.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// Port


// Routes
app.use(indexRoutes);
app.use('/about', aboutRoutes);
app.use('/work', workRoutes);


// Create server
app.listen(port, () => console.log(`App is listening to port ${port}`));