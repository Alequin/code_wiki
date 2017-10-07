const express = require('express');
const pagesRouter = new express.Router();
const requestAuth = require("./../server_src/services/RequestAuth");
const accessDB = require("./../server_src/db/MongoConnection.js");

const onError = (error) => {console.log(error.stack)}

pagesRouter.post('/', requestAuth, function(req, res, next){

  const page = req.body;

  accessDB((db) => {
    db.collection("pages").insertOne(page, function(err, r) {
      if(err){
        onError();
        res.json({inserted: false});
      }
      else{
        res.json({inserted: true});
      }
      db.close();
    });
  });

});

pagesRouter.get('/title/:title', requestAuth, function(req, res, next){

  let query = req.params;

  accessDB((db) => {
    db.collection("pages").find(query).toArray(function(err, result) {
      res.json(result);
      db.close();
    });
  });
});

pagesRouter.delete('/title/:title', requestAuth, function(req, res, next){

  let query = req.params;

  accessDB((db) => {
    db.collection("pages").remove(query, function(err, numberOfRemovedDocs) {
      res.json(numberOfRemovedDocs);
      db.close();
    });
  });
});

module.exports = pagesRouter;
