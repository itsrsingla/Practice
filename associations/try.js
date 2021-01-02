const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/try_demo");

const personSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  age: Number,
  stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

const storySchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: 'Person' },
  title: String,
  fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
});

const Story = mongoose.model('Story', storySchema);
const Person = mongoose.model('Person', personSchema);

const author = new Person({
  _id: new mongoose.Types.ObjectId(),
  name: 'Mark Twain',
  age: 50
});

// author.save(function(err,savedAuthor) {
//   if (err)
//     console.log(err);
//  else{
//     const story1 = new Story({
//         title: 'Tom Sawyer',
//         author: savedAuthor._id    // assign the _id from the person }
//     });
//     story1.save(function (err,storysaved) {
//         if (err) 
//         console.log(err);
//         else
//         console.log(storysaved);
//     // that's it!
//   });
//  }
// });

Story.
  findOne({ title: 'David Coperfield'}).
  populate('author').
  exec(function (err, story) {
    if (err) 
    console.log(err);
    else
    console.log(story);
    // console.log('The author is ' +  story.author.name);
    // prints "The author is Ian Fleming"
  });
