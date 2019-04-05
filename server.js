import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import expressValidator from "express-validator";
import routes from './api/routes/routes'

const app = express();

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:/UserInformation', { useNewUrlParser: true });

//body parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

//calling routes
routes(app)

//set port
app.set('port', (process.env.PORT || 3002));
app.listen(app.get('port'), function(){
  console.log(' Server started on port ' + app.get('port'));
});