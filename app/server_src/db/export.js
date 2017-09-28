
var fs = require('fs');
var mongoClient = require("mongodb").MongoClient;

function accessDB(command){
  mongoClient.connect("mongodb://localhost:27017/wiki", function(err, db){
    if(err){
      console.log(err);
    }else{
      command(db);
    }
  });
}

accessDB((db) => {
  db.collection("pages").find().toArray(function(err, result) {
    const path = __dirname + "wiki_export.txt"
    fs.writeFile(path, JSON.stringify(result), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("Database Exported to ", path);
        db.close();
    });
  });
});
