// import express from 'express'
// import { json, urlencoded } from 'body-parser'
// import morgan from 'morgan'
// import config from './config'
// import cors from 'cors'
// import { signup, signin, protect } from './utils/auth'
// import { connect } from './utils/db'
// import userRouter from './resources/user/user.router'
// import itemRouter from './resources/item/item.router'
// import listRouter from './resources/list/list.router'

// export const app = express()
// // for abstraction, express allows you to create sub routers that combine to make a full router
// const router = express.Router()

// app.disable('x-powered-by')

// app.use(cors())
// app.use(json())
// app.use(urlencoded({ extended: true }))
// app.use(morgan('dev'))

// app.use('/api/item/', itemRouter)

// router.get('/me', (req, res) => {
//   res.send({ me: 'hello' })
// })
// // have to register this router with the root router - app (mounting)

// // cats
// const routes = [
//   'get /cat',
//   'get /cat/:id',
//   'post /cat',
//   'put /cat/:id',
//   'delete /cat/:id'
// ]

// // cleaner way of doing this
// router
//   .route('/cat')
//   .get()
//   .post()

// router
//   .route('/cat/:id')
//   .get()
//   .put()
//   .delete()

// app.use('/api', router)

// // middleware
// // next is a function that when called calls the middleware after it
// // middleware's intent is not to respond but to mutate and pass on
// const log = (req, res, next) => {
//   console.log('logging')
//   req.mydata = 'hello'
//   next()
// }

// app.get('/', (req, res) => {
//   res.send({ message: req.mydata })
// })

// // just add the middleware after our route definition
// // runs the middleware before the controller runs
// // this will only run for this route
// // exact path match /data
// app.get('/data', [log, log, log], (req, res) => {
//   res.send({ data: [1, 2, 3] })
// })

// // regex anything that starts with me
// app.get('^(me)', (req, res) => {
//   res.send({ message: req.mydata })
// })

// // glob path match
// app.get('/user*', (req, res) => {
//   res.send({ message: req.mydata })
// })

// // parameter match
// app.get('/:id', (req, res) => {
//   res.send({ message: req.mydata })
// })

// // if we want to run the middleware for the entire
// app.use(log)

// app.post('/', (req, res) => {
//   console.log(req.body)
//   res.send({ message: 'ok' })
// })

// // create
// app.post('/data', (req, res) => {
//   res.send(req.body)
// })

// // update
// app.put('/data', (req, res) => {
//   res.send(req.body)
// })

// // delete
// // app.delete()

// export const start = () => {
//   app.listen(3000, () => {
//     console.log('server is on 3000')
//   })
// }

// // order matters, top to bottom

import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import config from './config'
import cors from 'cors'
import { signup, signin, protect } from './utils/auth'
import { connect } from './utils/db'
import userRouter from './resources/user/user.router'
import itemRouter from './resources/item/item.router'
import listRouter from './resources/list/list.router'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.post('/signup', signup)
app.post('/signin', signin)

app.use('/api', protect)
app.use('/api/user', userRouter)
app.use('/api/item', itemRouter)
app.use('/api/list', listRouter)

export const start = async () => {
  try {
    await connect()
    app.listen(config.port, () => {
      console.log(`REST API on http://localhost:${config.port}/api`)
    })
  } catch (e) {
    console.error(e)
  }
}
