import { userSignup, userLogin, getAllUsers } from '../controller/userController';
import { createQuestion, questionswithOptions } from '../controller/questionController';
import { createOptions } from '../controller/optionsController';
import { getUserById, createQuestionforUser } from '../controller/userquestionsController';
import { creategroup, getallGroup } from '../controller/groupsController';
import isAuth from '../middleware/is-Auth';

const routes = (app) => {
  app.route('/signup')
  .post(userSignup)

  app.route('/login')
  .post(userLogin)

  app.route('/getUsers')
  .get(getAllUsers)

  app.route('/createQuestion')
  .post(isAuth, createQuestion)

  app.route('/createOption')
  .post(isAuth, createOptions)

  app.route('/getQuestionsAndOptions')
  .get(isAuth, questionswithOptions)

  app.route('/getuserid')
  .get(isAuth, getUserById)

  app.route('/createQuetsionforUser')
  .post(isAuth, createQuestionforUser)

  app.route('/creategroup')
  .post(isAuth, creategroup)

  app.route('/getallGroup')
  .get(isAuth, getallGroup)
}

export default routes;
