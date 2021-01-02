var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

var User = require("./models/user");
var Post = require("./models/post");




// CREATING USER

// User.create({
//     name : "singla5",
//     email : "singla@gmail.com"
// },function(err,saveduser){
//     console.log(saveduser);
// });


// // ADDING POSTS

// Post.create({   title : "my surname is singla2",
//                 content : "how my surname is singla3"
//             },function(err,createdPost){
//                 if(err){
//                     console.log("there is an error");
//                 } else{
//                     User.findOne({name:"singla5"},function(err,foundUser){
//                         if(err){
//                             console.log("there is a error2");
//                         }else{
//                             foundUser.posts = createdPost._id;
//                             foundUser.save(function(err,savedUser){
//                                 if(err)
//                                 console.log(err);
//                                 else
//                                 console.log(savedUser);    
//                             });
                            
//                         }
//                     });
//                 }
    
// });

User.
    findOne({name : "singla5"}).
    populate("posts").
    exec(function(err,requser){
    if(err){
        console.log(err);
    }else{
        console.log(requser);
    }
}); 
