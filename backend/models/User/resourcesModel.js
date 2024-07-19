const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  img: { type: String, required: true },
  duration: { type: String, required: true },
  isTrending: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  img: { type: String, required: true },
  author: { type: String, required: true },
  isTrending: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const Articles = mongoose.model('Article', articleSchema);
const Videos = mongoose.model('Video', videoSchema);

module.exports = {Videos, Articles}
