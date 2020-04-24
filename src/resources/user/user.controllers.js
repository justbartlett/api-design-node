import { User } from './user.model'

// controllers are just middleware but with the intent of returning data
// controllers handle what a route + verb combo can access from the db
// think of them as the final middleware in the stack for a request. there is no intent
// to proceed to another middleware function after a controller (not going to call next)

export const me = (req, res) => {
  res.status(200).json({ data: req.user })
}

export const updateMe = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.user._id, req.body, {
      new: true
    })
      .lean()
      .exec()

    res.status(200).json({ data: user })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}
