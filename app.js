var express       = require("express"),
    app           = express();


// app.set("view engine", "ejs");
// app.use(express.static(__dirname + "/public"));


//Routes
app.get("/", function(req, res){
   res.send("Hi There!");
});

app.get("/hello", function(req, res){
   res.send("hello There!");
});

// app.listen(process.env.PORT, process.env.IP, function(){
//    console.log("Server has started!"); 
// });

app.listen(3000, function(){
   console.log("Server has started!"); 
});