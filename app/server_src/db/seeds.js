
const Page = require("./../models/Page.js");
const accessDB = require("./MongoConnection.js");

const seeds = [];

const page1 = new Page("SQL", "Structured Query Language is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS)");
page1.addTextContent("History", "SQL was initially developed at IBM by Donald D. Chamberlin and Raymond F. Boyce in the early 1970s.[14] This version, initially called SEQUEL (Structured English Query Language), was designed to manipulate and retrieve data stored in IBM's original quasi-relational database management system, System R, which a group at IBM San Jose Research Laboratory had developed during the 1970s.[14] The acronym SEQUEL was later changed to SQL because 'SEQUEL' was a trademark of the UK-based Hawker Siddeley aircraft company.");
page1.addTag("SQL");
page1.addTag("Database");
page1.addTag("RDBMS");
seeds.push(page1);

accessDB((db) => {

  db.collection("pages").drop().catch((err) => {
    console.log(err);
  });

  for(let element of seeds){
    db.collection("pages").insert(element).then(() => {
      console.log("Inserted: " + element.title);
    }).catch((err) => {
      console.log(err);
    });;
  }

  db.close().then(() => {
    console.log("db closed");
  }).catch((err) => {
    console.log(err);
  });
  
});
