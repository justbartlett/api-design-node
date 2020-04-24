import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50
    },
    status: {
      type: String,
      required: true,
      enum: ['active', 'complete', 'pastdue'],
      default: 'active'
    },
    notes: String,
    due: Date,
    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'user',
      required: true
    },
    list: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'list',
      required: true
    }
  },
  { timestamps: true }
)

//
// add a compound index so all tasks in a list have unique names

itemSchema.index({ list: 1, name: 1 }, { unique: true })

export const Item = mongoose.model('item', itemSchema)

/*
Using models
mongoose models work nicely with crud
C- model.create(), new model()
R - model.find(), model.findOne(), model.findById()
U - model.update(), model.findByIdAndUpdate(), model.findOneAndUpdate()
D - model.remove(), model.findByIdAndUpdate(), model.findOneAndRemove()
*/
