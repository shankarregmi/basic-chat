const Schema = require('mongoose').Schema;

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

module.exports = mongoose.model('Users', UserSchema);