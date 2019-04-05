import { validationResult } from 'express-validator/check';
import Group from '../model/groupModel';

exports.creategroup = (req,res,next) => {

  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const { groupname, createdBy } = req.body;

  const groups = new Group({
    groupname,
    createdBy
  })
  groups.save()
  .then(result => {
    res.status(201).json({
      message:'succesfully created group',
      result:result._id
    })
  })
  .catch(err => {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }) 
};

exports.getallGroup = (req,res,next) => {
  Group.aggregate([{
    $lookup: {
      from: "questions",
      localField: "_id",
      foreignField: 'groupid',
      as: "questions"
    }
  },
  {
    $unwind:{
      path: "$questions",
      preserveNullAndEmptyArrays: true
    }
  },
  {
    $lookup:{
      from: "options",
      localField: "questions._id",
      foreignField: 'questionid',
      as: "questions.options"
    }
  }])
  .then(result => {
    res.status(200).json({
      message:'groups and question',
      result: result
    })
  })
  .catch(err => {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  })
};