
const express = require("express")
const app = express()
const port = process.env.PORT || 80;
const ejs = require("ejs")

const cors = require('cors');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(cors());
app.set('view engine', 'ejs');

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

if (false) {
  require("./database") // database handler data
}

app.get("/", (req, res) => {
  res.render("index")
})

const request = require("request");

app.listen(port, _ => { /**/ console.log(`hosted on port http://localhost:${port}`); })
