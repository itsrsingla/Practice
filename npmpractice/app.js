var express = require("express");
var faker = require("faker");
// var catme = require("cat-me");
// var knockknock = require('knock-knock-jokes');
// var fake1 = faker();
var app = express();

app.get("/",function(req,res){
    // res.send("see the console");
    // console.log(catme());
    // console.log(knockknock());
    var randomName = faker.name.findName();
    res.render("index.ejs",{ name:randomName});
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server is started");
});