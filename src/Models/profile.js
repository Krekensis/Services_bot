const mongoose = require(`mongoose`);

const profileSchema = new mongoose.Schema({
    userID: {
        type: String,
        require: true,
        unique: true
    },
    highTime: {
        type: Number,
        default: 0
    },
    doorScore: {
        type: Number,
        default: 0
    },
})

module.exports = mongoose.model(`profileModel`, profileSchema);