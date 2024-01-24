const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            lowercase: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true
        },
        preferredName: {
            type: String,
        },
        location: {
            type: String,
        },
        bio:{
            type: String,
        },
        pets: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Pet',
        }],
        sits: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Sitts',
        },
    }, {
        timestamp: true,
    }
);

module.exports = mongoose.model("User", userSchema);