const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('body-parser')
const session = require('express-session')
const app = require('express')()

const apiRoutes = require('./api')

let config = require('./nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')
const nuxt = new Nuxt(config)

if (config.dev) {
    const builder = new Builder(nuxt)
    builder.build()
}

app.use('/api', apiRoutes)

app.use(nuxt.render)
app.listen(3000)
console.log('Server is listening on http://localhost:3000')