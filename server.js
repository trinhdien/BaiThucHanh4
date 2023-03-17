const express = require("express");
const ultil = require("./Caculator.js");
//import { engine } from 'express-handlebars';
const expressHbs = require("express-handlebars");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
//app.engine('.hbs', ExpressHandlebars());
app.engine(
  ".hbs",
  expressHbs.engine({
    extname: "hbs",
    defaultLayout: "main",
    layoutsDir: "views/layouts/",
  })
);

//app.engine( "hbs", engine({ extname: "hbs", defaultLayout: false, layoutsDir: "views/layouts/", }) );

app.set("view engine", ".hbs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("home", {
    layout: "main",
    helpers: {
      foo() {
        return "foo. CP17305 - server Android";
      },
    },
  });
});

app.post("/tinhtoan", (req, res) => {
  switch (req.body.operator) {
    case "cong":
      res.render("emptyView", {
        layout: "main",
        showContentMaytinh: true,
        soA: req.body.soA,
        soB: req.body.soB,
        kq: ultil.cong(Number(req.body.soA), Number(req.body.soB)),
        pt: "cong",
      });
      break;
    case "tru":
      res.render("emptyView", {
        layout: "main",
        showContentMaytinh: true,
        soA: req.body.soA,
        soB: req.body.soB,
        pt: "tru",
        kq: ultil.tru(Number(req.body.soA), Number(req.body.soB)),
      });
      break;
    case "nhan":
      res.render("emptyView", {
        layout: "main",
        showContentMaytinh: true,
        soA: req.body.soA,
        soB: req.body.soB,
        pt: "nhan",
        kq: ultil.nhan(Number(req.body.soA), Number(req.body.soB)),
      });
      break;
    case "chia":
      res.render("emptyView", {
        layout: "main",
        showContentMaytinh: true,
        soA: req.body.soA,
        soB: req.body.soB,
        pt: "chia",
        kq: ultil.chia(Number(req.body.soA), Number(req.body.soB)),
      });
      break;
  }
});

const port = 8000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
