const express = require('express');
const wikiRouter = new express.Router();

wikiRouter.use("/page", require("./PageController"))
wikiRouter.use("/summary", require("./SummaryController"))

module.exports = wikiRouter;
