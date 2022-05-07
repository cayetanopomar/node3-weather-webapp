const path = require('path')          // core module (built in nodejs)
const express = require('express');   // npm module
const hbs = require('hbs');
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express();
const port = process.env.PORT || 3000;

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');


// Setup handlebars engine and views location and partials
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));  // express.static() function return the path into "use"


// call of dynamic templates
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Created by Andrew Mead'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {          // render dynamic tamplate
        title: 'About',
        name: 'Created by Andrew Mead'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpfull text',
        title: 'Help',
        name: 'Created by Andrew Mead'
    });
});


// api weather
app.get('/weather', (req, res) => {
    if (!req.query.address) {
        console.log('req.query.address dentro del if: ', req.query.address)
        return res.send({
            error: 'You must provide an address'
        })
    }
    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send(error)
        }

        forecast(latitude, longitude, (error, { description, temperature, feelslike } = {}) => {
            if (error) {
                return res.send(error)
            } else {
                res.send({ description, temperature, feelslike, location })
            }

        })

    })

});


app.get('/help/*', (req, res) => {
    res.render('404', {          // render dynamic tamplate
        title: '404',
        name: 'Created by Andrew Mead',
        errorMessage: 'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {          // render dynamic tamplate
        title: '404',
        name: 'Created by Andrew Mead',
        errorMessage: 'Page not found'
    });

})


app.listen(port, () => {
    console.log('Server listening on port ' + port)
});

