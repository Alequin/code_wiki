const express = require('express');
const summaryRouter = new express.Router();
const requestAuth = require("./../server_src/services/RequestAuth");
const accessDB = require("./../server_src/db/MongoConnection.js");

const onError = (error) => {console.log(error.stack)}

summaryRouter.get('/', function(req, res, next){
  accessDB((db) => {
    db.collection("pages").find({}, {fields: {title: 1, summary: 1}}).toArray(function(err, result) {
      res.json(result);
      db.close();
    });
  });
});

module.exports = summaryRouter;
