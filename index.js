var express = require('express')
var app = express()
var fetch = require('node-fetch')

setInterval(async() => {
  await fetch('https://legitcoders.glitch.me')
}, 180 * 1000)

app.listen(3000)
