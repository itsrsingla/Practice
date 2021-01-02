var express = require("express");
var request = require("request");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

    var obj = { curr : Number,
                val : Number};

app.get("/",function(req,res){
    res.render("home");
});

app.get("/number",function(req,res){
    obj = req.query.obj;
    console.log(obj);
    var ans;
    var conrate;
    var type;
    request("https://open.exchangerate-api.com/v6/latest",function(error,response,body){
        if(!error&&response.statusCode==200){
            var rate = JSON.parse(body);
            if(obj.curr==1){
                conrate =  rate.rates.INR;
                console.log(conrate);
                ans = obj.val*conrate;
                console.log(ans);
                type = "INR";
            }else if(obj.curr==2){
                conrate =  rate.rates.EUR;
                ans = obj.val*conrate;
                type = "EUR";
            }else if(obj.curr==3){
                conrate =  rate.rates.PKR;
                ans = obj.val*conrate;
                type="PKR";
            }
        res.send("exchange rate for USD to " +type +" " + " is = " + conrate + " and ans is " + ans);
        }
    });
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server is started");
})