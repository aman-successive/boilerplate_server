const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const inboxSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Inbox', inboxSchema);