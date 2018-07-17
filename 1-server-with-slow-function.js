'use strict'

const express = require('express')

const app = express()
const payload = initPayload()

app.get('/', (req, res) => {
  res.send(payload())
})

app.listen(3000)

function initPayload (idSize = 20) {
  return function payload () {
    let chars = ''
    let n = idSize
    const date = new Date().toISOString()
    const radix = 36
    n *= n * idSize
    while (n--) {
      const num = Number(new Date(date)) + n
      chars += num.toString(radix).toUpperCase()
    }
    const id = chars.slice(-idSize)
    return { date, id }
  }
}
