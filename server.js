const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionSring ="mongodb+srv://k11973754:0MpJZ4LvLzPqFn5V@cluster0.nshrdgr.mongodb.net/Reja"

mongodb.connect(
    connectionSring,
     {
       useNewUrlParser: true,
       useUnifiedTopology: true,
    },(err, client) => {
     if(err) console.log("ERROR on connection MongoDB"); 
     else {
        console.log("MongoDB connection succeed");
        module.exports = client;

        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3011;
        server.listen(PORT, function() {
            console.log(
                `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
            );
        });
      }
     }  
    );


