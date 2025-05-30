console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

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
    console.log(req.body);
    res.json({test: "success"});
});

app.get("/", function(req, res) {    // GET => DATABASE dan malumotni olish yoki oqish uchun ishlatiladi!
    res.render("harid");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function(){
  console.log(`The server is running successfully on port: ${PORT}`);
});
