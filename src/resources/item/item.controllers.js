import { crudControllers } from '../../utils/crud'
import { Item } from './item.model'

export default crudControllers(Item)

// lets say we want to override the defaults we set we could do

/*
export default {
  ...crudControllers(Item),
  getOne() {
    console.log('overriding / doing something different for getOne')
  }
}
*/

// import mongoose from 'mongoose'
// import { connect } from '../../utils/db'

// new model, pass in the fields it needs its asynchronous so we need to await it
// Item.create([{}, {}, {}])

// mongoose.Types.ObjectId() creates a fake id

// const run = async () => {
//   await connect('mongodb://localhost:27107/api-test')
//   const item = await Item.create({
//     name: 'Clean up',
//     createdBy: mongoose.Types.ObjectId(),
//     list: mongoose.Types.ObjectId()
//   })
//   console.log(item)
// }
/*
GET / = read many
GET /:id = read one
POST / = create one
PUT /:id = update one
DELETE /:id = delete one
*/

// export default {}

// run()
