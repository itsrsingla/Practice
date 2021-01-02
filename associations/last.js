const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/last_demo");

// students schema

const studentSchema =  Schema({
     _id: Schema.Types.ObjectId,
    name : String,
    age : Number
});
const classroomSchema =  Schema({
    classname : String,
    pupils : { type : Schema.Types.ObjectId, ref: 'Student'}
});

const Classroom = mongoose.model('Classroom', classroomSchema);
const Student = mongoose.model('Student', studentSchema);

// const Student1 = new Student({
//     _id: new mongoose.Types.ObjectId(),
//     name: 'singla49',
//     age: 50
// });

// Student1.save(function(err,savedstud){
//     if(err)
//          console.log(err);
//     else{
//         const class1 = new Classroom({
//             classname : 'tenth1',
//             pupils : savedstud._id
//         });
//         class1.save(function(err,savedclass){
//             if(err)
//             console.log(err);
//             else
//             console.log(savedclass);
//         });
//     }
// });

Classroom.
    findOne({ classname : 'tenth1'}).
    populate('pupils').
    exec(function (err, foundclass) {
        if(err)
        console.log(err);
        else
        console.log(foundclass);
    });