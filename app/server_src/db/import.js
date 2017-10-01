
var fs = require('fs');
const accessDB = require("./MongoConnection.js");

accessDB((db) => {

  db.collection("pages").drop();
  console.log("Cleared collection pages");

  fs.readFile(__dirname + "/wiki_db_export.txt", "utf8",(err, contents) => {

    if(err) {
      console.log(err);
    }else{
      let toImport = JSON.parse(contents);
      for(let element of toImport){
        db.collection("pages").insert(element);
        console.log("Inserted: " + element.title);
      }
    }

    db.close();
  });

});
