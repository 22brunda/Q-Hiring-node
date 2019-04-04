import Questions from '../model/questionsModel';
import Options from '../model/optionsModel';

exports.createQuestion = (req, res) => {

 const { question, groupid, createdBy } = req.body;

 const params = {
  question,
  groupid,
  createdBy
}

const questionData = new Questions(params);
questionData.save()
.then(data => {
  res.json(data);
}).catch(err => {
  res.status(400).send({ message: 'Question does not found' });
});
};

exports.questionswithOptions = (req, res, next) => {
  Questions.aggregate([{
    $lookup: {
      from: "options",
      localField: "_id",
      foreignField: 'questions',
      as: "options"
    }
  }])
  .then(result => {
    res.status(200).json({
      result: result
    })
  })
  .catch(err => {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  });
};