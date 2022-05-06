const path = require('path')
const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, '../public');


// "hbs" module setting up. It is a singel line!
// 'view engine' is the name and 'hbs' the value

app.set('view engine', 'hbs')

// "express" it expects that all of your "views",
// in this case "hbs tamplates", to live in specific
// folder inside the root folder and called  "views"
// Inside this folder yuo must creat a view that 
// replace the home page. So instead of being a static 
// document served up from public, it is going to be a 
// handlerbars "template" called "index.hbs"
// Now, handlesbars file it is nothing more than html
// with a couple of "nice to have" little features 
// for injecting dynamic values, And that means that we 
// can start with a regular old HTML document to see all
// of this works. So we copy the entire file index.html
// and paste it in index.hbs (and delete the index.html)

app.use(express.static(publicDirectoryPath));

// to serve up this templete "index.hbs" we need to 
// 1) "set up a route"
// 2) inside the routing instead of res.send() use res.render() 
// that will allows us to render our views, that it to render 
// one of our "handlebars templates"

app.get('', (req, res) => {
    res.render('index', {     // name of the tamplete without extension
        title: 'Weather',    // dynamic values
        name: 'Andrew Mead'
    });
});
// In res.render() we pass as a  second argumente an object that 
// contains all the "values" you want that "view" to be able to access
// 

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

// Template Engine (TE) in order to "render dynamic
// web pages" using Express as oposed to static ones.
// Another thing that TE allows us to easily
// create code that we can reuse across pages, as 
// for example the header and the footer
// The tamplate engine that we will use is called
//  "Handlebars"  https://www.npmjs.com/package/hbs
// "hbs" uses handlebarss "behind the scenes" making it
// easier to integrate with "EXPRESS"

// Installation od hbs
// cayetano@pop-os:~/completeNodejsCurse/web-server$ npm i hbs@4.0.1
// setting: see line 11


// old:

// app.get('/help', (req, res) => {
//     res.send('Help page')
// })

// app.get('/about', (req, res) => {
//     res.send('About page')
// });