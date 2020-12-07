require("dotenv").config();
var express = require("express");
var mongo = require("mongodb");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var myUrl = require("url");
var dns = require("dns");
var multer = require("multer");
var upload = multer({ dest: "uploads/" });
// var validate = require("valid-url");
var app = express();
// var port = 3000;
var port = process.env.PORT || 3000;

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
const { url } = require("inspector");
// app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204
app.use(cors());
// http://expressjs.com/en/starter/static-files.html
// app.use(express.static("public"));
// app.use("/public", express.static(`${process.cwd()}/public`));

//using body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// http://expressjs.com/en/starter/basic-routing.html

// databse connection
mongoose.connect(process.env.MONGO_URI, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});
const userSchema = new mongoose.Schema({
   email: String,
   name: String,
   password: String,
   relatives: [],
   frieds: [],
});
//test
app.get("/", function (req, res) {
   res.send("helo world from DeSec Engineers");
});

//DISTRESS CALL
app.get("/distress", function (req, res) {
   //need location
   const ipaddress = req.connection.remoteAddress;
   res.json({ address: ipaddress, status: "destress sent" });
   console.log("destress call sent");
});
//ANONYMOUS MESSAGE
app.get("/anon_msg", function (req, res) {
   //need location
   const ipaddress = req.connection.remoteAddress;
   res.json({ address: ipaddress, status: "destress sent" });
   console.log("destress call sent");
});
app.get("/login", function (req, res) {
   res.send("login");
   console.log("destress call sent");
});
//listener
var listener = app.listen(port, function () {
   console.log("Your app is listening on port " + listener.address().port);
});