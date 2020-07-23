const mongoose = require("mongoose");

const IdeaSchema = new mongoose.Schema({
    title: {
      type: String,
      required: [true, 'The idea needs a title!']
    },
    description: String,
    tags: [],
    likes: Number
  });
  
  var Idea = mongoose.model('Idea', IdeaSchema);
  
  module.exports = { Idea: Idea }