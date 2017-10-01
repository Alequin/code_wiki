const SERVER = require("./../ServerVariables.js");

function requestAuth(req, res, next) {
  if(SERVER.DISABLE_AUTH) next();
  else authKeyCheck(req, res, next);
}

function authKeyCheck(req, res, next){
  const authKey = req.get(SERVER.AUTH_TITLE);
  console.log(authKey);
  console.log(SERVER.AUTH_KEY);
  if(authKey === SERVER.AUTH_KEY) {
    next();
  } else {
    res.status(401).send('Authentication is wrong');
  }
}

module.exports = requestAuth;
