
use pages;
db.dropDatabase();

db.pages.insert(
  [
    {
      title: "example page 1",
      summary: "example summary 1",
      content: [
        {
          title: "content title example 1",
          type: "text",
          value: "example text value 1",
          position: 1,
        },
      ],
    }
  ]
);
db.pages.find();
