var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", function(request, response) {
  response.render("homePage");
});

app.get("/test", function(request, response) {
  response.render("testPage");
});

app.listen(3000, function() {
  console.console.log("firstApp listening on port 3000");
});
