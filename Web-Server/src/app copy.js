const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))

const app = express()
const PORT = process.env.PORT || 3000

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
//after rename views to templates.. add below "viewpath"
const viewpath = path.join(__dirname, '../templates/views')
const partialspath = path.join(__dirname, '../templates/partials')


//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewpath)
// app.set('partials', partialspath)
hbs.registerPartials(partialspath)

// Setup statuc directory to serve
app.use(express.static(publicDirectoryPath))

// app.get('', ( req, res ) => {
//     res.send('<h1>Weather</h1>')
// })

// app.get('/help', (req, res) => {
//     res.send({
//         name: 'Vishnu',
//         age: '40'
//     })
// })

// app.get('/help1', (req, res) => {
//     res.send([{
//         name: 'Vishnu'
//     }, {
//         name: 'Varthan'
//     }])
// })

// app.get('/about', (req, res) => {
// res.send('<h1>About</h1>')
// })

//render dynamic content
app.get('/index', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        Name: 'Vishnuvarthan'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        Name: 'Vishnuvarthan'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helptext: 'This is helpful text',
        title: 'Help',
        Name: 'Vishnuvarthan'
    })
})

app.get('/Weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: "You must provide an address!"
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {} ) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                 return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })

    // res.send({
    //     forecast: 'It is snowing',
    //     location: 'Tamilnadu',
    //     address: req.query.address
    // })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
         })
    }

    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    // req.send('Help article not found')
     res.render('404', {
        title: '404',
        Name: 'Vishnuvarthan',
        errorMessage: 'Help article not found'
    })
})

app.get('*', (req, res) => {
    // req.send('My 404 page')
    res.render('404', {
        title: '404',
        Name: 'Vishnuvarthan',
        errorMessage: 'Page not found'
    })
})

app.listen(PORT, () => {
    console.log('Server is up on port.' + PORT)
})