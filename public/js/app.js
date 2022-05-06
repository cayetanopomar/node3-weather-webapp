console.log('Client side javascript file is loaded')
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
    const appURL = `http://localhost:3000/weather?address=${location}`
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

// git 
// 1) run a command to initialize Git in a "new" project folder

// cayetano@pop-os:~/completeNodejsCurse/web-server$ git init
// Initialized empty Git repository in /home/cayetano/completeNodejsCurse/web-server/.git/
// cayetano@pop-os:~/completeNodejsCurse/web-server$ 


// 2) adding files into your project:
//   | untracked files | Unstaged Changes | Staged Chnges | Commits

// By default Git does nos track files hat you add to your application

// "add" comand:   untracked --- add ----> staged Changes
// "Stage Changes" contains the things that are going to be included in
// the next "Commit" using for that the "commit" comand that is:
// "Staged changes" ---commit ----->  "Commits" (each commit has a 
// unique identifier:  175ab39ht49)

// When we make a "change" to un file that git is already tracking,
// that is, a file that has been included ia a prvious commit, that
// comes under the category of "Unstaged Changes" 

// "git status" command