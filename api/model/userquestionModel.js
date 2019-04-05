import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserquestionSchema = new Schema({
  userid:{
    type:Schema.Types.ObjectId,
    ref:'User',
    required:true
  },
  questionid:{
    type:Schema.Types.ObjectId,
    ref:'Question',
    required:true
  },
  optionid:{
    type:Schema.Types.ObjectId,
    ref:'Options',
    required:true
  }
});

module.exports = mongoose.model('Userquestion',UserquestionSchema);