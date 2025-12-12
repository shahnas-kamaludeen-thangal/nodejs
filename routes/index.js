var express = require("express");
const session = require("express-session");
var router = express.Router();

/* GET home page. */

const users = {
  id: 1,
  userName: "shahnas",
  password: "Open@123",
};

router.get("/", function (req, res, next) {
  res.render("index", { title: "Login" });
});

router.post("/login", (req, res, next) => {
  console.log(req.body);
  const { userName, password } = req.body;
  if (!userName || !password) {
    console.log("User name or password missing.");
    res.render("index", { error: "User name or Password missing" });
  } else if (userName === users.userName && password === users.password) {
    console.log(userName);
    console.log(password);
    req.session.userName = userName;
    res.redirect("/home");
  } else {
    res.render("index", { error: "User name or Password incorrect" });
  }
});

module.exports = router;
