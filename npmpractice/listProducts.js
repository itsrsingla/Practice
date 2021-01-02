// var express = require("express");
var faker = require("faker");

   console.log("******************");
   console.log("WELCOME TO MY SHOP");
   console.log("******************");
// var app = express();
var i=0
// app.get("/",function(req,res){
  while(i<10){
      
   console.log("Product Name - " + faker.commerce.productName());
   console.log("Product Price - " + faker.commerce.price());
   i++;
// });
}
// app.listen(process.env.PORT,process.env.IP,function(){
//     console.log("server is on");
// })