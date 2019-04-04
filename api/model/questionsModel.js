import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  question: {
    type: String
  },
  groupid: {
    type:Schema.Types.ObjectId,
    ref:'Group',
    required:true
  },
  createdBy:{
    type:String,
    required:true
  }
});

module.exports = mongoose.model('Questions', QuestionSchema);