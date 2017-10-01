const express = require('express');
const pagesRouter = new express.Router();
const requestAuth = require("./../server_src/services/RequestAuth");
const accessDB = require("./../server_src/db/MongoConnection.js");

const onError = (error) => {console.log(error.stack)}

pagesRouter.get('/:title', requestAuth, function(req, res, next){

  let query = {}
  console.log(req.params);

  accessDB((db) => {
    db.collection("pages").find(query).toArray(function(err, result) {
      res.json(result);
      db.close();
    });
  });
});

module.exports = pagesRouter;
