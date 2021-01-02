var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("home");
});

app.get("/movies",function(req,res){
    var name = req.query.movie;
    var url =  "http://www.omdbapi.com/?apikey=thewdb&s=" + name;
    request(url,function(error,response,body){
        if(!error && response.statusCode==200){
            var movies = JSON.parse(body);
            // var movie1 = movies.Search;
            res.render("list",{movies:movies.Search});
        }
    });
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server is started");
});