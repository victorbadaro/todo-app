const routes = require('express').Router()

routes.get('/', (req, res) => res.redirect('/home'))
routes.get('/home', (req, res) => res.render('index'))
routes.use((req, res) => res.status(404).render('not-found'))

module.exports = routes