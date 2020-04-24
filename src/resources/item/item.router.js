import { Router } from 'express'
// const controller = (req, res) => {
//   res.send({ message: 'hello' })
// }
import controllers from './item.controllers'

const router = Router()

router
  .route('/')
  // .get((req, res) => {
  //   // res.status(404) allows us to send the status code 404
  //   // res.send allows us to send stuff back
  //   // res.end() ends the response.
  //   // res.status(404).send({ message: 'not found' })
  //   // send is pretty smart and will know to send back json
  //   // explicitly send json: res.json({message:'hello'})
  //   // think of a response as a return and just don't do anything after
  //   // don't get clever
  // })
  .get(controllers.getOne)
  .post(controllers.createOne)

router
  .route('/:id')
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne)

export default router

// routes and controllers
/*

Controllers handle what route + verb combo can access from db
think of them as the final middleware in the stack for a request
controllers implement the logic that interacts with our db models
can generalize controllers to work with many models because we're going
with a rest approach which requires CRUD actions on resources

*/
