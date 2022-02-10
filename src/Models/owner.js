const mongoose = require("mongoose")

const ownerSchema = new mongoose.Schema({
    userID: {
        type: String,
        unique: true
    },
})
module.exports = mongoose.model(`ownerModel`, ownerSchema);