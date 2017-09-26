var express = require('express')
var config = require('./config/index')

var port = process.env.PORT || config.build.port

var app = express()

var appData = require('./data.json')
var home = appData.home
var orderList = appData.orderList

var apiRoutes = express.Router()

apiRoutes.get('/home', function (req, res) {
  res.json({
    errno: 0,
    data: home
  })
})

apiRoutes.get('/orderList', function (req, res) {
  res.json({
    errno: 0,
    data: orderList
  })
})

app.use('/api', apiRoutes)

app.use(express.static('./dist'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
