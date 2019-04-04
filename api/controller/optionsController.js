import Questions from '../model/questionsModel';
import Options from '../model/optionsModel';

exports.createOptions = (req, res) => {

  const { name, is_valid, questionid } = req.body;

  const params = {
    name, 
    is_valid, 
    questionid
  }

  const optionInfo = new Options(params);
  optionInfo.save()
  .then(data => {
    res.json(data);
  }).catch(err => {
    res.status(400).send({message : 'No options found'});
  });
};
