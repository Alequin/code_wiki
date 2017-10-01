
function Page(title, summary){
  this.title = title;
  this.summary = summary;
  this.content = [];
}

Page.prototype.addContent = function(title, type, value){
  const position = this.content.length;
  content.push(
    {
      title: title,
      type: type,
      value: value,
      position: position
    }
  );
}

Page.prototype.AddTextContent = function(title, value){
  this.addContent(title, "text", value);
}

Page.prototype.AddImageContent = function(title, value){
  this.addContent(title, "img", value);
}

Page.prototype.AddCodeBlockContent = function(title, value){
  this.addContent(title, "code", value);
}

module.exports = Page;
