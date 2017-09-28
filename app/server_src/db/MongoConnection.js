
var mongoClient = require("mongodb").MongoClient;

module.exports = (command) => {
  mongoClient.connect("mongodb://localhost:27017/wiki", function(err, db){
    if(err){
      console.log(err);
      return;
    }else{
      command(db);
    }
  });
}
