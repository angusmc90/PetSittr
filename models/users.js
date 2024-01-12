const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
        },
        password: {
            type: String,
        },
        email: {
            type: String,
        },
        fullName: {
            type: String,
        },
        location: {
            type: String,
        },
        pets: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Pet',
        }],
        sits: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Sitting',
        },
    }, {
        timestamp: true,
    }
);

module.exports = mongoose.model("User", userSchema);