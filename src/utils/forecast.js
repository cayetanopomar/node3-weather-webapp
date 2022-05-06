const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {


    const url = `http://api.weatherstack.com/current?access_key=69f10c5a50032e62f61b3d03b9021686&query=${latitude},${longitude}&units=m`


    request({ url: url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
            return
        }
        else if (body.error) {
            callback('Unable to find location', undefined)
            console.log('From weatherstack api: ', body.error.info)
            return
        }
        else {
            callback(undefined, {
                description: body.current.weather_descriptions[0],
                temperature: body.current.temperature,
                feelslike: body.current.feelslike,
                country: body.location.country,
                region: body.location.region,
                name: body.location.name
            })
        }

    })

}
module.exports = forecast