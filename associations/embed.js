var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

// POST SCHEMA FIRST

var postSchema = new mongoose.Schema({
    title : String,
    content : String
});

var Post = mongoose.model("post",postSchema);

// USER SCHEMA

var userSchema = new mongoose.Schema({
    name : String,
    email : String,
    posts : [postSchema]
});

var User = mongoose.model("user",userSchema);

//ADDING DATA

// var newUser = new User({
//     name: "Rahul",
//     email: "rahul@gmail.com"
// });

// newUser.posts.push({
//     title : "my birthday",
//     content : "25th february is my birthday"
// });

// newUser.save(function(err,user){
//     if(err){
//         console.log("hello there");
//     } else { 
//         console.log(user);}
// });

User.findOne({ name: "Rahul"},function(err,user){
    if(err){
        console.log("there is a error");
    } else {
        user.posts.push({
            title : "my dream",
            content : "oh,, you dont wanna know"
        });
        user.save(function(err,user){
            if(err){
                console.log("hello there");
            } else { 
                console.log(user);}
        });
        console.log(user);
    }
})