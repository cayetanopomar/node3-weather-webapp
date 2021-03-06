const request = require('postman-request')
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiY3BvbWFyIiwiYSI6ImNsMmgxZmVrdTAzcWkzZG1qc3UwMjZ4aXUifQ.acOSGRg8HyvENoBWxKdcEg&limit=1'

    request({ url: url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to geocode mapbox.com location services!', undefined)
            return
        } else if (body.features.length === 0) {
            return callback({ error: 'Unable to find coorrdinate Location. Try another search' }, undefined)


        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })

}
module.exports = geocode