//
console.log('Client side javascript file is loaded')
// 

/*
const url = 'https://puzzle.mead.io/puzzle'

 fetch(url).then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})

// API call desde el browser (cliente) a mapbox.com
const address = 'Buenos Aires'
const URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiY3BvbWFyIiwiYSI6ImNsMmgxZmVrdTAzcWkzZG1qc3UwMjZ4aXUifQ.acOSGRg8HyvENoBWxKdcEg&limit=1'

fetch(URL).then((response) => {
    response.json().then((data) => {
        const latitude = data.features[0].center[1]
        const longitude = data.features[0].center[0]
        console.log('latitude: ', latitude, 'longitude: ', longitude)
    })
}) */

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    //API call desde el browser (cliente) a weather-app via query
    // const appURL = `http://localhost:3000/weather?address=${location}` // for develpment
    const appURL = `/weather?address=${location}`
    fetch(appURL).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageTwo.textContent = data.error
            } else {
                // console.log(data.latitude, data.longitude, data.location)
                // messageOne.textContent = `The ooordinates of ${data.location} are:  latitude: ${data.latitude} and longitude: ${data.longitude}`

                // console.log('description: ', data.description)
                // console.log('temperature: ', data.temperature)
                // console.log('feelslike: ', data.feelslike)
                // console.log('location: ', data.location)
                messageOne.textContent = `At ${data.location}`
                messageTwo.textContent = `${data.description} . It is currently ${data.temperature} degrees out, It feels like ${data.feelslike} degrees out.`

            }

        })

    })

})