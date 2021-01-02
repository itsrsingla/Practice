var express                 = require("express"),
    mongoose                = require("mongoose"),
    passport                = require("passport"),
    bodyParser              = require("body-parser"),
    User                    = require("./models/user"),
    LocalStrategy           = require("passport-local"),
    passportLocalMongoose   = require("passport-local-mongoose");
    
mongoose.connect("mongodb://localhost/auth_demo_app");

var app=express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended : true}));
app.use(require("express-session")({
    secret : "Rusty is a very good dog",
    resave : false,
    saveUninitialized : false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// *****************
// ROUTES START HERE
// *****************


app.get("/",function(req,res){
    res.send("hello there");
});

app.get("/secret",isLoggedIn,function(req,res){
    res.render("secret");
})

// AUTH ROTES
// REGISTER ROUTE
app.get("/register",function(req,res){
    res.render("register");
});

app.post("/register",function(req,res){
    User.register( new User( {username : req.body.username}), req.body.password,function (err,user){
        if(err){
            console.log(err);
            return res.render("register");
        }
        
        passport.authenticate("local")(req,res,function(){  //it important function
            res.redirect("/secret");
        });
    });
});
// LOGIN ROUTE
app.get("/login",function(req,res){
    res.render("login");
});
 app.post("/login", passport.authenticate("local",{
     successRedirect : "/secret",
     failureRedirect : "/login"
 }),function(req,res){
     
 });
 // LOGOUT ROUTE
 app.get("/logout",function(req,res){
     req.logout();
     res.redirect("/");
 });
 
 function isLoggedIn(req,res, next){
     if(req.isAuthenticated()){
         return next();
     }
     res.redirect("/login");
 }

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server is started");
});