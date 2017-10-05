
function Page(title, summary){
  this.title = title;
  this.summary = summary;
  this.content = [];
  this.tags = []
}

Page.newPageFromHash = function(values){
  const page = new Page(values.title, values.summary);
  page.content = values.content;
  page.tags = values.tags
  return page;
}

Page.prototype.addContent = function(title, type, value){
  const position = this.content.length;
  this.content.push(
    {
      title: title,
      type: type,
      value: value,
      position: position
    }
  );
}

Page.prototype.addTextContent = function(title, value){
  this.addContent(title, "text", value);
}

Page.prototype.addImageContent = function(title, value){
  this.addContent(title, "img", value);
}

Page.prototype.addCodeBlockContent = function(title, value){
  this.addContent(title, "code", value);
}

Page.prototype.addTag = function(tag){
  this.tags.push(tag);
}



module.exports = Page;
