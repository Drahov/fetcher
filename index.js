var express = require('express')
var app = express()
var fetch = require('node-fetch')

setInterval(async() => {
  await fetch('https://long-fanatical-dimple.glitch.me')
}, 128 * 1000)

app.listen(3000)
