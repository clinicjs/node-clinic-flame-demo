'use strict'

const express = require('express')

const app = express()
const payload = initPayload()

app.get('/', (req, res) => {
  res.send(payload())
})

app.listen(3000)

function initPayload (uidSize = 20) {
  const max = 2147483647
  var count = 0
  return function payload () {
    count += 1
    const date = new Date().toISOString()
    const uid = '0'.repeat(uidSize - count.toString().length) + count
    return `{"date":"${date}", "uid":"${uid}"}`
  }
}

