const express = require('express');
const pagesRouter = new express.Router();
const requestAuth = require("./../server_src/services/RequestAuth");

const onError = (error) => {console.log(error.stack)}

pagesRouter.get('/', function(req, res, next){

});

module.exports = pagesRouter;
