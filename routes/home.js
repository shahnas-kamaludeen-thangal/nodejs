const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  if (req.session.userName) {
    console.log(req.session.userName);
    console.log("entered");
    res.render("home", { userName: req.session.userName });
  } else {
    res.redirect("/");
  }
});

router.post("/signout", (req, res, next) => {
  req.session.destroy((err) => {
    console.log("cleared all");
    if (err) {
      return res.redirect("/home");
    }
    res.clearCookie("connect.sid");
    res.redirect("/");
  });
});
module.exports = router;
