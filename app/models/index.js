const dbConfig = require('../../config/db.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.posts = require('./post.models')(mongoose);

module.exports = db;