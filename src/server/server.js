const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const userController = require('./controllers/user.controllers')
// import userController from './controllers/user.controllers'

const PORT = 3001;
const app = express()


app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.post('/api/createUser', userController.createUser , (req, res)=>{

  return res.status(200).json({user: res.locals.status})
})

app.get('/api/getUser', userController.getUsers , (req, res)=>{
  return res.status(200).json({users: res.locals.users})
})

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.message.err);
  return res
    .status(errorObj.status)
    .json({ status: errorObj.status, ...errorObj.message });
});


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;