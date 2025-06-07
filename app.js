console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if(err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data)
  }
});

// MongoDB call
const db = require("./server").db();

// 1: Entry code  
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2: Session code

// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing code
// app.get("/hello", function(req, res) {
// res.end(`<h1 style="background: green">HELLO WORLD by KHIZAR</h1>`);
// });
// app.get("/gift", function(req, res) {
//  res.end(`<h1>Siz sovgalar bolimidasiz</h1>`);
// });

app.post("/create-item", (req, res) => {    // POST => Malumotni ozi bilan olib keladi va osha malumotni DATABASE ga yozadi!
     console.log("user enterd /create-item");
     const new_reja = req.body.reja 
     db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
       if(err) {
        console.log(err);
        res.end("something went wrong");
       } else {
        res.end("successfully added");
       }
     });

//   console.log(req.body);
//   res.json({test: "success"});
});

// app.get('/master', (req, res) => {
//  res.render("master", {user: user});
// });

app.get("/", function(req, res) {
    console.log("user entered /");
    db.collection("plans").find().toArray((err, data) => {
      if(err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        res.render("reja", {items: data});
      }
    });
});

module.exports = app;    
       
 