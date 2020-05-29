var express = require("express");

var app = express();

var bodyParser = require("body-parser");

var friends = ["Rick", "Rajesh", "Arvind"];

app.use(bodyParser.urlencoded({ extended: true }));
//ejs included
app.set("view engine", "ejs");

app.listen(3001, function () {
  console.log("Server listening at port 3001");
});

//root route
app.get("/", function (req, res) {
  res.render("home.ejs");
});

//friends route

app.get("/friends", function (req, res) {
  res.render("friends.ejs", { friends: friends });
});

//we can finally begin work with post routes!! Do this whenever we add data
app.post("/addFriend", function (req, res) {
  //we use body-parser to get the body of the request.
  var newFriend = req.body.friend;
  friends.push(newFriend);

  //redirect to the friends page
  res.redirect("/friends");
});

//any unspecified route
app.get("*", function (req, res) {
  res.send("No page like that exists!");
});
