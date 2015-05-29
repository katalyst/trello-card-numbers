var self = require("sdk/self");
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include : "*.trello.com",
  contentStyleFile : self.data.url("index.css")
});
