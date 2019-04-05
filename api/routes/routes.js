import { userSignup, userLogin, getAllUsers } from '../controller/userController';
import { createQuestion, questionswithOptions } from '../controller/questionController';
import { createOptions } from '../controller/optionsController';
import { getUserById, createQuestionforUser } from '../controller/userquestionController';
import { creategroup, getallGroup } from '../controller/groupController';
import isAuth from '../middleware/is-Auth';

const routes = (app) => {
  app.route('/signup')
  .post(userSignup)

  app.route('/login')
  .post(userLogin)

  app.route('/users')
  .get(getAllUsers)

  app.route('/questions')
  .post(isAuth, createQuestion)

  app.route('/options')
  .post(isAuth, createOptions)

  app.route('/questionsAndoptions')
  .get(isAuth, questionswithOptions)

  app.route('/user/:id')
  .get(isAuth, getUserById)

  app.route('/quetsionforuser')
  .post(isAuth, createQuestionforUser)

  app.route('/group')
  .post(isAuth, creategroup)

  app.route('/allgroups')
  .get(isAuth, getallGroup)  
}

export default routes;
