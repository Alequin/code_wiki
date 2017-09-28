const SERVER = require("../ServerVariables.js");

const requestAuth = function (req, res, next) {
  const authKey = req.get(SERVER.AUTH_TITLE);
  if(authKey === SERVER.AUTH_KEY) {
    next();
  } else {
    res.status(401);
  }
}

module.exports = requestAuth;
