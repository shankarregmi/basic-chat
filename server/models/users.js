const mongoose = require('mongoose');

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
}
module.exports = mongoose.model('Users', UserSchema);