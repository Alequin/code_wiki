const express = require('express');
const pagesRouter = new express.Router();
const requestAuth = require("./../server_src/services/RequestAuth");
var mongoClient = require("mongodb").MongoClient;

const onError = (error) => {console.log(error.stack)}

function accessDB(command){
  mongoClient.connect("mongodb://localhost:27017/wiki", function(err, db){
    if(err){
      console.log(err);
      return;
    }else{
      command(db);
    }
  });
}

pagesRouter.get('/', function(req, res, next){
  accessDB((db) => {
    db.collection("pages").find().toArray(function(err, result) {
      res.json(result);
    });
  });
});

module.exports = pagesRouter;
