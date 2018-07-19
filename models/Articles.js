const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { 
    type: String, 
    required: true 
  },
  url: String,
  date: { 
    type: Date
  }
});

const Articles = mongoose.model("Articles", articleSchema);

module.exports = Articles;
