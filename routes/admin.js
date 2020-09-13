const express = require("express");
const router = express.Router();
const nunjucks = require("nunjucks");

function testMiddleware(req, res, next) {
  console.log("첫번쨰 미들웨어");
  next();
}

function testMiddleware2(req, res, next) {
  console.log("두번쨰 미들웨어");
  next();
}

router.get("/", testMiddleware, testMiddleware2, (req, res) => {
  res.send("admin 이후 Url");
});

router.get("/products", (req, res) => {
  //   res.send("admin  products 이후 Url");
  res.render("admin/products.html", {
    message: "hello222222222",
    online: "express33333333",
  });
});

router.get("/products/write", (req, res) => {
  res.render("admin/write.html");
});

router.post("/products/write", (req, res) => {
  res.send("adsasd");
});

module.exports = router;
