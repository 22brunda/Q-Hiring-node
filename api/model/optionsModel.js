import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const OptionSchema = new Schema({
  name: {
    type: String
  },
  is_valid: {
    type: Boolean
  },
  questionid : { 
    type: Schema.Types.ObjectId, 
    ref: 'Questions' }
  });

module.exports = mongoose.model('Options', OptionSchema);
