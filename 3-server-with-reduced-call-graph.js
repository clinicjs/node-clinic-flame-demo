'use strict'

const fastify = require('fastify')

const app = fastify()
const payload = initPayload()

app.get('/', (req, reply) => {
  reply.send(payload())
})

app.listen(3000)

function initPayload (idSize = 20) {
  const max = 2147483647
  var count = 0
  return function payload () {
    count = (count + 1) % max
    const date = new Date().toISOString()
    const id = '0'.repeat(idSize - count.toString().length) + count
    return `{"date":"${date}", "uid":"${id}"}`
  }
}
