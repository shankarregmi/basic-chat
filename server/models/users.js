const mongoose = require('mongoose');
const Channels = mongoose.model('Channels');

// testing different import
const { io } = require('../index');
const io2 = require('../index').io;
const io3 = require('../').io

console.log(io, io2, io3); // undefined undefined undefined

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  }
}, {
  timestamps: true
});

UserSchema.statics.findOneOrCreate = function(condition, callback) {
  this.findOne(condition, (err, result) => {
    return result ? callback(err, result) : this.create(condition, (err, result) => {
      return callback(err, result)
    })
  })
};

// aftersave hook
// automatically join user to #general channel
UserSchema.post('save', (user, next) => {
  Channels.update({ name: 'general' }, { $push: { participants: user._id }}, (err, raw) => {
    if (!err) {
      next();
    }
  });
});

module.exports = mongoose.model('Users', UserSchema);
