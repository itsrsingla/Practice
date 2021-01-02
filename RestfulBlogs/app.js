var mongoose       = require("mongoose"),
    methodOverride = require("method-override"),
    bodyParser     = require("body-parser"),
    express        = require("express");
var app = express();

mongoose.connect("mongodb://localhost/restful_blog_app");

//APP CONFIGURATION
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(methodOverride("_method"));

// mongoose configuration
var blogSchema = new mongoose.Schema ({
    title : String,
    image : String,
    body : String,
    created : { type : Date, default  : Date.now }
});

var Blog = mongoose.model("Blog",blogSchema);

// Blog.create({
//     title : "mumbai",
//     image : "https://www.photosforclass.com/download/px_2526935",
//     body : "Here is why mumbai is awesome"
// });
// RESTFUL ROUTES

//INDEX ROUTE
app.get("/blogs",function(req,res){
    Blog.find({},function(err,blogs){
        if(err){
            console.log("there was an error");
        } else {
            res.render("index",{blogs : blogs});
        }
    })
    
});

// NEW ROUTE
app.get("/blogs/new",function(req,res){
    res.render("new");
});

// CREATE ROUTE

app.post("/blogs",function(req,res){
    Blog.create(req.body.blog,function(err,newblog){
        if(err){
            console.log("there is a error");
        } else {
            console.log(newblog);
            res.redirect("/blogs");
        }
    });
})
// SHOW ROUTE

app.get("/blogs/:id",function(req,res){
    Blog.findById(req.params.id,function(err,foundBlog){
        if(err){
            console.log("error");
        }else {
            res.render("show",{blog : foundBlog});
        }
    });
});

// EDIT ROUTE

app.get("/blogs/:id/edit",function(req,res){
    Blog.findById(req.params.id,function(err,foundBlog){
        if(err){
            res.redirect("/blogs");
        } else{
            res.render("edit",{ blog : foundBlog});
        }
    });
});

// UPDATE ROUTE

app.put("/blogs/:id",function(req,res){
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err,updatedBlog){
        if(err){
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs/" + req.params.id);
        }
    });
});
// DELETE ROUTE

app.delete("/blogs/:id",function(req,res){
    Blog.findByIdAndRemove(req.params.id,function(err){
        if(err){
            res.redirect("/blogs");
        } else{
            res.redirect("/blogs");
        }
    });
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server is started");
})