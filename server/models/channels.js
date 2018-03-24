const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ChannelSchema = new Schema({
    name: {
        type: String
    },
    participants: [{
        type: Schema.Types.ObjectId,
        ref: 'Users'
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Channels', ChannelSchema);