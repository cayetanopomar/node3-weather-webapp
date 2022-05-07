const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    const appURL = `/weather?address=${location}`
    fetch(appURL).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageTwo.textContent = data.error
            } else {
                messageOne.textContent = `At ${data.location}`
                messageTwo.textContent = `${data.description} . It is currently ${data.temperature} degrees out, It feels like ${data.feelslike} degrees out.`

            }

        })

    })

})