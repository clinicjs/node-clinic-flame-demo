'use strict'

const fastify = require('fastify')

const app = fastify()
const payload = initPayload()

app.get('/', (req, reply) => {
  reply.send(payload())
})

app.listen(3000)

function initPayload (idSize = 20) {
  if (idSize < 6) throw Error('idSize must be greater than 5')
  const max = 2147483647
  var count = 0
  return function payload () {
    count = (count + 1) % max
    const date = Date.now()
    const chars = count.toString(36).toUpperCase()
    const id = '0'.repeat(idSize - chars.length) + chars
    return `{"date": ${date}, "id": "${id}"}`
  }
}
