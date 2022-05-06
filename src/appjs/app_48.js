const path = require('path')
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templete', 'views');


// Setup handlebars engine and view location
app.set('view engine', 'hbs')
app.set('views', viewsPath);


// Setuo static directory to serve
app.use(express.static(publicDirectoryPath));

// call of dynamic templates
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Andrew Mead'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {                 // render a tamplate
        title: 'About',
        name: 'Andrew Mead'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Andrew Mead'
    });
});



app.get('/weather', function (req, res) {
    res.send({ forecast: "it is snowing", location: 'Philadelphia' })
});


app.listen(port, () => {
    console.log('listening at port ' + port)
});

