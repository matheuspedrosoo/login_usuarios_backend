const controllers = require('./controllers')
const contollers = require('./controllers')

module.exports = (router) => {
  router.post('/v1/api/auth', controllers.auth)
}
