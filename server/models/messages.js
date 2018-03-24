const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  body: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Users'
  },
  channel: {
    type: Schema.Types.ObjectId,
    ref: 'Channels'
  }
},
  {
    timestamps: true
  });

module.exports = mongoose.model('Messages', MessageSchema);
