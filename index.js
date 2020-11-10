const express = require('express')
const showdata = require('./showdata')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => {
  console.log(showdata) // eslint-disable-line no-console

  return response.render('mainpage', { showdata })
})

app.get('/season/:number', (request, response) => {
  const findSeason = showdata.seasons.find((season) => {
    return season.number === parseInt(request.params.number)
  })

  return response.render('seasonpage', { title: showdata.title, season: findSeason })
})

app.all('*', (request, response) => {
  response.sendStatus(404)
})

app.listen(1440, () => {
  console.log('Listening on 1440...') // eslint-disable-line no-console
})
