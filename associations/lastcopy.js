var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/last_demo");

// students schema

var studentSchema =  mongoose.Schema({
    //  _id: mongoose.Schema.Types.ObjectId,
    name : String,
    age : Number
});
var classroomSchema =  mongoose.Schema({
    classname : String,
    pupils : [{ type : mongoose.Schema.Types.ObjectId, ref: 'Student'}]
});

var Classroom = mongoose.model(' Classroom', classroomSchema);
var Student = mongoose.model('Student', studentSchema);

// var Student1 = new Student({
//     // _id: new mongoose.Types.ObjectId(),
//     name: 'sher',
//     age: 55
// });

// Student1.save(function(err,savedstud){
//     if(err)
//          console.log(err);
//     else{
//         const class1 = new Classroom({
//             classname : 'ninth',
//             // pupils : savedstud._id
//         });
//         class1.pupils.push(savedstud.id);
//         class1.save(function(err,savedclass){
//             if(err)
//             console.log(err);
//             else
//             console.log(savedclass);
//         });
//     }
// });

Classroom.
    findOne({ classname : 'ninth'}).
    populate('pupils').
    exec(function (err, foundclass) {
        if(err)
        console.log(err);
        else
        console.log(foundclass);
    });