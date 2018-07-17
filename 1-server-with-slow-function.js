'use strict'

const express = require('express')

const app = express()
const payload = initPayload()

app.get('/', (req, res) => {
  res.send(payload())
})

app.listen(3000)

function initPayload (uidSize = 20) {

  return function payload () {
    let chars = ''
    let n = uidSize
    const date = new Date().toISOString()
    const radix = 36
    n *= n * uidSize
    while (n--) {
      const num = Number(new Date(date)) + n
      chars += num.toString(radix).toUpperCase()
    }
    const uid = chars.slice(-uidSize)
    return { date, uid }
  }

}