const mongoose = require('mongoose');
const shortid = require('short-unique-id');

const urlSchema = new mongoose.Schema({
  urlOriginal: {
    type: String,
    required: 'agregar una url',
    lowercase: true,
    trim: true,
  },
  urlCorta: {
    type: String,
  },
});

urlSchema.pre('save',async function (next) {
  this.urlCorta = new shortid({ length: 6 }).rnd();
  next();
});



module.exports = mongoose.model('Url', urlSchema);