const mongoose = require('.');
const Schema = mongoose.Schema;

const TopicSchema = new Schema({
  title: String,
  published_at: {
    type: Date,
    default: Date.now
  },
  score: {
    type: Number,
    default: 0
  }
});

const myModel = mongoose.model('topic', TopicSchema);

module.exports = myModel;