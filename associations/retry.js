var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

// POST SCHEMA FIRST
var postSchema = new mongoose.Schema({
    title : String,
    content : String
});

// USER SCHEMA

var userSchema = new mongoose.Schema({
    name : String,
    email : String,
    posts : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Post"
    }]
});

var User= mongoose.model("user",userSchema);

var Post = mongoose.model("post",postSchema);

// CREATING USER

// User.create({
//     name : "singla",
//     email : "singla@gmail.com"
// });

// var post1 = new Post({
//     title : "here is your post title",
//     content : "here is your posts content"
// });

// post1.save(function(err,savedPost){
//     if(err)
//     console.log(err);
//     else{
//         var user1 = new User({
//             name : "singla",
//             email : "singla@gmail.com",
//         });
//          user1.posts.push(savedPost._id);
//         user1.save(function(err,saveduser){
//             if(err)
//             console.log(err);
//              else
//              console.log(saveduser);
//         });
//     }
// });

// ADDING POSTS

// Post.create({
//                 title : "my surname is singla part 2",
//                 content : "how my surname is singla part 2"
//             },function(err,createdPost){
//                 if(err){
//                     console.log("there is an error");
//                 } else{
//                     User.findOne({name:"singla"},function(err,foundUser){
//                         if(err){
//                             console.log("there is a error");
//                         }else{
//                             foundUser.posts.push(createdPost);
//                             foundUser.save(function(err,savedUser){
//                                 if(err){
//                                     console.log(err);
//                                 }else{
//                                     console.log(savedUser);    
//                                 }
//                             });
//                         }
//                     });
//                 }
            
// });

User.
    findOne({ name : "singla" }).
    populate("posts").
    exec(function(err,foundUser){
    if(err){
        console.log(err);
    }else{
        console.log(foundUser);
    }
}); 



// User.find({name: "singla"},function(err,foundUser){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(foundUser)
//     }
// });

// Post.find(function(err,foundPost){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(foundPost)
//     }
// });

