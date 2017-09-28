
var fs = require('fs');
const accessDB = require("./MongoConnection.js");

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
