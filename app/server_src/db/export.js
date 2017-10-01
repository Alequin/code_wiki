
var fs = require('fs');
const accessDB = require("./MongoConnection.js");

accessDB((db) => {
  db.collection("pages").find().toArray(function(err, result) {
    const path = __dirname + "/wiki_db_export.txt"
    console.log("Deleting object Id's");
    for(let element of result){
      delete element._id;
    }
    fs.writeFile(path, JSON.stringify(result), function(err) {
        if(err) {
          console.log(err);
        }else{
          console.log("Database Exported to ", path);
        }
        db.close();
    });
  });
});
