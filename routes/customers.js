const error = require('restify-errors')

module.exports = server => {
  server.get('/customers', (req, res, next) => {
    res.send({ message: 'test'})
    next()
  })
}
