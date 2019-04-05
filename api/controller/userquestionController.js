import Userquestion from '../model/userquestionModel';

exports.getUserById = (req,res,next) => {

  Userquestion.find({ userid:{ $in:req.params.id }}).populate(['userid','questionid','optionid'])
  .then(result => {
    res.status(200).json({
      message:'users question and options',
      result:result
    })
  })
  .catch(err => {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  })
};

exports.createQuestionforUser = (req,res,next) => {

  const { userid, questionAnswer } = req.body;

  var promise = questionAnswer.map(element => {
    const user = new Userquestion({
      userid:userid,
      questionid:element.questionid,
      optionid:element.optionid
    })
    return user.save()
    .then(result => {
     return result;
   })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      return err;
    })
  })
  Promise.all(promise).then(function(result){
    res.status(200).json({
      message: 'user,question and option',
      result: result
    })
  })
};