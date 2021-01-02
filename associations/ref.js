var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

var Post = require("./models/post");
var User = require("./models/user");



// CREATING USER

// User.create({
//     name : "singla2",
//     email : "singla@gmail.com"
// },function(err,saveduser){
//     console.log(saveduser);
// });


// // ADDING POSTS

Post.create({
                title : "my surname is singla part 3",
                content : "how my surname is singla part 3"
            },function(err,createdPost){
                if(err){
                    console.log("there is an error");
                } else{
                    User.findOne({name:"singla2"},function(err,foundUser){
                        if(err){
                            console.log("there is a error");
                        }else{
                            foundUser.posts.push(createdPost._id);
                            foundUser.save(function(err,savedUser){
                                if(err)
                                console.log(err);
                                else
                                console.log(savedUser);    
                            });
                            
                        }
                    });
                }
    
});

// User.
//     findOne({name : "singla2"}).
//     populate("posts").
//     exec(function(err,requser){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(requser);
//     }
// }); 
